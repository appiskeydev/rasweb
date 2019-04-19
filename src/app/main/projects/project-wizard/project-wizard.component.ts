import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FuseUtils } from '@fuse/utils';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { MilestoneService } from 'app/main/milestones/milestone.service';
import { FeatureService } from 'app/main/features/feature.service';
import { ResourceService } from 'app/main/resources/resource.service';
import { Client } from 'app/main/clients/client.model';
import { Milestone } from 'app/main/milestones/milestone.model';
import { Resource } from 'app/main/resources/resource.model';
import { Feature } from 'app/main/features/feature.model';
import { fuseAnimations } from '@fuse/animations';
import { ProjectWizardService } from '../project-wizard.service';
import { MilestoneFormComponent } from 'app/main/milestones/milestone-form/milestone-form.component';
import { ResourceDailogFormComponent } from 'app/main/resources/resource-dailog-form/resource-dailog-form.component';
import { Project } from '../project.model';
@Component({
  selector: 'app-project-wizard',
  templateUrl: './project-wizard.component.html',
  styleUrls: ['./project-wizard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ProjectWizardComponent implements OnInit {


    clients: Client[];
    projectMilestonesList: Milestone[];
    projectResourceList: Resource[];
    projectFeatureList: Feature[];


    // this is form get All Resources
    projectResourcesList: Resource[];


    dialogRef: any;
    project: Project;
    pageType: string;
    projectForm: FormGroup;

    minDate = new Date(2000, 0, 1);
    maxDate = new Date(2020, 0, 1);
    // Private
    private _unsubscribeAll: Subject<any>;
    // // Private
    // private _unsubscribeAll: Subject<any>;


    resourceControl = new FormControl();
    featureControl = new FormControl();

    featureFilteredOptions: Observable<Feature[]>;
    resourceFilteredOptions: Observable<Resource[]>;

    /**
     * Constructor
     *
     * @param {ProjectWizardService} _projectWizardService
     * @param {FormBuilder} _formBuilder
     * @param {MatDialog} _matDialog
     * @param {MilestoneService} _milestoneService
     * @param {FeatureService} _featureService
     * @param {MatSnackBar} _snackBar
     * @param {ResourceService} _resourceService
     */
    constructor(
        private _projectWizardService: ProjectWizardService,
        private _formBuilder: FormBuilder,
        private _matDialog: MatDialog,
        private _milestoneService: MilestoneService,
        private _featureService: FeatureService,
        public _snackBar: MatSnackBar,
        private _resourceService: ResourceService
    ) {
        // Set the default
        this.project = new Project();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
        // Set the private defaults
        // this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to update project on changes
        this._projectWizardService.onItemChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(project => {
       
            this.project = new Project(project);
            this.pageType = 'edit';
        
       

       this.projectForm = this.createProjectForm();
        });


        this._projectWizardService.getAllClients().subscribe(projectClient => {
            this.clients = projectClient.map((client) => new Client(client));
            // console.log(this.resourceDepartments);

        });

        this._projectWizardService.getAllResources().subscribe(projectResource => {
            this.projectResourcesList = projectResource.map((resource) => new Resource(resource));

            this.resourceFilteredOptions = this.resourceControl.valueChanges
                .pipe(startWith<string | Resource>(''),
                    map(value => typeof value === 'string' ? value : value.name),
                    map(name => name ? this._filter(name) : this.projectResourcesList.slice()));

        });


        this._projectWizardService.getAllFeatures().subscribe(projectFeature => {
            this.projectFeatureList = projectFeature.map((feature) => new Feature(feature));
            console.log(this.projectFeatureList);
            this.featureFilteredOptions = this.featureControl.valueChanges
            .pipe(startWith<string | Feature>(''),
                map(value => typeof value === 'string' ? value : value.name),
                map(name => name ? this._filterFeature(name) : this.projectFeatureList.slice()));
          });


        this._milestoneService.milestones = this.project.projectMilestones;
        this._resourceService.resources = this.project.projectResources;
        this._featureService.features = this.project.projectFeatures;


    }

    private _filterFeature(name: string): Feature[] {
        const filterValue = name.toLowerCase();
        return this.projectFeatureList.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }
    displayFnFeature(item?: Feature): string | undefined {

        return item ? item.name : undefined;
    }
    private _filter(name: string): Resource[] {
        const filterValue = name.toLowerCase();
        return this.projectResourcesList.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
    }

    displayFn(item?: Resource): string | undefined {

        return item ? item.name : undefined;
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
            name: [this.project.name, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            handle: [this.project.handle],
            projectClient: [this.project.projectClient],
            projectFeatures: [this.project.projectFeatures],
            projectResources: [this.project.projectResources],
            projectMilestones: [this.project.projectMilestones],
            projectStartDate: [this.project.projectStartDate],
            projectDevelopmentDate: [this.project.projectDevelopmentDate],
            projectCost: [this.project.projectCost, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            projectTimeline: [this.project.projectTimeline, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            projectPaymentMethod: [this.project.projectPaymentMethod, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
        });
    
    }

    compareFn(c1: Client, c2: Client): boolean {
        return c1 && c2 ? c1.id === c2.id : c1 === c2;
    }
    comparerResource(o1: Resource, o2: Resource): boolean {
        // if possible compare by object's name, and not by reference.
        return o1 && o2 ? o1.name === o2.name : o2 === o2;
    }

    getByIdProject() :any{
        const data = this.projectForm.getRawValue();
        data.handle =FuseUtils.handleize(data.name);

        this._projectWizardService.getItem()
            .then(() => {

                // Trigger the subscription with new data
                this._projectWizardService.onItemChanged.next(data);

                // Show the success message
                this._snackBar.open('Project saved', 'OK', {
                    verticalPosition: 'top',
                    duration: 2000
                });
            });


    }


    /**
     * Save project
     */
    saveProject(): void {
        const data = this.projectForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);
        console.log("Data" +data);

        this._projectWizardService.saveItem(data)
            .then(() => {

                // Trigger the subscription with new data
                this._projectWizardService.onItemChanged.next(data);

                // Show the success message
                this._snackBar.open('Project saved', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
            });
    }

    /**
     * Add project
     */
    addProject(): void {
        const data = this.projectForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        // this._projectService.addProject(data)
        //     .then(() => {

        //         // Trigger the subscription with new data
        //         this._projectService.onProjectChanged.next(data);

        //         // Show the success message
        //         this._matSnackBar.open('Project added', 'OK', {
        //             verticalPosition: 'top',
        //             duration        : 2000
        //         });

        //         // Change the location with new one
        //         this._location.go('apps/e-commerce/projects/' + this.project.id + '/' + this.project.handle);
        //     });
    }
    /**
     * New contact
     */
    newMilestone(): void {
        this.dialogRef = this._matDialog.open(MilestoneFormComponent, {
            panelClass: 'milestone-form-dialog',
            data: {
                action: 'new',

            }
        });

        this.dialogRef.afterClosed()
            .subscribe((response: FormGroup) => {
                if (!response) {
                    return;
                }
                this.projectMilestonesList = response.getRawValue();
                console.log(this.projectMilestonesList);


                this._milestoneService.updateMilestone(response.getRawValue());
            });
    }
    /**
    * New contact
    */
 
    /**
* New contact
*/
    newResource(): void {
        if (this.resourceControl.value != '' && this.resourceControl.value != null) {
            this.dialogRef = this._matDialog.open(ResourceDailogFormComponent, {
                panelClass: 'milestone-form-dialog',
                data: {
                    resource: this.resourceControl.value,
                    action: 'new',

                }
            });
            this.resourceControl.setValue('');

            this.dialogRef.afterClosed()
                .subscribe((response: FormGroup) => {
                    if (!response) {
                        return;
                    }
                    this.projectResourceList = response.getRawValue();
                    console.log(this.projectResourceList);


                    this._resourceService.updateResource(response.getRawValue());
                });
        } else {
            this._snackBar.open('Please Select Resource', 'End now', {
                duration: 1500,
                horizontalPosition: 'center',
                verticalPosition: 'top',
            });
        }
        // console.log();


    }

        /**
* New contact
*/
newFeature(): void {
    if (this.featureControl.value != '' && this.featureControl.value != null) {
    //     this.dialogRef = this._matDialog.open(ResourceDailogFormComponent, {
    //         panelClass: 'milestone-form-dialog',
    //         data: {
    //             resource: this.resourceControl.value,
    //             action: 'new',

    //         }
    //     });
        console.log('project wizard component', this.featureControl.value);

        this._featureService.updateFeature(this.featureControl.value);
        this.featureControl.setValue('');

    //     this.dialogRef.afterClosed()
    //         .subscribe((response: FormGroup) => {
    //             if (!response) {
    //                 return;
    //             }
    //             this.projectResourceList = response.getRawValue();
    //             console.log(this.projectResourceList);


    //             this._resourceService.updateResource(response.getRawValue());
    //         });
    
    } else {
        this._snackBar.open('Please Select Feature', 'End now', {
            duration: 1500,
            horizontalPosition: 'center',
            verticalPosition: 'top',
        });
    }
    console.log(this.featureControl.value);


}
}
