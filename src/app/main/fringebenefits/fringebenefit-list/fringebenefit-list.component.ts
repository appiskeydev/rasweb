import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatDialogRef, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { Subject, fromEvent, BehaviorSubject, Observable, merge } from 'rxjs';
import { FringebenefitService } from '../fringebenefit.service';
import { takeUntil, debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { FuseUtils } from '@fuse/utils';

@Component({
  selector: 'fringebenefit-list',
  templateUrl: './fringebenefit-list.component.html',
  styleUrls: ['./fringebenefit-list.component.scss'],
  animations: fuseAnimations,
  encapsulation: ViewEncapsulation.None
})
export class FringebenefitListComponent implements OnInit {

  dataSource: FilesDataSource | null;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  displayedColumns = ['name','benefitMonth','expenseAmount','isOneTime', 'active'];

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  @ViewChild(MatSort)
  sort: MatSort;

  @ViewChild('filter')
  filter: ElementRef;

  // Private
  private _unsubscribeAll: Subject<any>;
 /**
   * Constructor
   *
   * @param {FringebenefitService} _fringebenefitService
   * @param {MatDialog} _matDialog
   * @param {MatSnackBar} _matSnackBar
   */
  constructor(
      private _fringebenefitService: FringebenefitService,
      public _matDialog: MatDialog,
      private _matSnackBar: MatSnackBar


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
      this.dataSource = new FilesDataSource(this._fringebenefitService, this.paginator, this.sort);

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
 * Delete Contact
 */
  deleteFringebenefit(fringebenefit): void {
      console.log(fringebenefit);
      this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
          disableClose: false
      });

      this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

      this.confirmDialogRef.afterClosed().subscribe(result => {
          if (result) {

              this._fringebenefitService.deleteItemById(fringebenefit.id).subscribe((response: any)  => {
                  // Show the success message
                  this._matSnackBar.open('Record Deleted', 'OK', {
                      verticalPosition: 'top',
                      duration: 3000
                  });
                  this._fringebenefitService.getItems();
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
   * @param {FringebenefitService} _fringebenefitService
   * @param {MatPaginator} _matPaginator
   * @param {MatSort} _matSort
   */
  constructor(
      private _fringebenefitService: FringebenefitService,
      private _matPaginator: MatPaginator,
      private _matSort: MatSort
  ) {
      super();

      this.filteredData = this._fringebenefitService.items;
  }

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   *
   * @returns {Observable<any[]>}
   */
  connect(): Observable<any[]> {
      const displayDataChanges = [
          this._fringebenefitService.onItemsChanged,
          this._matPaginator.page,
          this._filterChange,
          this._matSort.sortChange
      ];

      return merge(...displayDataChanges)
          .pipe(
              map(() => {
                  let data = this._fringebenefitService.items.slice();

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
                  case 'benefitMonth':
                  [propertyA, propertyB] = [a.benefitMonth, b.benefitMonth];
                  break;

                  case 'expenseAmount':
                  [propertyA, propertyB] = [a.expenseAmount, b.expenseAmount];
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
