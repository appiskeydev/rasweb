
import { Routes, RouterModule } from '@angular/router';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppAuthGuard } from './app.authguard';

const appRoutes: Routes = [

    {

        path: '',
        loadChildren: './main/dashboards/dashboards.module#DashboardsModule',
        // canActivate: [AuthGuard]

    },

    {

        path: '',
        loadChildren: './main/clients/clients.module#ClientsModule',
        // canActivate: [AuthGuard]

    },

    {
        path: '',
        loadChildren: './main/departments/departments.module#DepartmentsModule',
        // canActivate: [AuthGuard]

    },
    {
        path: '',
        loadChildren: './main/features/features.module#FeaturesModule',
        // canActivate: [AuthGuard]

    },
    {
        path: '',
        loadChildren: './main/fringebenefits/fringebenefits.module#FringebenefitsModule',
        // canActivate: [AuthGuard]

    },
    {
        path: '',
        loadChildren: './main/milestones/milestones.module#MilestonesModule',
        // canActivate: [AuthGuard]

    },
    {
        path: '',
        loadChildren: './main/opratingcosts/opratingcosts.module#OpratingcostsModule',
        // canActivate: [AuthGuard]

    },
    {
        path: '',
        loadChildren: './main/projects/projects.module#ProjectsModule',
        // canActivate: [AuthGuard]

    },
    {
        path: '',
        loadChildren: './main/resources/resources.module#ResourcesModule',
        // canActivate: [AuthGuard]

    },
    {
        path: '',
        loadChildren: './main/skills/skills.module#SkillsModule',
        // canActivate: [AuthGuard]

    },
    {
        path: '',
        loadChildren: './main/companies/company.module#CompaniesModule',
        // canActivate: [AuthGuard]

    },
    {
        path: '',
        loadChildren: './main/designations/designation.module#DesignationModule',
        // canActivate: [AuthGuard]

    }



];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    providers: [AppAuthGuard]
})



export class AppRoutingModule { }
