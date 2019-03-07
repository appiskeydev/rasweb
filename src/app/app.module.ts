import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatRadioModule, MatDatepickerModule,MatDialogModule } from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { HttpModule } from '@angular/http';

import { CompanyListComponent } from './main/companies/company-list/company-list.component';
import { CompanyComponent } from './main/companies/company/company.component';


const appRoutes: Routes = [
    
    {
        path        : '',
        loadChildren: './main/clients/clients.module#ClientsModule',
        // canActivate: [AuthGuard]

    },
    {
        path        : '',
        loadChildren: './main/departments/departments.module#DepartmentsModule',
        // canActivate: [AuthGuard]

    },
    {
        path        : '',
        loadChildren: './main/features/features.module#FeaturesModule',
        // canActivate: [AuthGuard]

    },
    {
        path        : '',
        loadChildren: './main/fringebenefits/fringebenefits.module#FringebenefitsModule',
        // canActivate: [AuthGuard]

    },
    {
        path        : '',
        loadChildren: './main/milestones/milestones.module#MilestonesModule',
        // canActivate: [AuthGuard]

    },
    {
        path        : '',
        loadChildren: './main/opratingcosts/opratingcosts.module#OpratingcostsModule',
        // canActivate: [AuthGuard]

    },
    {
        path        : '',
        loadChildren: './main/projects/projects.module#ProjectsModule',
        // canActivate: [AuthGuard]

    },
    {
        path        : '',
        loadChildren: './main/resources/resources.module#ResourcesModule',
        // canActivate: [AuthGuard]

    },
    {
        path        : '',
        loadChildren: './main/skills/skills.module#SkillsModule',
        // canActivate: [AuthGuard]

    },
    {
        path        : '',
        loadChildren: '.src/app/main/companies/company.module#CompaniesModule',
        // canActivate: [AuthGuard]

    },
    {
        path        : '',
        loadChildren: '.src/app/main/designations/designation.module#DesignationsModule',
        // canActivate: [AuthGuard]

    }
];

@NgModule({
    declarations: [
        AppComponent,
        CompanyListComponent,
        CompanyComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
       

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatRadioModule,
        MatDatepickerModule,
        MatDialogModule,
        

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        
        // App modules


        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
