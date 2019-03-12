import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatMenuModule, MatDialogModule, MatCheckboxModule, MatRadioModule, MatDatepickerModule } from '@angular/material';
import { FuseConfirmDialogModule, FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { ResourceService } from './resource.service';
import { ResourceComponent } from './resource/resource.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { DesignationListComponent } from '../designations/designation-list/designation-list.component';

const routes: Routes = [
  {
      path     : 'resources',
      component: ResourceListComponent,
      resolve  : {
          data: ResourceService
      }
  },
  {
      path     : 'resources/:id',
      component: ResourceComponent,
      resolve  : {
          data: ResourceService
      }
      
  },
  {
      path     : 'resources/:id/:handle',
      component: ResourceComponent,
      resolve  : {
          data: ResourceService
      }
     
  }
];


@NgModule({
  declarations: [ResourceComponent, ResourceListComponent],
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
    MatRadioModule,
    MatDatepickerModule,

    FuseConfirmDialogModule,
    FuseSharedModule,
    FuseWidgetModule
  ]
})
export class ResourcesModule { }
