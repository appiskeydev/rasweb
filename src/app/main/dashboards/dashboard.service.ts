import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'environments/environment';
import * as moment from 'moment';
import { Http } from '@angular/http';



const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  onItemChanged: BehaviorSubject<any>;
  onItemsChanged: BehaviorSubject<any>;
  item: any;
  items: any[];
  routeParams: any;
  projects: any[];
  widgets : any[];
  entityNode: string = 'project';
  entityNode1: string ="resource";
  entityNodeWidget1: string = 'project/count';
  entityNodeWidget2: string = 'milestone/count';
  entityNodeWidget3: string = 'project/critical-project';
  entityNodeWidget4: string = 'department/bench';
  entityNodeWidget5: string = 'project/filter';
  entityNodeWidget6: string = 'project/budget-detail';
  entityNodeWidget7: string = 'client/count';
  entityNodeWidget8: string = 'client/clients-this-month';
  entityNodeWidget9: string = 'milestone/total-revenue';
  entityNodeWidget10: string = 'milestone/overdue-revenue';
  entityNodeWidget11: string = 'department/total-departments';
  entityNodeWidget12: string = 'department/total-cost';
  entityNodeWidget13: string = 'department/average-revenue';
  entityNodeWidget14: string = 'department/average-cost';
  entityNodeWidget15: string = 'department/department-details';
  entityNodeWidget16: string = 'resource/count';
  entityNodeWidget17: string = 'resource/detail';
  entityNodeWidget18: string = 'resource/resource-this-month';
  entityNodeWidget19: string = 'resource/list';
  entityNodeWidget20: string = 'resource/total-spent-month';
  entityNodeWidget21: string = 'project/total-remaining';
  entityNodeWidget22: string = 'project/detail';
  entityNodeWidget23: string = 'project/project-health';
  entityNodeWidget24: string = 'project/project-percent-complete';
  entityNodeWidget25: string = 'project/total-revenue';
  entityNodeDashboard: string = 'project/project-dashboard';

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(
    private _httpClient: HttpClient,
    private http: Http,
  ) {
    this.onItemChanged = new BehaviorSubject({});
    this.onItemsChanged = new BehaviorSubject({});
  }
  /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

    return new Promise((resolve, reject) => {

      Promise.all([
        this.getProjects(),
        this.getWidgets()
      ]).then(
        () => {
          resolve();
        },
        reject
      );
    });
  }
  /**
   * Get item
   *
   * @returns {Promise<any>}
   */
  getInit(): Promise<any> {
    return new Promise((resolve, reject) => {
      // console.log(this.routeParams.id);
      if (this.routeParams.id === undefined) {
        this._httpClient.get(API_URL + '/' + this.entityNode1)
          .subscribe((response: any) => {
            this.items = response;
            this.onItemsChanged.next(this.items);
            resolve(response);
          }, reject);
      }
      else if (this.routeParams.id === 'new') {
        this.onItemChanged.next(false);
        resolve(false);
      }
      else {
        this._httpClient.get(API_URL + '/' + this.entityNode1 + '/' + this.routeParams.id)
          .subscribe((response: any) => {
            this.item = response;
            this.onItemChanged.next(this.item);
            resolve(response);
          }, reject);
      }
    });
  }


  /**
   * Get item
   *
   * @returns {Promise<any>}
   */
  getItem(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (this.routeParams.id === 'new') {
        this.onItemChanged.next(false);
        resolve(false);
      }
      else {
        this._httpClient.get(API_URL + '/' + this.entityNode1 + '/' + this.routeParams.id)
          .subscribe((response: any) => {
            this.item = response;
            this.onItemChanged.next(this.item);
            resolve(response);
          }, reject);
      }
    });
  }


  /**
   * Get projects
   *
   * @returns {Promise<any>}
   */
  public getProjects(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(API_URL + '/' + this.entityNode1)
        .subscribe((response: any) => {
          this.projects = response;
          resolve(response);
        }, reject);
    });
  }

  /**
   * Get widgets
   *
   * @returns {Promise<any>}
   */
  public getWidgets(): Promise<any> {
    return new Promise((resolve, reject) => {
      //this._httpClient.get(API_URL + '/' + this.entityNodeDashboard)
      this._httpClient.get('api/project-dashboard-widgets')
        .subscribe((response: any) => {
          this.widgets = response;
          resolve(response);
        }, reject);
      resolve();
    });
  }

  public getWidget1(): Observable<any> {
    return this._httpClient
      .get(API_URL + '/' + this.entityNodeWidget1)

  }

  public getWidget2() : Observable<any>
{
    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget2)
}
public getWidget3() : Observable<any>{
  return this._httpClient.get(API_URL + '/' + this.entityNodeWidget3);
}
public getWidget4() :Observable<any>{
  return this._httpClient.get(API_URL +'/' + this.entityNodeWidget4);
}
  public getWidget5(to, from) : Observable<any>{
    let today = moment();
    // console.log('Today' +today);
    var dateLastMonth = moment(today).add(1, 'days').subtract(1, 'months');
    console.log('Last mont' + dateLastMonth.format('YYYY-DD-MM') + '----' + today.format('YYYY-DD-MM'))
    
    const dateNow = today.format('YYYY-MM-D');
    const dateLast = dateLastMonth.format('YYYY-MM-D');
    
    
    if (to != '' && from != '') {
      return  this._httpClient.post(API_URL + '/' + this.entityNodeWidget5, { 'to': to, 'from': from });
 
    }
   else{
     console.log('NOWW :' +dateNow,'Last month'+ dateLast)
      return this._httpClient.post(API_URL + '/' + this.entityNodeWidget5, { 'to': dateLast, 'from': dateNow });

      // return this._httpClient.get(API_URL + '/' + this.entityNodeWidget5);

   }
}
  // getWidget5(to: String, from: String): Observable<any> {
  


  //     if (to != '' && from != ''){
  //     return   this._httpClient.post(API_URL + '/' + this.entityNode, { 'to': to, 'from': from });
   
  //     }
  //  else{
  //       this._httpClient.post(API_URL + '/' + this.entityNode, { 'to': '2019-03-30', 'from': '2019-04-30' });
         
  //  }
 
  // }


public getWidget6() :Observable<any> {

  return this._httpClient.get(API_URL + '/' + this.entityNodeWidget6);

}
  public getWidget7(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget7);

  }

  public getWidget8(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget8);

  }

  public getWidget9(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget9);

  }

  public getWidget10(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget10);

  }

  public getWidget11(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget11);

  }

  public getWidget12(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget12);

  }

  public getWidget13(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget13);

  }

  public getWidget14(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget14);

  }


  public getWidget15(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget15);

  }

  public getWidget16(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget16);

  }

  public getWidget17(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget17);

  }

  public getWidget18(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget18);

  }
  public getWidget19(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget19);

  }

  public getWidget20(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget20);

  }

  public getWidget21(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget21);

  }

  public getWidget22(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget22);

  }


  public getWidget23(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget23);

  }

  public getWidget24(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget24);

  }

  public getWidget25(): Observable<any> {

    return this._httpClient.get(API_URL + '/' + this.entityNodeWidget25);

  }
}
