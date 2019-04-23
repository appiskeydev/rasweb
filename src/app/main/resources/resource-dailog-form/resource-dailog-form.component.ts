import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Resource } from '../resource.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
import { ResourceProject } from '../resource-project.model';
import { Project } from 'app/main/projects/project.model';
import { Projectid } from 'app/main/projects/projectid.model';

@Component({
  selector: 'app-resource-dailog-form',
  templateUrl: './resource-dailog-form.component.html',
  styleUrls: ['./resource-dailog-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ResourceDailogFormComponent {

  action: string;
  resource: Resource;
  resourceProject : ResourceProject;
  resourceForm: FormGroup;
  dialogTitle: string;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  project: Project;
  


  /**
   * Constructor
   *
   * @param {MatDialogRef<ResourceDailogFormComponent>} matDialogRef
   * @param _data 
   * @param {FormBuilder} _formBuilder
   */
  constructor(
    public matDialogRef: MatDialogRef<ResourceDailogFormComponent>,
    @Inject(MAT_DIALOG_DATA)
    private _data: any,
    private _formBuilder: FormBuilder
  ) {
    // Set the defaults
    this.action = _data.action;

    // console.log(this.action);
    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Resource';
     this.resource = new Resource(_data.resource);
     this.project = new Project(_data.project);
      // this.project.id = _data.project.id;
      this.resourceProject = new ResourceProject(this.resource, this.project);

      // this.project = _data.project;
      console.log('Project :' +this.resourceProject);
      

    }
    else {
      this.dialogTitle = 'New Resource';
      this.resource = new Resource(_data.resource);
      this.project = _data.project;
      this.resourceProject = new ResourceProject(this.resource, _data.project);

    }

    this.resourceForm = this.createContactForm();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Create resource form
   *
   * @returns {FormGroup}
   */
  createContactForm(): FormGroup {

    return this._formBuilder.group({
     
       name: [this.resource.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      resourceProjectHour: [this.resourceProject.resourceProjectHour],
      resourceProjectAllocation: [this.resourceProject.resourceProjectAllocation],
      resourceProjectWorkStartDate: [this.resourceProject.resourceProjectWorkStartDate],
      resourceProjectWorkEndDate: [this.resourceProject.resourceProjectWorkEndDate],
      resource : [this.resource],
      project: [new Projectid(this.project)]
      
    });
  }


}
