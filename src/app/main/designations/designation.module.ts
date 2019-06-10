import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignationComponent } from './designation/designation.component';
import { DesignationListComponent } from './designation-list/designation-list.component';
import { Routes, RouterModule } from '@angular/router';
import { DesignationService } from './designation.service';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { FuseConfirmDialogModule, FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

const routes: Routes = [
  {
      path     : 'designations',
      component: DesignationListComponent,
      resolve  : {
          data: DesignationService
      }
  },
  {
      path     : 'designations/:id',
      component: DesignationComponent,
      resolve  : {
          data: DesignationService
      }
      
  },
  {
      path     : 'designations/:id/:handle',
      component: DesignationComponent,
      resolve  : {
          data: DesignationService
      }
     
  }
];



@NgModule({
  declarations: [DesignationComponent, DesignationListComponent],
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
export class DesignationModule { }
