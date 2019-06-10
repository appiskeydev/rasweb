import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatInput, MatSnackBar } from '@angular/material';
import { Company } from '../company.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { CompanyService } from '../company.service';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class CompanyComponent implements OnInit {


  company: Company;
  pageType: string;
  companyForm: FormGroup;
  
  // myControl = new FormControl();
  package_id: string;

  // Private
  private _unsubscribeAll: Subject<any>;
  toppings = new FormControl();
  
  /**
   * Constructor
   *
   * @param {CompanyService} _companyService
   * @param {FormBuilder} _formBuilder
   * @param {MatSnackBar} _matSnackBar,
   *
   */
  constructor(
    private _companyService: CompanyService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {
    // Set the default
    this.company = new Company();
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
    this._companyService.onItemChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(company => {

        if (company) {
          this.company = new Company(company);
          this.pageType = 'edit';
        }
        else {
          this.pageType = 'new';
          this.company = new Company();
        }
        this.companyForm = this.createCompanyForm();


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
  createCompanyForm(): FormGroup {
    
      return this._formBuilder.group({
        id: [this.company.id],
        name: [this.company.name,[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        handle: [this.company.handle]      });
   
  }

  /**
   * Save Designation
   */
  saveCompany(): void {
    const data = this.companyForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    this._companyService.saveItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._companyService.onItemChanged.next(data);

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
  addCompany(): void {
    const data = this.companyForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    this._companyService.addItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._companyService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });

        // Change the location with new one
        this._router.navigate(['/companies']);
      });
  }

}
