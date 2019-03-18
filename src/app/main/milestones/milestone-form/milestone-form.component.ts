import { Component, OnInit, Inject, Injectable, NgModule, Input, ViewChild } from '@angular/core';
import { Milestone } from '../milestone.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef, MatDialog, MatDialogModule, MatInput } from '@angular/material';
import { MilestoneService } from '../milestone.service';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-milestone-form',
  templateUrl: './milestone-form.component.html',
  styleUrls: ['./milestone-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
 
})

export class MilestoneFormComponent{
 @ViewChild('milestonename')
 nameInput: MatInput;
  action: string;
    milestone: Milestone;
    milestoneForm: FormGroup;
    dialogTitle: string;
    minDate = new Date(2000, 0, 1);
    maxDate = new Date(2020, 0, 1);
    

    /**
     * Constructor
     *
     * @param {MatDialogRef<MilestoneFormComponent>} matDialogRef
     * @param _data 
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        public matDialogRef: MatDialogRef<MilestoneFormComponent>,
        @Inject(MAT_DIALOG_DATA) 
        private _data: any,
        private _formBuilder: FormBuilder
    )
    {
        // Set the defaults
        this.action = _data.action;

        console.log(this.action);
        if ( this.action === 'edit' )
        {
            this.dialogTitle = 'Edit Milestone';
            this.milestone = _data.milestone;
        }
        else
        {
            this.dialogTitle = 'New Milestone';
            this.milestone = new Milestone({});
        }


       
        this.milestoneForm = this.createContactForm();
   
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create milestone form
     *
     * @returns {FormGroup}
     */
    createContactForm(): FormGroup
    {
   
        return this._formBuilder.group({
          id: [this.milestone.id],
          name: [this.milestone.name ,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
          handle: [this.milestone.handle],
          milestoneStartDate: [this.milestone.milestoneStartDate],
          milestoneDelieveryDate: [this.milestone.milestoneDelieveryDate],
          milestoneExpectedPayment: [this.milestone.milestoneExpectedPayment,[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
          milestoneCost: [this.milestone.milestoneCost,[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
          milestoneNoOfDays: [this.milestone.milestoneNoOfDays,[Validators.minLength(1), Validators.maxLength(50)]]
        });
    }

}
