import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTableModule, MatTabsModule, MatAutocompleteModule, MatMenuModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { FuseConfirmDialogModule, FuseWidgetModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { ClientService } from './client.service';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
      path     : 'clients',
      component: ClientListComponent,
      resolve  : {
          data: ClientService
      }
  },
  {
      path     : 'clients/:id',
      component: ClientComponent,
      resolve  : {
          data: ClientService
      }
      
  },
  {
      path     : 'clients/:id/:handle',
      component: ClientComponent,
      resolve  : {
          data: ClientService
      }
     
  }
];


@NgModule({
  declarations: [ClientListComponent, ClientComponent],
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
export class ClientsModule { }
