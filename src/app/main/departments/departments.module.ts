import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentListComponent } from './department-list/department-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatMenuModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { FuseConfirmDialogModule, FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { DepartmentService } from './department.service';
import { DepartmentComponent } from './department/department.component';

const routes: Routes = [
  {
      path     : 'departments',
      component: DepartmentListComponent,
      resolve  : {
          data: DepartmentService
      }
  },
  {
      path     : 'departments/:id',
      component: DepartmentComponent,
      resolve  : {
          data: DepartmentService
      }
      
  },
  {
      path     : 'departments/:id/:handle',
      component: DepartmentComponent,
      resolve  : {
          data: DepartmentService
      }
     
  }
];


@NgModule({
  declarations: [DepartmentListComponent, DepartmentComponent],
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
export class DepartmentsModule { }
