import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FringebenefitListComponent } from './fringebenefit-list/fringebenefit-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatMenuModule, MatDialogModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { FuseConfirmDialogModule, FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { FringebenefitService } from './fringebenefit.service';
import { FringebenefitComponent } from './fringebenefit/fringebenefit.component';

const routes: Routes = [
  {
      path     : 'fringebenefits',
      component: FringebenefitListComponent,
      resolve  : {
          data: FringebenefitService
      }
  },
  {
      path     : 'fringebenefits/:id',
      component: FringebenefitComponent,
      resolve  : {
          data: FringebenefitService
      }
      
  },
  {
      path     : 'fringebenefits/:id/:handle',
      component: FringebenefitComponent,
      resolve  : {
          data: FringebenefitService
      }
     
  }
];


@NgModule({
  declarations: [FringebenefitListComponent, FringebenefitComponent],
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


    FuseConfirmDialogModule,
    FuseSharedModule,
    FuseWidgetModule
  ]
})
export class FringebenefitsModule { }
