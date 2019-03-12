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
        path: 'milestones/:id',
        component: MilestoneFormComponent,
        resolve: {
            data: MilestoneService
        }

    }
];


@NgModule({
    declarations: [ ProjectListComponent, MilestoneFormComponent,MilestoneListProjectComponent,ProjectComponent],
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
        MatDialogModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatDialogModule,



        FuseSharedModule,
        FuseConfirmDialogModule,
        FuseSidebarModule
        ,



        FuseWidgetModule
    ],
    providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }
    ],
    exports: [MilestoneListProjectComponent],
    entryComponents: [
        MilestoneFormComponent
    ]
})
export class ProjectsModule { }
