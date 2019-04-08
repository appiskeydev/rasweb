import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FuseUtils } from '@fuse/utils';
import { map, takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { merge, Observable, BehaviorSubject, Subject, fromEvent } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { ProjectService } from '../project.service';
import { MatPaginator, MatSort, MatDialogRef, MatDialog, MatSnackBar } from '@angular/material';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { Project } from '../project.model';
import { id } from '@swimlane/ngx-charts/release/utils';

@Component({
  selector: 'project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  animations: fuseAnimations
})
export class ProjectDetailComponent implements OnInit {
  project:Project;
  dataSource: FilesDataSource | null;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  // displayedColumns = ['name', 'projectClient'];

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
    this.project = this._projectService.item;

    console.log(this.project);

    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {

    this.dataSource = new FilesDataSource(this._projectService, this.paginator, this.sort);


    // this._projectService.getItemById(this._projectService.item.id).subscribe(projectFeature => {
    //   this.project = projectFeature.map((feature) => new Project(feature));
    //   // console.log(this.resourceDepartments);

    // });

    // this._projectService.getItemById(this._projectService.item.id).subscribe((response: any) => {
    
    // });


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

