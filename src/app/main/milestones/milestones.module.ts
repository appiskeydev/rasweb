import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilestoneListComponent } from './milestone-list/milestone-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatMenuModule, MatDialogModule, MatCheckboxModule, MatDatepickerModule } from '@angular/material';
import { FuseConfirmDialogModule, FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { MilestoneService } from './milestone.service';
import { MilestoneComponent } from './milestone/milestone.component';

const routes: Routes = [
  {
      path     : 'milestones',
      component: MilestoneListComponent,
      resolve  : {
          data: MilestoneService
      }
  },
  {
      path     : 'milestones/:id',
      component: MilestoneComponent,
      resolve  : {
          data: MilestoneService
      }
      
  },
  {
      path     : 'milestones/:id/:handle',
      component: MilestoneComponent,
      resolve  : {
          data: MilestoneService
      }
     
  }
];


@NgModule({
  declarations: [MilestoneListComponent, MilestoneComponent],
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
    MatDatepickerModule,


    FuseConfirmDialogModule,
    FuseSharedModule,
    FuseWidgetModule
  ]
})
export class MilestonesModule { }
