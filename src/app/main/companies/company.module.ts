import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyService } from './company.service';
import { CompanyComponent } from './company/company.component';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { FuseConfirmDialogModule, FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

const routes: Routes = [
  {
      path     : 'companies',
      component: CompanyListComponent,
      resolve  : {
          data: CompanyService
      }
  },
  {
      path     : 'companies/:id',
      component: CompanyComponent,
      resolve  : {
          data: CompanyService
      }
      
  },
  {
      path     : 'companies/:id/:handle',
      component: CompanyComponent,
      resolve  : {
          data: CompanyService
      }
     
  }
];


@NgModule({
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
    

  ],
  declarations: [CompanyComponent, CompanyListComponent]
})
export class CompaniesModule { }
