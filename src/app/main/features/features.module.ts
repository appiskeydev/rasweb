import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureListComponent } from './feature-list/feature-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatMenuModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { FuseConfirmDialogModule, FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { FeatureService } from './feature.service';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  {
      path     : 'features',
      component: FeatureListComponent,
      resolve  : {
          data: FeatureService
      }
  },
  {
      path     : 'features/:id',
      component: FeatureComponent,
      resolve  : {
          data: FeatureService
      }
      
  },
  {
      path     : 'features/:id/:handle',
      component: FeatureComponent,
      resolve  : {
          data: FeatureService
      }
     
  }
];


@NgModule({
  declarations: [FeatureListComponent, FeatureComponent],
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
export class FeaturesModule { }
