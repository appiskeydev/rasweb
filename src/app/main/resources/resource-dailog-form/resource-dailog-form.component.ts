import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Resource } from '../resource.model';

@Component({
  selector: 'app-resource-dailog-form',
  templateUrl: './resource-dailog-form.component.html',
  styleUrls: ['./resource-dailog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResourceDailogFormComponent {

  action: string;
  resource: Resource;
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

    console.log(this.action);
    if (this.action === 'edit') {
      this.dialogTitle = 'Edit Resource';
      this.resource = _data.resource;
    }
    else {
      this.dialogTitle = 'New Resource';
      this.resource = new Resource(_data.resource);
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
      name: [{
        value: this.resource.name,
        disabled: true
      }, Validators.required],
      resourceProjectHour: [this.resource.resourceProjectHour],
      resourceProjectAllocation: [this.resource.resourceProjectAllocation],
      resourceProjectWorkStartDate: [this.resource.resourceProjectWorkStartDate],
      resourceProjectWorkEndDate: [this.resource.resourceProjectWorkEndDate]
    });
  }

}
