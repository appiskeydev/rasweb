import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatDialogRef, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { Subject, fromEvent, BehaviorSubject, merge, Observable } from 'rxjs';
import { ProjectService } from '../project.service';
import { takeUntil, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { FuseUtils } from '@fuse/utils';
import { Project } from '../project.model';
import { FormGroup } from '@angular/forms';
import { ProjectCreateDailogComponent } from '../project-create-dailog/project-create-dailog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class ProjectListComponent implements OnInit {

    dataSource: FilesDataSource | null;
    confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  
    displayedColumns = ['name','projectClient', 'active'];
  
    @ViewChild(MatPaginator)
    paginator: MatPaginator;
  
    @ViewChild(MatSort)
    sort: MatSort;
  
    @ViewChild('filter')
    filter: ElementRef;
  
    dialogRef: any;
  
  
    // Private
    private _unsubscribeAll: Subject<any>;
   /**
     * Constructor
     *
     * @param {ProjectService} _projectService
     * @param {MatDialog} _matDialog
     * @param {MatSnackBar} _matSnackBar
     * @param {Router} _router
     */
    constructor(
        private _projectService: ProjectService,
        public _matDialog: MatDialog,
        private _matSnackBar: MatSnackBar,
        private _router: Router
  
  
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }
  
    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------
  
    /**
     * On init
     */
    ngOnInit(): void {
        this.dataSource = new FilesDataSource(this._projectService, this.paginator, this.sort);
  
        fromEvent(this.filter.nativeElement, 'keyup')
            .pipe(
                takeUntil(this._unsubscribeAll),
                debounceTime(150),
                distinctUntilChanged()
            )
            .subscribe(() => {
                if (!this.dataSource) {
                    return;
                }
  
                this.dataSource.filter = this.filter.nativeElement.value;
            });
    }
  
    /**
       * New contact
       */
      newProjectDailog(): void {
          this.dialogRef = this._matDialog.open(ProjectCreateDailogComponent, {
              panelClass: 'milestone-form-dialog',
              data: {
                  action: 'new',
              }
          });
  
          this.dialogRef.afterClosed()
              .subscribe((response: FormGroup) => {
                  if (!response) {
                      return;
                  }
  
  
  
                  this._projectService.addItem(response.getRawValue())
                  .then((responseData) => {
            
            
                    // Show the success message
                    this._matSnackBar.open('Record added', 'OK', {
                      verticalPosition: 'top',
                      duration: 2000
                    });
                   let data = new Project(responseData);
                    // Change the location with new one
                  //   this._router.navigate(['/projects']);
                  var myurl = '/projects-wizard/'+data.id+'/'+data.handle;
                  this._router.navigateByUrl(myurl).then(e => {
                    if (e) {
                      console.log("Navigation is successful!");
                    } else {
                      console.log("Navigation has failed!");
                    }
                  });
                  });
  
  
  
                
  
                  // [routerLink]="'/projects/'+project.id+'/'+project.handle"
                  // this.projectMilestonesList = response.getRawValue();
                  // console.log(this.projectMilestonesList);
  
  
                  // this._milestoneService.updateMilestone(response.getRawValue());
              });
      }
  
    /**
   * Delete Contact
   */
    deleteProject(project): void {
        console.log(project);
        this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
            disableClose: false
        });
  
        this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';
  
        this.confirmDialogRef.afterClosed().subscribe(result => {
            if (result) {
  
                this._projectService.deleteItemById(project.id).subscribe((response: any)  => {
                    // Show the success message
                    this._matSnackBar.open('Record Deleted', 'OK', {
                        verticalPosition: 'top',
                        duration: 3000
                    });
                    this._projectService.getItems();
                });
            }
            this.confirmDialogRef = null;
        });
  
    }
  
  }
  
  export class FilesDataSource extends DataSource<any>
  {
    private _filterChange = new BehaviorSubject('');
    private _filteredDataChange = new BehaviorSubject('');
  
    /**
     * Constructor
     *
     * @param {ProjectService} _projectService
     * @param {MatPaginator} _matPaginator
     * @param {MatSort} _matSort
     */
    constructor(
        private _projectService: ProjectService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();
  
        this.filteredData = this._projectService.items;
    }
  
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._projectService.onItemsChanged,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];
  
        return merge(...displayDataChanges)
            .pipe(
                map(() => {
                    let data = this._projectService.items.slice();
  
                    data = this.filterData(data);
  
                    this.filteredData = [...data];
  
                    data = this.sortData(data);
  
                    // Grab the page's slice of data.
                    const startIndex = this._matPaginator.pageIndex * this._matPaginator.pageSize;
                    return data.splice(startIndex, this._matPaginator.pageSize);
                }
                ));
    }
  
    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------
  
    // Filtered data
    get filteredData(): any {
        return this._filteredDataChange.value;
    }
  
    set filteredData(value: any) {
        this._filteredDataChange.next(value);
    }
  
    // Filter
    get filter(): string {
        return this._filterChange.value;
    }
  
    set filter(filter: string) {
        this._filterChange.next(filter);
    }
  
    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------
  
    /**
     * Filter data
     *
     * @param data
     * @returns {any}
     */
    filterData(data): any {
        if (!this.filter) {
            return data;
        }
        return FuseUtils.filterArrayByString(data, this.filter);
    }
  
    /**
     * Sort data
     *
     * @param data
     * @returns {any[]}
     */
    sortData(data): any[] {
        if (!this._matSort.active || this._matSort.direction === '') {
            return data;
        }
  
        return data.sort((a, b) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';
  
            switch (this._matSort.active) {
                case 'name':
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
  
                    case 'projectClient':
                    [propertyA, propertyB] = [a.projectClient, b.projectClient];
                    break;
            }
  
            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;
  
            return (valueA < valueB ? -1 : 1) * (this._matSort.direction === 'asc' ? 1 : -1);
        });
    }
  
    /**
     * Disconnect
     */
    disconnect(): void {
    }

}
