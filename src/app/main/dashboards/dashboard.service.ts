import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  projects: any[];
  widgets : any[];
  entityNode: string = 'project';
  entityNodeWidget1: string = 'project/widget1';
  entityNodeWidget2: string = 'project/widget2';
  entityNodeWidget3: string = 'project/widget3';
  entityNodeWidget4: string = 'project/widget4';
  entityNodeWidget5: string = 'project/widget5';
  entityNodeWidget6: string = 'project/widget6';
  entityNodeDashboard: string = 'project/project-dashboard';

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(
    private _httpClient: HttpClient
  ) {
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
   * Get projects
   *
   * @returns {Promise<any>}
   */
  public getProjects(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(API_URL + '/' + this.entityNode)
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
public getWidget5() : Observable<any>{
  return this._httpClient.get(API_URL + '/' + this.entityNodeWidget5);
}

public getWidget6() :Observable<any> {

  return this._httpClient.get(API_URL + '/' + this.entityNodeWidget6);

}

}
