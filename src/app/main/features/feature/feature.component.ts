import { Component, OnInit } from '@angular/core';
import { Feature } from '../feature.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FeatureService } from '../feature.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  animations: fuseAnimations
})
export class FeatureComponent implements OnInit {
  feature: Feature;
  pageType: string;
  featureForm: FormGroup;
  
  // myControl = new FormControl();
  package_id: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  
  /**
   * Constructor
   *
   * @param {FeatureService} _featureService
   * @param {FormBuilder} _formBuilder
   * @param {MatSnackBar} _matSnackBar,
   *
   */
  constructor(
    private _featureService: FeatureService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {
    // Set the default
    this.feature = new Feature();
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
    this._featureService.onItemChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(feature => {

        if (feature) {
          this.feature = new Feature(feature);
          this.pageType = 'edit';
        }
        else {
          this.pageType = 'new';
          this.feature = new Feature();
        }
        this.featureForm = this.createFeatureForm();


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
   * Create feature form
   *
   * @returns {FormGroup}
   */
  createFeatureForm(): FormGroup {
    
      return this._formBuilder.group({
        id: [this.feature.id],
        name: [this.feature.name ,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        handle: [this.feature.handle],
        featureEstimateDuration: [this.feature.featureEstimateDuration,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]]
      });
   
  }

  /**
   * Save feature
   */
  saveFeature(): void {
    const data = this.featureForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    this._featureService.saveItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._featureService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this._router.navigate(['/features']);
      });
  }

  /**
   * Add feature
   */
  addFeature(): void {
    const data = this.featureForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    this._featureService.addItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._featureService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });

        // Change the location with new one
        this._router.navigate(['/features']);
      });
  }

}