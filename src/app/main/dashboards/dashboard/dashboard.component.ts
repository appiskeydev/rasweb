import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { DashboardService } from '../dashboard.service';
import * as shape from 'd3-shape';
import { BehaviorSubject, Observable, from, merge } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { fuseAnimations } from '@fuse/animations';
import { Dashboard } from '../dashboard.model';
import { Http } from '@angular/http';
import { KeycloakService } from 'keycloak-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class DashboardComponent implements OnInit {

  projects: any[];
  dashboard: Dashboard;
  selectedProject: any;
  dashboardForm : FormGroup;


  @ViewChild('filter')
  filter: ElementRef;

  widgets: any;

  widget1 : any= {};
  widget2: any = {};
  widget3: any = {};
  widget4 : any = {};
  widget5: any = {};
  widget6: any = [];
  widget7: any = {};
  widget8: any = {};
  widget9: any = {};
  widget10: any = {};
  widget11: any = {};
  widget12: any = {};
  widget13: any = {};
  widget14: any = {};
  widget15: any = {};
  widget16: any = {};
  widget17: any = {};
  username: String;

  dateNow = Date.now();
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);

  /** 
  * Constructor
  * @param {FuseSidebarService} _fuseSidebarService
  * @param {DashboardService} _projectDashboardService
  * @param {KeycloakService} _keycloakService
  * @param {FormBuilder} _formBuilder

  */

  constructor(private _fuseSidebarService : FuseSidebarService,
    private http: Http,
private _projectDashboardService : DashboardService,
    private _keycloakService: KeycloakService,
    private _formBuilder: FormBuilder,
) {

    /**
* Widget 5
*/
    // this.widget5 = {
    //   currentRange: 'thisWeek',
    //   xAxis: true,
    //   yAxis: true,
    //   gradient: false,
    //   legend: false,
    //   showXAxisLabel: false,
    //   xAxisLabel: 'Days',
    //   showYAxisLabel: false,
    //   yAxisLabel: 'Isues',
    //   scheme: {
    //     domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
    //   },
    //   onSelect: (ev) => {
    //     console.log(ev);
    //   },
    //   supporting: {
    //     currentRange: '',
    //     xAxis: false,
    //     yAxis: false,
    //     gradient: false,
    //     legend: false,
    //     showXAxisLabel: false,
    //     xAxisLabel: 'Days',
    //     showYAxisLabel: false,
    //     yAxisLabel: 'Isues',
    //     scheme: {
    //       domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
    //     },
    //     curve: shape.curveBasis
    //   }
    // };

    /**
     * Widget 6
     */
    // this.widget6 = {
    //   currentRange: 'TW',
    //   legend: false,
    //   explodeSlices: false,
    //   labels: true,
    //   doughnut: true,
    //   gradient: false,
    //   scheme: {
    //     domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63']
    //   },
    //   onSelect: (ev) => {
    //     console.log(ev);
    //   }
    // };

    /**
     * Widget 7
     */
    // this.widget7 = {
    //   currentRange: 'DT'
    // };

    /**
     * Widget 8
     */
    // this.widget8 = {
    //   legend: false,
    //   explodeSlices: false,
    //   labels: true,
    //   doughnut: false,
    //   gradient: false,
    //   scheme: {
    //     domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107']
    //   },
    //   onSelect: (ev) => {
    //     console.log(ev);
    //   }
    // };

    /**
     * Widget 9
     */
    // this.widget9 = {
    //   currentRange: 'TW',
    //   xAxis: false,
    //   yAxis: false,
    //   gradient: false,
    //   legend: false,
    //   showXAxisLabel: false,
    //   xAxisLabel: 'Days',
    //   showYAxisLabel: false,
    //   yAxisLabel: 'Isues',
    //   scheme: {
    //     domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
    //   },
    //   curve: shape.curveBasis
    // };

    setInterval(() => {
      this.dateNow = Date.now();
    }, 1000);


     }

  ngOnInit() {

    this.projects = this._projectDashboardService.projects;
    console.log(this.projects);
    this.selectedProject = 'Cuzhub';
    // this.selectedProject = this.projects[0];
    // console.log(this.selectedProject.name);
    this.widgets = this._projectDashboardService.widgets;
    this.username = this._keycloakService.getUsername();
    console.log(this.username)

    // this.widget1 = this.widgets.widget1;
    /**
     * Widget 11
  widget3 : any = {};
     */
    // this.widget11.onContactsChanged = new BehaviorSubject({});
    // this.widget11.onContactsChanged.next(this.widgets.widget11.table.rows);
    // this.widget11.dataSource = new FilesDataSource(this.widget11);

    // console.log(this.widgets.widget1);
    this._projectDashboardService.getWidget1().subscribe(projectWidget1 => {
      this.widgets.widget1= projectWidget1;
      // console.log(this.widgets.widget1);

  });

  // console.log(this.widgets.widget2);
  this._projectDashboardService.getWidget2().subscribe(projectWidget2 =>{
    this.widgets.widget2 = projectWidget2;
 
    // console.log(this.widgets.widget2)
    this.dashboardForm = this.createDashboardForm();

  });


  // console.log(this.widgets.widget3);
  this._projectDashboardService.getWidget3().subscribe(projectWidget3 => {
    this.widgets.widget3 = projectWidget3;
    // console.log(this.widgets.widget3);
  });

  // console.log(this.widgets.widget4);
  this._projectDashboardService.getWidget4().subscribe(projectWidget4 =>
    {this.widgets.widget4 = projectWidget4;
      // console.log(this.widgets.widget4);
    });

    // console.log(this.widgets.widget5);
    this._projectDashboardService.getWidget5('','').subscribe(projectWidget5 => {
      this.widgets.widget5 = projectWidget5;
       console.log(this.widgets.widget5);
    });
    
   

   // console.log(this.widgets.widget6)
    this._projectDashboardService.getWidget6().subscribe(projectWidget6 => {
      this.widgets.widget6 = projectWidget6;
      console.log(this.widgets.widget6)
    });

    this._projectDashboardService.getWidget7().subscribe(projectWidget7 => {
      this.widgets.widget7 = projectWidget7;
      console.log(this.widgets.widget7)
    });
  
    this._projectDashboardService.getWidget8().subscribe(projectWidget8 => {
      this.widgets.widget8 = projectWidget8;
      console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget9().subscribe(projectWidget9 => {
      this.widgets.widget9 = projectWidget9;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget10().subscribe(projectWidget10 => {
      this.widgets.widget10 = projectWidget10;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget11().subscribe(projectWidget11 => {
      this.widgets.widget11 = projectWidget11;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget12().subscribe(projectWidget12 => {
      this.widgets.widget12 = projectWidget12;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget13().subscribe(projectWidget13 => {
      this.widgets.widget13 = projectWidget13;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget14().subscribe(projectWidget14 => {
      this.widgets.widget14 = projectWidget14;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget15().subscribe(projectWidget15 => {
      this.widgets.widget15 = projectWidget15;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget16().subscribe(projectWidget16 => {
      this.widgets.widget16 = projectWidget16;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget17().subscribe(projectWidget17 => {
      this.widgets.widget17 = projectWidget17;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget18().subscribe(projectWidget18 => {
      this.widgets.widget18 = projectWidget18;
      // console.log(this.widgets.widget8)
    });
    this._projectDashboardService.getWidget19().subscribe(projectWidget19 => {
      this.widgets.widget19 = projectWidget19;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget20().subscribe(projectWidget20 => {
      this.widgets.widget20 = projectWidget20;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget21().subscribe(projectWidget21 => {
      this.widgets.widget21 = projectWidget21;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget22().subscribe(projectWidget22 => {
      this.widgets.widget22 = projectWidget22;
      // console.log(this.widgets.widget8)
    });
    this._projectDashboardService.getWidget23().subscribe(projectWidget23 => {
      this.widgets.widget23 = projectWidget23;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget24().subscribe(projectWidget24 => {
      this.widgets.widget24 = projectWidget24;
      // console.log(this.widgets.widget8)
    });

    this._projectDashboardService.getWidget25().subscribe(projectWidget25 => {
      this.widgets.widget25 = projectWidget25;
      // console.log(this.widgets.widget8)
    });
  }
/**
* Create department form
*
* @returns {FormGroup}
*/
  createDashboardForm(): FormGroup {

    return this._formBuilder.group({
      to: [],
      from: [],
    });

  }
  /**
  * Toggle the sidebar
  *
  * @param name
  */
  toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

  search():void{
    const data = this.dashboardForm.getRawValue();
    console.log(data.to, data.from);
    this._projectDashboardService.getWidget5(data.to, data.from).subscribe(projectWidget5 => {
      this.widgets.widget5 = projectWidget5;
   
    });

}

}
// export class FilesDataSource extends DataSource<any>
// {
//   /**
//    * Constructor
//    *
//    * @param _widget11
//    */
//   constructor(private _widget11) {
//     super();
//   }

//   /**
//    * Connect function called by the table to retrieve one stream containing the data to render.
//    *
//    * @returns {Observable<any[]>}
//    */
//   connect(): Observable<any[]> {
//     return this._widget11.onContactsChanged;
//   }

//   /**
//    * Disconnect
//    */
//   disconnect(): void {
//   }
// }


export class FilesDataSource extends DataSource<any>
{
  private _filterChange = new BehaviorSubject('');
  private _filteredDataChange = new BehaviorSubject('');

  /**
   * Constructor
   *
   * @param {DashboardService} _dashboardService
   * @param {MatPaginator} _matPaginator
   * @param {MatSort} _matSort
   */
  constructor(
    private _dashboardService: DashboardService,
    private _matPaginator: MatPaginator,
    private _matSort: MatSort
  ) {
    super();

    this.filteredData = this._dashboardService.items;
  }

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   *
   * @returns {Observable<any[]>}
   */
  connect(): Observable<any[]> {
    const displayDataChanges = [
      this._dashboardService.onItemsChanged,
      this._matPaginator.page,
      this._filterChange,
      this._matSort.sortChange
    ];

    return merge(...displayDataChanges)
      .pipe(
        map(() => {
          let data = this._dashboardService.items.slice();

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
