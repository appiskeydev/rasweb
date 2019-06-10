import { Injectable } from '@angular/core';
import { Payment } from './payment.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  onPaymentsChanged: BehaviorSubject<any>;
  onSelectedPaymentsChanged: BehaviorSubject<any>;
  payments: Payment[];
  paymentIndex:any;

 /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(
  ) {
    // Set the defaults
    this.onPaymentsChanged = new BehaviorSubject([]);
    this.onSelectedPaymentsChanged = new BehaviorSubject([]);
  }

  



  

    /**
     * Update payment
     *
     * @param payment
     * @returns {Promise<any>}
     */
    updatePayment(payment): Promise<any>
    {
     
        return new Promise((resolve, reject) => {
          if(payment.id != ''){
           
        this.paymentIndex = this.payments.indexOf(payment);
            this.payments.splice(this.paymentIndex, 1);
          }
          this.payments.push(payment);
          this.onPaymentsChanged.next(this.payments);

            // this._httpClient.post('api/payments-payments/' + payment.id, {...payment})
            //     .subscribe(response => {
            //         this.getPayments();
                    resolve(payment);
            //     });
        });
    }

    

    /**
     * Delete payment
     *
     * @param payment
     */
    deletePayment(payment): void
    {
        const paymentIndex = this.payments.indexOf(payment);
        this.payments.splice(paymentIndex, 1);
        this.onPaymentsChanged.next(this.payments);
    }






}
