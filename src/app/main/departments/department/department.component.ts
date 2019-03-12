import { Component, OnInit, ViewChild } from '@angular/core';
import { Department } from '../department.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormControl, CheckboxControlValueAccessor } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { DepartmentService } from '../department.service';
import { MatSnackBar, MatInput } from '@angular/material';
import { Router } from '@angular/router';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { fuseAnimations } from '@fuse/animations';
import { Resource } from 'app/main/resources/resource.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  animations: fuseAnimations
})
export class DepartmentComponent implements OnInit {
  @ViewChild('deptname')
  nameInput : MatInput;
  departmentResources: Resource[];
  department: Department;
  pageType: string;
  departmentForm: FormGroup;
  
  resourceControl = new FormControl();

  resourceFilteredOptions: Observable<Resource[]>;

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
    this.nameInput.focus();

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



      this._departmentService.getAll().subscribe(departmentResources => {
        this.departmentResources =  departmentResources.map((resource) => new Resource(resource));
    console.log(this.departmentResources);

    this.resourceFilteredOptions = this.departmentForm.controls['departmentHod'].valueChanges
    .pipe(startWith<string | Resource>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.departmentResources.slice()));


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
        name: [this.department.name ,[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        handle: [this.department.handle],
        departmentBench: [this.department.departmentBench],
        departmentHod: [this.department.departmentHod, customValidator]
      });
   
  }

  /**
   * Save department
   */
  saveDepartment(): void {
    const data = this.departmentForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

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

  private _filter(name: string): Resource[] {
    const filterValue = name.toLowerCase();
    return this.departmentResources.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
}
displayFn(item?: Resource): string | undefined {

  return item ? item.name : undefined;
}

  /**
   * Add department
   */
  addDepartment(): void {
    const data = this.departmentForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);
  if(typeof data.departmentHod === "string")
  {
   return null;
  }
  
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

  compareFn(c1: Department, c2: Department): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
   }

}

export const customValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  console.log('validate');
  if ( !control.parent || !control )
  {
      return null;
  }

  const departmentHod = control.parent.get('departmentHod');
 

  if ( typeof departmentHod === "string")
  {

      return null;
  }



  return {'departmentHodIsString': true};
};
