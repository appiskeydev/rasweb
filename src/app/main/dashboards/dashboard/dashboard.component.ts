import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { DashboardService } from '../dashboard.service';
import * as shape from 'd3-shape';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { fuseAnimations } from '@fuse/animations';

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
  projectIssue: any = {};
  taskDistriibution: any = {};
  schedule: any = {};
  budgetDistribution: any = {};
  budgetSpent: any = {};
  teamMember: any = {};

  dateNow = Date.now();

  /** 
  * Constructor
  * @param {FuseSidebarService} _fuseSidebarService
  * @param {DashboardService} _projectDashboardService
  */

  constructor(private _fuseSidebarService : FuseSidebarService,
    private _projectDashboardService : DashboardService) {

    /**
* Widget 5
*/
    this.projectIssue = {
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
    this.taskDistriibution = {
      currentRange: 'thisWeek',
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
    this.schedule = {
      currentRange: 'dt'
    };

    /**
     * Widget 8
     */
    this.budgetDistribution = {
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
    this.budgetSpent = {
      currentRange: 'thisWeek',
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

    /**
     * Widget 11
     */
    this.teamMember.onContactsChanged = new BehaviorSubject({});
    this.teamMember.onContactsChanged.next(this.widgets.widget11.table.rows);
    this.teamMember.dataSource = new FilesDataSource(this.teamMember);
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


