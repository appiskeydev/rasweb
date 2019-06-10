import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillListComponent } from './skill-list/skill-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatMenuModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { FuseConfirmDialogModule, FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { SkillService } from './skill.service';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {
      path     : 'skills',
      component: SkillListComponent,
      resolve  : {
          data: SkillService
      }
  },
  {
      path     : 'skills/:id',
      component: SkillComponent,
      resolve  : {
          data: SkillService
      }
      
  },
  {
      path     : 'skills/:id/:handle',
      component: SkillComponent,
      resolve  : {
          data: SkillService
      }
     
  }
];


@NgModule({
  declarations: [SkillListComponent, SkillComponent],
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
})export class SkillsModule { }
