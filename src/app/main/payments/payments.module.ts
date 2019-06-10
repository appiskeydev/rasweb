import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentDailogFormComponent } from './payment-dailog-form/payment-dailog-form.component';
import { PaymentListProjectComponent } from './payment-list-project/payment-list-project.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaymentDailogFormComponent, PaymentListProjectComponent]
})
export class PaymentsModule { }
