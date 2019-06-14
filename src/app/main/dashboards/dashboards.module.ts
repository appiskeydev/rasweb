import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardService } from './dashboard.service';
import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatTableModule, MatTabsModule, MatDatepickerModule, MatProgressBarModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseSidebarModule, FuseWidgetModule } from '@fuse/components';
import { KeycloakService } from 'keycloak-angular';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      data: DashboardService
    }
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    MatDatepickerModule,
    MatIconModule,
    MatProgressBarModule,

    MatMomentDateModule,
    NgxChartsModule,

    FuseSharedModule,
    FuseSidebarModule,
    FuseWidgetModule
  ],
  providers: [
    DashboardService
  
  ]
})
export class DashboardsModule { }
