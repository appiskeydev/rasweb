import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Client } from '../client.model';
import { ClientService } from '../client.service';
import { MatDialog, MatSnackBar, MatPaginator, MatSort, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Subject, merge, Observable, BehaviorSubject } from 'rxjs';
import { FuseUtils } from '@fuse/utils';
import { map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
  animations: fuseAnimations

})
export class ClientDetailComponent implements OnInit {
  client: Client;

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
  * @param {ClientService} _clientService
  * @param {MatDialog} _matDialog
  * @param {MatSnackBar} _matSnackBar
  * @param {Router} _router
  */
  constructor(
    private _clientService: ClientService,
    public _matDialog: MatDialog,
    private _matSnackBar: MatSnackBar,
    private _router: Router


  ) {
    // Set the private defaults
    this.client = this._clientService.item;

    console.log(this.client);

    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {

    this.dataSource = new FilesDataSource(this._clientService, this.paginator, this.sort);

  }

}


export class FilesDataSource extends DataSource<any>
{
  private _filterChange = new BehaviorSubject('');
  private _filteredDataChange = new BehaviorSubject('');

  /**
   * Constructor
   *
   * @param {ClientService} _clientService
   * @param {MatPaginator} _matPaginator
   * @param {MatSort} _matSort
   */
  constructor(
    private _clientService: ClientService,
    private _matPaginator: MatPaginator,
    private _matSort: MatSort
  ) {
    super();

    this.filteredData = this._clientService.items;
  }

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   *
   * @returns {Observable<any[]>}
   */
  connect(): Observable<any[]> {
    const displayDataChanges = [
      this._clientService.onItemsChanged,
      this._matPaginator.page,
      this._filterChange,
      this._matSort.sortChange
    ];

    return merge(...displayDataChanges)
      .pipe(
        map(() => {
          let data = this._clientService.items.slice();

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

