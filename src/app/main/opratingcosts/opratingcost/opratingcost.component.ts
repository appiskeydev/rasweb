import { Component, OnInit } from '@angular/core';
import { Opratingcost } from '../opratingcost.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { OpratingcostService } from '../opratingcost.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-opratingcost',
  templateUrl: './opratingcost.component.html',
  styleUrls: ['./opratingcost.component.scss'],
  animations: fuseAnimations
})
export class OpratingcostComponent implements OnInit {
  opratingcost: Opratingcost;
  pageType: string;
  opratingcostForm: FormGroup;
  
  // myControl = new FormControl();
  package_id: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  
  /**
   * Constructor
   *
   * @param {OpratingcostService} _opratingcostService
   * @param {FormBuilder} _formBuilder
   * @param {MatSnackBar} _matSnackBar,
   *
   */
  constructor(
    private _opratingcostService: OpratingcostService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {
    // Set the default
    this.opratingcost = new Opratingcost();
    // Set the private defaults
    this._unsubscribeAll = new Subject();

  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {

    // Subscribe to update product on changes
    this._opratingcostService.onItemChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(opratingcost => {

        if (opratingcost) {
          this.opratingcost = new Opratingcost(opratingcost);
          this.pageType = 'edit';
        }
        else {
          this.pageType = 'new';
          this.opratingcost = new Opratingcost();
        }
        this.opratingcostForm = this.createOpratingcostForm();


      });
  }
  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }



  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Create opratingcost form
   *
   * @returns {FormGroup}
   */
  createOpratingcostForm(): FormGroup {
    
      return this._formBuilder.group({
        id: [this.opratingcost.id],
        monthlyCost: [this.opratingcost.monthlyCost,[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        handle: [this.opratingcost.handle]
      });
   
  }

  /**
   * Save opratingcost
   */
  saveOpratingcost(): void {
    const data = this.opratingcostForm.getRawValue();
    // data.handle = FuseUtils.handleize(data.title);

    this._opratingcostService.saveItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._opratingcostService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this._router.navigate(['/opratingcosts']);
      });
  }

  /**
   * Add opratingcost
   */
  addOpratingcost(): void {
    const data = this.opratingcostForm.getRawValue();
    // data.handle = FuseUtils.handleize(data.title);

    this._opratingcostService.addItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._opratingcostService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });

        // Change the location with new one
        this._router.navigate(['/opratingcosts']);
      });
  }

}