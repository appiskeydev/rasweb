import { Injectable } from '@angular/core';

import { environment } from '.env/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Department } from '../departments/department.model';
import { Resource } from './resource.model';
import { Skill } from '../skills/skill.model';
import { Designation } from '../designations/designation.model';

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: "root"
})
export class ResourceService {
  
  entityNode: string = 'resource';
  entityNodeDepartment: string = 'department';
  entityNodeSkill: string = 'skill';
  entityNodeDesignation: string = 'designation';
  routeParams: any;
  item: any;
  items: any[];
  onItemChanged: BehaviorSubject<any>;
  onItemsChanged: BehaviorSubject<any>;



  onResourcesChanged: BehaviorSubject<any>;
  onSelectedResourcesChanged: BehaviorSubject<any>;
  resources: Resource[];
  resourceIndex:any;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(
    private _httpClient: HttpClient,
    private http: Http,
  ) {
    // Set the defaults
    this.onItemChanged = new BehaviorSubject({});
    this.onItemsChanged = new BehaviorSubject({});

    this.onResourcesChanged = new BehaviorSubject({});
    this.onSelectedResourcesChanged = new BehaviorSubject({});
  }

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    this.routeParams = route.params;

    return new Promise((resolve, reject) => {

      Promise.all([
        this.getInit()
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
        this._httpClient.get(API_URL + '/' + this.entityNode)
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
        this._httpClient.get(API_URL + '/' + this.entityNode + '/' + this.routeParams.id)
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
        this._httpClient.get(API_URL + '/' + this.entityNode +'/' + this.routeParams.id)
          .subscribe((response: any) => {
            this.item = response;
            this.onItemChanged.next(this.item);
            resolve(response);
          }, reject);
      }
    });
  }

  
  /**
   * Save product
   *
   * @param item
   * @returns {Promise<any>}
   */
  saveItem(item): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.put(API_URL + '/' + this.entityNode, item)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }

  /**
   * Add product
   *
   * @param item
   * @returns {Promise<any>}
   */
  addItem(item): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.post(API_URL + '/' + this.entityNode , item)
        .subscribe((response: any) => {
          resolve(response);
        }, reject);
    });
  }


  /**
   * Get items
   *
   * @returns {Promise<any>}
   */
  getItems(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get(API_URL + '/' + this.entityNode)
        .subscribe((response: any) => {
          this.items = response;
          this.onItemsChanged.next(this.items);
          resolve(response);
        }, reject);
    });
  }

  public getAll(): Observable<any[]> {
    return this.http
      .get(API_URL + '/' + this.entityNodeDepartment)

      .map(response => {
        const departments = response.json();
        return departments.map((department) => new Department(department));
        // return licenses.map((license) => new licenses(license));
      })
      .catch(this.handleError);
  }
  private handleError (error: Response | any) {
    console.error('LicenceService::handleError', error);
    return Observable.throw(error);
  }
  public getReportingesource(): Observable<any[]> {
    return this.http
      .get(API_URL + '/' + this.entityNode)

      .map(response => {
        const resources = response.json();
        return resources.map((resource) => new Resource(resource));
        // return licenses.map((license) => new licenses(license));
      })
      .catch(this.handleError);
  }
  public getResourceSkills(): Observable<any[]> {
    return this.http
      .get(API_URL + '/' + this.entityNodeSkill)

      .map(response => {
        const skills = response.json();
        return skills.map((skill) => new Skill(skill));
        // return licenses.map((license) => new licenses(license));
      })
      .catch(this.handleError);
  }
  public getResourceDesignations(): Observable<any[]> {
    return this.http
      .get(API_URL + '/' + this.entityNodeDesignation)

      .map(response => {
        const designations = response.json();
        return designations.map((designation) => new Designation(designation));
        // return licenses.map((license) => new licenses(license));
      })
      .catch(this.handleError);
  }



  deleteItemById(itemId: number): any {
    return  this._httpClient.delete(API_URL + '/' + this.entityNode +'/' + itemId);

  }

    /**
     * Update resource
     *
     * @param resource
     * @returns {Promise<any>}
     */
    updateResource(resource): Promise<any>
    {
     
        return new Promise((resolve, reject) => {
        //   if( != ''){
        // this.resourceIndex = this.resources.indexOf(resource);
        // let getItem =new Resource(this.resourceIndex);
        // console.log(resource.id+' - ' +getItem.id );
          
    
        for (let key in this.resources) {
          let value = this.resources[key];
          // Use `key` and `value`
          if(value.id == resource.id){
            this.resourceIndex = key;
            this.resources.splice(this.resourceIndex, 1);
          }
      }
    //     this.resources.forEach(function (value) {
    //       if(value.id == resource.id){
    //         let getItem =new Resource(this.resourceIndex value);
          
    //  }
          
    //     });
        //   }
          this.resources.push(resource);
          this.onResourcesChanged.next(this.resources);

            // this._httpClient.post('api/resources-resources/' + resource.id, {...resource})
            //     .subscribe(response => {
            //         this.getResources();
                    resolve(resource);
            //     });
        });
    }

    

    /**
     * Delete resource
     *
     * @param resource
     */
    deleteResource(resource): void
    {
        const resourceIndex = this.resources.indexOf(resource);
        this.resources.splice(resourceIndex, 1);
        this.onResourcesChanged.next(this.resources);
    }


}