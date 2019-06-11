import { NgModule } from '@angular/core';
import { PaymentDailogFormComponent } from './payment-dailog-form/payment-dailog-form.component';
import { PaymentListProjectComponent } from './payment-list-project/payment-list-project.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatMenuModule, MatDialogModule, MatCheckboxModule, MatToolbarRow, MatToolbar, MatDatepicker, MatDatepickerToggle, MatToolbarModule, MatDatepickerModule, MatCardModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseConfirmDialogModule, FuseSidebarModule } from '@fuse/components';

@NgModule({
  imports: [
    CommonModule,

    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatSliderModule,
    MatSlideToggleModule,


    MatButtonModule,

    FuseSharedModule,
    FuseConfirmDialogModule,
    FuseSidebarModule,
  ],
  declarations: [PaymentDailogFormComponent, PaymentListProjectComponent]
})
export class PaymentsModule { }
