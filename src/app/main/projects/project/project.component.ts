import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { Project } from '../project.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ProjectService } from '../project.service';
import { MatSnackBar, MatDialogModule, MatInput } from '@angular/material';
import { Router } from '@angular/router';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FuseUtils } from '@fuse/utils';
import { fuseAnimations } from '@fuse/animations';
import { Client } from 'app/main/clients/client.model';
import { Feature } from 'app/main/features/feature.model';
import { Resource } from 'app/main/resources/resource.model';
import { Milestone } from 'app/main/milestones/milestone.model';
import { MilestoneFormComponent } from 'app/main/milestones/milestone-form/milestone-form.component';
import { MilestoneComponent } from 'app/main/milestones/milestone/milestone.component';
import { MilestoneService } from 'app/main/milestones/milestone.service';
import { namespaceHTML } from '@angular/core/src/render3';
import { timingSafeEqual } from 'crypto';


@Component({
  providers: [MilestoneFormComponent],
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: fuseAnimations
})
export class ProjectComponent implements OnInit {
@ViewChild('projectname')
nameInput: MatInput;

  dialogRef: any;

  clients: Client[];
  projectFeaturesList: Feature[];
  projectResourcesList: Resource[];
  projectMilestonesList: Milestone[];
  project: Project;
  pageType: string;
  projectForm: FormGroup;
  // resourceToppings = new FormControl();
  // featureToppings = new FormControl();
  // milestoneToppings = new FormControl();
  
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  // toppings = new FormControl();
  // toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  // myControl = new FormControl();
  package_id: string;

  // Private
  private _unsubscribeAll: Subject<any>;


  /**
   * Constructor
   *
   * @param {ProjectService} _projectService
   * @param {MilestoneService} _milestoneService
   * @param {FormBuilder} _formBuilder
   * @param {MatDialog} _matDialog
   * @param {MatSnackBar} _matSnackBar
   *
   */
  constructor(
    private _projectService: ProjectService,
    private _milestoneService: MilestoneService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router, 
    private comp: MilestoneFormComponent,
    private _matDialog: MatDialog
  ) {
    // Set the default
    this.project = new Project();
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
    this._projectService.onItemChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(project => {

        if (project) {
          this.project = new Project(project);
          this.pageType = 'edit';
        }
        else {
          this.pageType = 'new';
          this.project = new Project();

         
         
        }
        this.projectForm = this.createProjectForm();


        this._milestoneService.milestones = this.project.projectMilestones;
        
      this._milestoneService.onMilestonesChanged.next(this._milestoneService.milestones);

      });


    this._projectService.getAllClients().subscribe(projectClient => {
      this.clients = projectClient.map((client) => new Client(client));
      // console.log(this.resourceDepartments);

    });


    this._projectService.getAllFeatures().subscribe(projectFeature => {
      this.projectFeaturesList = projectFeature.map((feature) => new Feature(feature));
      // console.log(this.resourceDepartments);

    });

    this._projectService.getAllResources().subscribe(projectResource => {
      this.projectResourcesList = projectResource.map((resource) => new Resource(resource));
      // console.log(this.resourceDepartments);

    });

    this._projectService.getAllMilestones().subscribe(projectMilestone => {
      this.projectMilestonesList = projectMilestone.map((milestone) => new Milestone(milestone));
      // console.log(this.resourceDepartments);

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
   * Create project form
   *
   * @returns {FormGroup}
   */
  createProjectForm(): FormGroup {

    
      return this._formBuilder.group({
        id: [this.project.id],
        name: [this.project.name,[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        handle: [this.project.handle],
        projectClient:[this.project.projectClient],
        projectFeatures:[this.project.projectFeatures], 
        projectResources:[this.project.projectResources], 
        projectMilestones:[this.project.projectMilestones], 
        projectStartDate:[this.project.projectStartDate], 
        projectDevelopmentDate: [this.project.projectDevelopmentDate], 
        projectCost:[this.project.projectCost ,[Validators.required, Validators.minLength(2), Validators.maxLength(50)]], 
        projectTimeline:[this.project.projectTimeline,[Validators.required, Validators.minLength(3), Validators.maxLength(100)]], 
        projectPaymentMethod:[this.project.projectPaymentMethod,[Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
      });

  }

  /**
   * Save project
   */
  saveProject(): void {
    const data = this.projectForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);
    

    this._projectService.saveItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._projectService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this._router.navigate(['/projects']);
      });
  }
  // public callMe(): void {
  //   this.comp.newMilestone();
  // }

  /**
   * Add project
   */
  addProject(): void {
    const data = this.projectForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);
    // data.projectFeatures = this.featureToppings.value;
    // data.projectResources = this.resourceToppings.value;
    data.projectMilestones = this._milestoneService.milestones;
    
    this._projectService.addItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._projectService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });

        // Change the location with new one
        this._router.navigate(['/projects']);
      });
  }

  compareFn(c1: Project, c2: Project): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  comparerResource(o1: Resource, o2: Resource): boolean {
    // if possible compare by object's name, and not by reference.
    return o1 && o2 ? o1.name === o2.name : o2 === o2;
  }
  comparerFeature(o1: Feature, o2: Feature): boolean {
    // if possible compare by object's name, and not by reference.
    return o1 && o2 ? o1.name === o2.name : o2 === o2;
  }
    /**
     * New contact
     */
    newContact(): void
    {
        this.dialogRef = this._matDialog.open(MilestoneFormComponent, {
            panelClass: 'milestone-form-dialog',
            data      : {
                action: 'new',
               
            }
        });

        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if ( !response )
                {
                    return;
                }
                this.projectMilestonesList= response.getRawValue();
      console.log(this.projectMilestonesList);


//       if(this.createProjectForm){
//         this._milestoneService.addItem(data)
//      .then(() => {

//   // Trigger the subscription with new data
//   this._milestoneService.onItemChanged.next(data);

//   // Show the success message
//   this._matSnackBar.open('Record added', 'OK', {
//     verticalPosition: 'top',
//     duration: 2000
//   });

//   // Change the location with new one

// });

//       }
   


                this._milestoneService.updateMilestone(response.getRawValue());
            });
    }


}