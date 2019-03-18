import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpratingcostComponent } from './opratingcost/opratingcost.component';
import { OpratingcostListComponent } from './opratingcost-list/opratingcost-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatMenuModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { FuseConfirmDialogModule, FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { OpratingcostService } from './opratingcost.service';

const routes: Routes = [
  {
      path     : 'opratingcosts',
      component: OpratingcostListComponent,
      resolve  : {
          data: OpratingcostService
      }
  },
  {
      path     : 'opratingcosts/:id',
      component: OpratingcostComponent,
      resolve  : {
          data: OpratingcostService
      }
      
  },
  {
      path     : 'opratingcosts/:id/:handle',
      component: OpratingcostComponent,
      resolve  : {
          data: OpratingcostService
      }
     
  }
];


@NgModule({
  declarations: [OpratingcostComponent, OpratingcostListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
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


    FuseConfirmDialogModule,
    FuseSharedModule,
    FuseWidgetModule
  ]
})
export class OpratingcostsModule { }
