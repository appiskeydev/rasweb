import { Component, OnInit, ViewChild } from '@angular/core';
import { Resource } from '../resource.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ResourceService } from '../resource.service';
import { MatSnackBar, MatInput } from '@angular/material';
import { Router } from '@angular/router';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { fuseAnimations } from '@fuse/animations';
import { Department } from 'app/main/departments/department.model';
import { Skill } from 'app/main/skills/skill.model';
import { Designation } from 'app/main/designations/designation.model';
import { DesignationService } from 'app/main/designations/designation.service';

@Component({
  providers:[DesignationService],
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
  animations: fuseAnimations
})
export class ResourceComponent implements OnInit {
  @ViewChild('resourcename')
  nameInput: MatInput;
  resourceDepartments:Department[];
  resourceReporters:Resource[];
  resourceSkillsList:Skill[];
  resourceDesignations : Designation[];
  resource: Resource;
  pageType: string;
  resourceForm: FormGroup;
  employeeTypes: string[] = ['Intern', 'Permanent', 'Part Time', 'Full Time','Contract Based'];
  
  // myControl = new FormControl();
  package_id: string;

  minDate = new Date(1910, 0, 1);
  maxDate = new Date(2020, 0, 1);

  // Private
  private _unsubscribeAll: Subject<any>;
  // toppings = new FormControl();

  //toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  /**
   * Constructor
   *
   * @param {ResourceService} _resourceService
   * @param {DesignationService} _designationService
   * @param {FormBuilder} _formBuilder
   * @param {MatSnackBar} _matSnackBar,
   *
   */
  constructor(
    private _resourceService: ResourceService,
    private _designationService : DesignationService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
  
    private _router: Router
  ) {
    // Set the default
    this.resource = new Resource();
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
    this._resourceService.onItemChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(resource => {

        if (resource) {
          this.resource = new Resource(resource);
          this.pageType = 'edit';
        }
        else {
          this.pageType = 'new';
          this.resource = new Resource();
        }
        this.resourceForm = this.createResourceForm();



      });

      this._resourceService.getAll().subscribe(resourceDepartment => {
        this.resourceDepartments =  resourceDepartment.map((department) => new Department(department));
    // console.log(this.resourceDepartments);

    });

    this._resourceService.getReportingesource().subscribe(resourceReporter => {
      this.resourceReporters =  resourceReporter.map((resource) => new Resource(resource));
  // console.log(this.resourceReporters);

  });

  this._resourceService.getResourceSkills().subscribe(resourceSkills => {
    this.resourceSkillsList =  resourceSkills.map((skill) => new Skill(skill));
// console.log(this.resourceSkills);

});

this._resourceService.getResourceDesignations().subscribe(resourceDesignation => {
  this.resourceDesignations =  resourceDesignation.map((designation) => new Designation(designation));
// console.log(this.resourceSkills);

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
   * Create resource form
   *
   * @returns {FormGroup}
   */
  createResourceForm(): FormGroup {
    
      return this._formBuilder.group({
        id: [this.resource.id],
        handle: [this.resource.handle],
        name : [this.resource.name,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        resourceCNIC : [this.resource.resourceCNIC,[Validators.maxLength(12)]],
        resourceDOB : [this.resource.resourceDOB,[ Validators.minLength(2), Validators.maxLength(50)]],
        resourceEmail : [this.resource.resourceEmail,[Validators.required,Validators.email, Validators.minLength(2), Validators.maxLength(50)]],
        resourceAddress : [this.resource.resourceAddress],
        resourcePhone : [this.resource.resourcePhone,[Validators.required,Validators.minLength(5), Validators.maxLength(11)]],
        resourceReligion :[this.resource.resourceReligion,[Validators.minLength(2), Validators.maxLength(50)]],
        resourceBloodGroup :[this.resource.resourceBloodGroup,[ Validators.minLength(2), Validators.maxLength(5)]], 
        resourceNationality :[this.resource.resourceNationality,[ Validators.minLength(2), Validators.maxLength(50)]],
        resourceEmergencyContactNo : [this.resource.resourceEmergencyContactNo,[ Validators.minLength(5), Validators.maxLength(50)]],
        resourceMaritalStatus : [this.resource.resourceMaritalStatus,[ Validators.minLength(2), Validators.maxLength(50)]] ,
        resourceDesignation : [this.resource.resourceDesignation], 
        resourceReportingTo : [ this.resource.resourceReportingTo],
        resourceResume : [this.resource.resourceResume,[ Validators.minLength(2), Validators.maxLength(100)]],
        resourceDateOfJoining :[this.resource.resourceDateOfJoining],
        resourceWorkingDays : [this.resource.resourceWorkingDays],
        resourceExperience :  [this.resource.resourceExperience],
        resourceSalaryPerMonth :[this.resource.resourceSalaryPerMonth],
        resourcePerHourRate : [this.resource.resourcePerHourRate],
        resourceShift: [this.resource.resourceShift],
        resourceBenefits : [this.resource.resourceBenefits,[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        resourceContractType : [this.resource.resourceContractType],
        resourcePartTime : [ this.resource.resourcePartTime],
        resourceDepartment : [ this.resource.resourceDepartment],
        resourceSkills: [ this.resource.resourceSkills]

      
      });
   
  }

  /**
   * Save resource
   */
  saveResource(): void {
    const data = this.resourceForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    this._resourceService.saveItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._resourceService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this._router.navigate(['/resources']);
      });
  }

  /**
   * Add resource
   */
  addResource(): void {
    const data = this.resourceForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);
 data.res
    if(data.resourceReportingTo == ""){
      data.resourceReportingTo=null;
    }
    console.log(data);

    this._resourceService.addItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._resourceService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });

        // Change the location with new one
   //     this._resourceService.getItems();
       // console.log( this._resourceService.getItems())
        this._router.navigate(['/resources']);
      });
  }

  compareFn(c1: Resource, c2: Resource): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
   }

   comparerSkill(o1: Skill, o2: Skill): boolean {
    // if possible compare by object's name, and not by reference.
    return o1 && o2 ? o1.name === o2.name : o2 === o2;
  }
}