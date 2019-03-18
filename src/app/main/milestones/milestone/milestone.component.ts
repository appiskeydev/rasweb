import { Component, OnInit } from '@angular/core';
import { Milestone } from '../milestone.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { MilestoneService } from '../milestone.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { fuseAnimations } from '@fuse/animations';
import { Project } from 'app/main/projects/project.model';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
  animations: fuseAnimations
})
export class MilestoneComponent implements OnInit {
  projects:Project[];
  milestone: Milestone;
  pageType: string;
  milestoneForm: FormGroup;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  
  
  // myControl = new FormControl();
  package_id: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  
  /**
   * Constructor
   *
   * @param {MilestoneService} _milestoneService
   * @param {FormBuilder} _formBuilder
   * @param {MatSnackBar} _matSnackBar,
   *
   */
  constructor(
    private _milestoneService: MilestoneService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {
    // Set the default
    this.milestone = new Milestone();
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
    this._milestoneService.onItemChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(milestone => {

        if (milestone) {
          this.milestone = new Milestone(milestone);
          this.pageType = 'edit';
        }
        else {
          this.pageType = 'new';
          this.milestone = new Milestone();
        }
        this.milestoneForm = this.createMilestoneForm();


      });

      this._milestoneService.getAllProjects().subscribe(milestoneProject => {
        this.projects =  milestoneProject.map((project) => new Project(project));


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
   * Create milestone form
   *
   * @returns {FormGroup}
   */
  createMilestoneForm(): FormGroup {
    
      return this._formBuilder.group({
        id: [this.milestone.id],
        name: [this.milestone.name ,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        handle: [this.milestone.handle],
        milestoneStartDate: [this.milestone.milestoneStartDate],
        milestoneDelieveryDate: [this.milestone.milestoneDelieveryDate],
        milestoneExpectedPayment: [this.milestone.milestoneExpectedPayment,[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        milestoneCost: [this.milestone.milestoneCost,[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        milestoneNoOfDays: [this.milestone.milestoneNoOfDays,[Validators.minLength(1), Validators.maxLength(50)]],
        project: [this.milestone.project]
      });
   
  }

  /**
   * Save milestone
   */
  saveMilestone(): void {
    const data = this.milestoneForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    this._milestoneService.saveItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._milestoneService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this._router.navigate(['/milestones']);
      });
  }

  /**
   * Add milestone
   */
  addMilestone(): void {
    const data = this.milestoneForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    console.log(data);
    this._milestoneService.addItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._milestoneService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });

        // Change the location with new one
        this._router.navigate(['/projects/new']);
      });
  }


  compareFn(c1: Milestone, c2: Milestone): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
   }

}