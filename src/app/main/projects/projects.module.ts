import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ProjectService } from './project.service';
import { MatButtonModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatRippleModule, MatSelectModule, MatSortModule, MatSnackBarModule, MatTabsModule, MatTableModule, MatAutocompleteModule, MatMenuModule, MatDialogModule, MatDatepickerModule, MatCheckboxModule, MatToolbarModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FuseConfirmDialogModule, FuseWidgetModule, FuseSidebarModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { MilestoneFormComponent } from '../milestones/milestone-form/milestone-form.component';
import { MilestoneService } from '../milestones/milestone.service';
import { MilestoneListProjectComponent } from '../milestones/milestone-list-project/milestone-list-project.component';
import { ProjectCreateDailogComponent } from './project-create-dailog/project-create-dailog.component';
import { ResourceDailogFormComponent } from '../resources/resource-dailog-form/resource-dailog-form.component';
import { ResourceListProjectComponent } from '../resources/resource-list-project/resource-list-project.component';
import { FeatureListProjectComponent } from '../features/feature-list-project/feature-list-project.component';
import { ProjectWizardComponent } from './project-wizard/project-wizard.component';
import { MilestoneDialogFormComponent } from '../milestones/milestone-dialog-form/milestone-dialog-form.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const routes: Routes = [
    {
        path: 'projects',
        component: ProjectListComponent,
        resolve: {
            data: ProjectService
        }
    },
    {
        path: 'projects/:id',
        component: ProjectComponent,
        resolve: {
            data: ProjectService
        }

    },
    {
        path: 'projects/:id/:handle',
        component: ProjectComponent,
        resolve: {
            data: ProjectService
        }

    },
    {
        path: 'projects-wizard/:id',
        component: ProjectWizardComponent,
        resolve: {
            data: ProjectService
        }

    },
    {
        path: 'projects-wizard/:id/:handle',
        component: ProjectWizardComponent,
        resolve: {
            data: ProjectService
        }

    },
    {
        path: 'milestones/:id',
        component: MilestoneFormComponent,
        resolve: {
            data: MilestoneService
        }

    },
    {
        path: 'project-detail',
        component: ProjectDetailComponent,
        resolve: {
            data: ProjectService
        }
    },
     {
         path: 'project-detail/:id',
         component: ProjectDetailComponent,
         resolve :{
             data: ProjectService
         }
     }
];



@NgModule({
    declarations: [ ProjectListComponent, MilestoneFormComponent,MilestoneListProjectComponent,ProjectComponent, ProjectWizardComponent, ResourceDailogFormComponent, ResourceListProjectComponent, FeatureListProjectComponent, ProjectCreateDailogComponent, MilestoneDialogFormComponent,ProjectDetailComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
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
        MatDialogModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatDialogModule,


        MatButtonModule,

        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule,



        FuseWidgetModule
    ],
    providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
    ],
    exports: [MilestoneListProjectComponent,ResourceListProjectComponent, FeatureListProjectComponent, ProjectDetailComponent],
    entryComponents: [
        MilestoneFormComponent,ResourceDailogFormComponent,ProjectCreateDailogComponent
    ]
})
export class ProjectsModule { }
