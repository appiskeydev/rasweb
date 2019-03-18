import { Component, OnInit, ViewChild } from '@angular/core';
import { Fringebenefit } from '../fringebenefit.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FringebenefitService } from '../fringebenefit.service';
import { MatSnackBar, MatInput } from '@angular/material';
import { Router } from '@angular/router';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-fringebenefit',
  templateUrl: './fringebenefit.component.html',
  styleUrls: ['./fringebenefit.component.scss'],
  animations: fuseAnimations
})
export class FringebenefitComponent implements OnInit {

  @ViewChild('fringename')
  nameInput: MatInput;
  fringebenefit: Fringebenefit;
  pageType: string;
  fringebenefitForm: FormGroup;
  
  // myControl = new FormControl();
  package_id: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  
  /**
   * Constructor
   *
   * @param {FringebenefitService} _fringebenefitService
   * @param {FormBuilder} _formBuilder
   * @param {MatSnackBar} _matSnackBar,
   *
   */
  constructor(
    private _fringebenefitService: FringebenefitService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {
    // Set the default
    this.fringebenefit = new Fringebenefit();
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
    this._fringebenefitService.onItemChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(fringebenefit => {

        if (fringebenefit) {
          this.fringebenefit = new Fringebenefit(fringebenefit);
          this.pageType = 'edit';
        }
        else {
          this.pageType = 'new';
          this.fringebenefit = new Fringebenefit();
        }
        this.fringebenefitForm = this.createFringebenefitForm();


      });
  }
  /**
   * On destroy
   */
  ngOnDestroy(): void {
  this.nameInput.focus();
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }



  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Create fringebenefit form
   *
   * @returns {FormGroup}
   */
  createFringebenefitForm(): FormGroup {
    
      return this._formBuilder.group({
        id: [this.fringebenefit.id],
        benefitMonth: [this.fringebenefit.benefitMonth],
        name: [this.fringebenefit.name],
        expenseAmount: [this.fringebenefit.expenseAmount],
        isOneTime: [this.fringebenefit.isOneTime]
      });
   
  }

  /**
   * Save fringebenefit
   */
  saveFringebenefit(): void {
    const data = this.fringebenefitForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    this._fringebenefitService.saveItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._fringebenefitService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this._router.navigate(['/fringebenefits']);
      });
  }

  /**
   * Add fringebenefit
   */
  addFringebenefit(): void {
    const data = this.fringebenefitForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    this._fringebenefitService.addItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._fringebenefitService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });

        // Change the location with new one
        this._router.navigate(['/fringebenefits']);
      });
  }

}