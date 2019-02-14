import { Component, OnInit } from '@angular/core';
import { Department } from '../department.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { DepartmentService } from '../department.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  animations: fuseAnimations
})
export class DepartmentComponent implements OnInit {
  department: Department;
  pageType: string;
  departmentForm: FormGroup;
  
  // myControl = new FormControl();
  package_id: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  
  /**
   * Constructor
   *
   * @param {DepartmentService} _departmentService
   * @param {FormBuilder} _formBuilder
   * @param {MatSnackBar} _matSnackBar,
   *
   */
  constructor(
    private _departmentService: DepartmentService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {
    // Set the default
    this.department = new Department();
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
    this._departmentService.onItemChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(department => {

        if (department) {
          this.department = new Department(department);
          this.pageType = 'edit';
        }
        else {
          this.pageType = 'new';
          this.department = new Department();
        }
        this.departmentForm = this.createDepartmentForm();


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
   * Create department form
   *
   * @returns {FormGroup}
   */
  createDepartmentForm(): FormGroup {
    
      return this._formBuilder.group({
        id: [this.department.id],
        departmentName: [this.department.departmentName],
        handle: [this.department.handle],
        departmentBench: [this.department.departmentBench],
        departmentHod: [this.department.departmentHod]
      });
   
  }

  /**
   * Save department
   */
  saveDepartment(): void {
    const data = this.departmentForm.getRawValue();
    data.handle = FuseUtils.handleize(data.departmentName);

    this._departmentService.saveItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._departmentService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this._router.navigate(['/departments']);
      });
  }

  /**
   * Add department
   */
  addDepartment(): void {
    const data = this.departmentForm.getRawValue();
    data.handle = FuseUtils.handleize(data.departmentName);
  
    this._departmentService.addItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._departmentService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });

        // Change the location with new one
        this._router.navigate(['/departments']);
      });
  }

}