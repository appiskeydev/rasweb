import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Resource } from '../resource.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { fuseAnimations } from '@fuse/animations';
import { ResourceProject } from '../resource-project.model';

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
    //this.action = 'edit';
    // console.log(this.action);
    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Resource';
      this.resource = _data.resource;
    }
    else {
      this.dialogTitle = 'New Resource';
      this.resource = new Resource({});
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
      id: [this.resource.id],
      handle: [this.resource.handle],
      name: [this.resource.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      resourceProjectHour: [this.resource.resourceProjectHour],
      resourceProjectAllocation: [this.resource.resourceProjectAllocation],
      resourceProjectWorkStartDate: [this.resource.resourceProjectWorkStartDate],
      resourceProjectWorkEndDate: [this.resource.resourceProjectWorkEndDate],
      project: [this.resource.project]
      
    });
  }


}
