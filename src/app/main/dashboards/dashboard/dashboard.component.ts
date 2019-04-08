import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { DashboardService } from '../dashboard.service';
import * as shape from 'd3-shape';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { fuseAnimations } from '@fuse/animations';
import { Dashboard } from '../dashboard.model';
import { Http } from '@angular/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class DashboardComponent implements OnInit {

  projects: any[];
  selectedProject: any;

  widgets: any;

  widget1 : any= {};
  widget2: any = {};
  widget3: any = {};
  widget4 : any = {};
  widget5: any = {};
  widget6: any = {};
  widget7: any = {};
  widget8: any = {};
  widget9: any = {};
  widget11: any = {};

  dateNow = Date.now();

  /** 
  * Constructor
  * @param {FuseSidebarService} _fuseSidebarService
  * @param {DashboardService} _projectDashboardService
  */

  constructor(private _fuseSidebarService : FuseSidebarService,
    private http: Http,
private _projectDashboardService : DashboardService) {

    /**
* Widget 5
*/
    this.widget5 = {
      currentRange: 'thisWeek',
      xAxis: true,
      yAxis: true,
      gradient: false,
      legend: false,
      showXAxisLabel: false,
      xAxisLabel: 'Days',
      showYAxisLabel: false,
      yAxisLabel: 'Isues',
      scheme: {
        domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
      },
      onSelect: (ev) => {
        console.log(ev);
      },
      supporting: {
        currentRange: '',
        xAxis: false,
        yAxis: false,
        gradient: false,
        legend: false,
        showXAxisLabel: false,
        xAxisLabel: 'Days',
        showYAxisLabel: false,
        yAxisLabel: 'Isues',
        scheme: {
          domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
        },
        curve: shape.curveBasis
      }
    };

    /**
     * Widget 6
     */
    this.widget6 = {
      currentRange: 'TW',
      legend: false,
      explodeSlices: false,
      labels: true,
      doughnut: true,
      gradient: false,
      scheme: {
        domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63']
      },
      onSelect: (ev) => {
        console.log(ev);
      }
    };

    /**
     * Widget 7
     */
    this.widget7 = {
      currentRange: 'DT'
    };

    /**
     * Widget 8
     */
    this.widget8 = {
      legend: false,
      explodeSlices: false,
      labels: true,
      doughnut: false,
      gradient: false,
      scheme: {
        domain: ['#f44336', '#9c27b0', '#03a9f4', '#e91e63', '#ffc107']
      },
      onSelect: (ev) => {
        console.log(ev);
      }
    };

    /**
     * Widget 9
     */
    this.widget9 = {
      currentRange: 'TW',
      xAxis: false,
      yAxis: false,
      gradient: false,
      legend: false,
      showXAxisLabel: false,
      xAxisLabel: 'Days',
      showYAxisLabel: false,
      yAxisLabel: 'Isues',
      scheme: {
        domain: ['#42BFF7', '#C6ECFD', '#C7B42C', '#AAAAAA']
      },
      curve: shape.curveBasis
    };

    setInterval(() => {
      this.dateNow = Date.now();
    }, 1000);


     }

  ngOnInit() {

    this.projects = this._projectDashboardService.projects;
    console.log(this.projects);
    //this.selectedProject = this.projects[0];
    //console.log(this.selectedProject.name);
    this.widgets = this._projectDashboardService.widgets;
    // this.widget1 = this.widgets.widget1;
    /**
     * Widget 11
  widget3 : any = {};
     */
    this.widget11.onContactsChanged = new BehaviorSubject({});
    this.widget11.onContactsChanged.next(this.widgets.widget11.table.rows);
    this.widget11.dataSource = new FilesDataSource(this.widget11);

    // console.log(this.widgets.widget1);
    this._projectDashboardService.getWidget1().subscribe(projectWidget1 => {
      this.widgets.widget1= projectWidget1;
      // console.log(this.widgets.widget1);

  });

  // console.log(this.widgets.widget2);
  this._projectDashboardService.getWidget2().subscribe(projectWidget2 =>{
    this.widgets.widget2 = projectWidget2;
 
    // console.log(this.widgets.widget2)
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
    this._projectDashboardService.getWidget5().subscribe(projectWidget5 => {
      this.widgets.widget5 = projectWidget5;
      // console.log(this.widgets.widget5);
    });

    // console.log(this.widgets.widget6)
    // this._projectDashboardService.getWidget6().subscribe(projectWidget6 => {
    //   this.widgets.widget6 = projectWidget6;
    //   console.log(this.widgets.widget6)
    // });
  

  }
  /**
  * Toggle the sidebar
  *
  * @param name
  */
  toggleSidebar(name): void {
    this._fuseSidebarService.getSidebar(name).toggleOpen();
  }

}
export class FilesDataSource extends DataSource<any>
{
  /**
   * Constructor
   *
   * @param _widget11
   */
  constructor(private _widget11) {
    super();
  }

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   *
   * @returns {Observable<any[]>}
   */
  connect(): Observable<any[]> {
    return this._widget11.onContactsChanged;
  }

  /**
   * Disconnect
   */
  disconnect(): void {
  }
}


