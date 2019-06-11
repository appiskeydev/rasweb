import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Payment } from '../payment.model';

import { MAT_DIALOG_DATA,MatDialogRef, MatDialog, MatDialogModule } from '@angular/material';
@Component({
  selector: 'app-payment-dailog-form',
  templateUrl: './payment-dailog-form.component.html',
  styleUrls: ['./payment-dailog-form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PaymentDailogFormComponent  {
  
  action: string;
  payment: Payment;
  paymentForm: FormGroup;
  dialogTitle: string;
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  

  /**
   * Constructor
   *
   * @param {MatDialogRef<PaymentDailogFormComponent>} matDialogRef
   * @param _data 
   * @param {FormBuilder} _formBuilder
   */
  constructor(
      public matDialogRef: MatDialogRef<PaymentDailogFormComponent>,
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
          this.dialogTitle = 'Edit Payment';
          this.payment = _data.payment;
      }
      else
      {
          this.dialogTitle = 'New Payment';
          this.payment = new Payment({});
      }

      this.paymentForm = this.createContactForm();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Create payment form
   *
   * @returns {FormGroup}
   */
  createContactForm(): FormGroup
  {
      return this._formBuilder.group({
        id: [this.payment.id],
        handle: [this.payment.handle],
        paymentDate: [this.payment.paymentDate],
        paymentAmount: [this.payment.paymentAmount]
      });
  }
}
