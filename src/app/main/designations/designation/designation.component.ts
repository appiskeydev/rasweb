import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInput, MatSnackBar } from '@angular/material';
import { Designation } from '../designation.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { DesignationService } from '../designation.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {

  @ViewChild('designationame') 
  nameInput: MatInput;

  designation: Designation;
  pageType: string;
  designationForm: FormGroup;
  
  // myControl = new FormControl();
  package_id: string;

  // Private
  private _unsubscribeAll: Subject<any>;
  toppings = new FormControl();
  
  /**
   * Constructor
   *
   * @param {DesignationService} _designationService
   * @param {FormBuilder} _formBuilder
   * @param {MatSnackBar} _matSnackBar,
   *
   */
  constructor(
    private _designationService: DesignationService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {
    // Set the default
    this.designation = new Designation();
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
    this.nameInput.focus();

    // Subscribe to update product on changes
    this._designationService.onItemChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(designation => {

        if (designation) {
          this.designation = new Designation(designation);
          this.pageType = 'edit';
        }
        else {
          this.pageType = 'new';
          this.designation = new Designation();
        }
        this.designationForm = this.createDesignationForm();


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
   * Create skill form
   *
   * @returns {FormGroup}
   */
  createDesignationForm(): FormGroup {
    
      return this._formBuilder.group({
        id: [this.designation.id],
        name: [this.designation.name,[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        handle: [this.designation.handle]      });
   
  }

  /**
   * Save Designation
   */
  saveDesignation(): void {
    const data = this.designationForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    this._designationService.saveItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._designationService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this._router.navigate(['/designations']);
      });
  }

  /**
   * Add Designation
   */
  addDesignation(): void {
    const data = this.designationForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    this._designationService.addItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._designationService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });

        // Change the location with new one
        this._router.navigate(['/designations']);
      });
  }


}
