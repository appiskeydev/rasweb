import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { Subject, Observable } from 'rxjs';
import { PaymentService } from '../payment.service';
import { takeUntil } from 'rxjs/operators';
import { PaymentDailogFormComponent } from '../payment-dailog-form/payment-dailog-form.component';
import { FormGroup } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-payment-list-project',
  templateUrl: './payment-list-project.component.html',
  styleUrls: ['./payment-list-project.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class PaymentListProjectComponent implements OnInit {


  @ViewChild('dialogContent')
  dialogContent: TemplateRef<any>;

  payments: any;
  user: any;
  dataSource: FilesDataSource | null;
  displayedColumns = [ 'amount', 'date', 'buttons'];
  selectedPayments: any[];
  checkboxes: {};
  dialogRef: any;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {PaymentService} _paymentsService
   * @param {MatDialog} _matDialog
   */
  constructor(
      private _paymentsService: PaymentService,
      public _matDialog: MatDialog
  )
  {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      this.dataSource = new FilesDataSource(this._paymentsService);

      this._paymentsService.onPaymentsChanged
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe(payments => {
              this.payments = payments;

              this.checkboxes = {};
              payments.map(payment => {
                  this.checkboxes[payment.id] = false;
              });
          });

    
     
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Edit payment
   *
   * @param payment
   */
  editPayment(payment): void
  {
      this.dialogRef = this._matDialog.open(PaymentDailogFormComponent, {
          panelClass: 'milestone-form-dialog',
          data      : {
              payment: payment,
              action : 'edit'
          }
      });

      this.dialogRef.afterClosed()
          .subscribe(response => {
              if ( !response )
              {
                  return;
              }
              const actionType: string = response[0];
              const formData: FormGroup = response[1];
              switch ( actionType )
              {
                  /**
                   * Save
                   */
                  case 'save':

                      this._paymentsService.updatePayment(formData.getRawValue());
                      break;
                  /**
                   * Delete
                   */
                  case 'delete':

                      this.deletePayment(payment);

                      break;
              }
          });
  }

  /**
   * Delete Payment
   */
  deletePayment(payment): void
  {
      this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
          disableClose: false
      });

      this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

      this.confirmDialogRef.afterClosed().subscribe(result => {
          if ( result )
          {
              this._paymentsService.deletePayment(payment);
          }
          this.confirmDialogRef = null;
      });

  }

 

}

export class FilesDataSource extends DataSource<any>
{
  /**
   * Constructor
   *
   * @param {PaymentService} _paymentsService
   */
  constructor(
      private _paymentsService: PaymentService
  )
  {
      super();
  }

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   * @returns {Observable<any[]>}
   */
  connect(): Observable<any[]>
  {
      return  this._paymentsService.onPaymentsChanged;
  }

  /**
   * Disconnect
   */
  disconnect(): void
  {
  }
}
