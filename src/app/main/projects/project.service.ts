import { Injectable } from '@angular/core';

import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Client } from '../clients/client.model';
import { Feature } from '../features/feature.model';
import { Milestone } from '../milestones/milestone.model';
import { Resource } from '../resources/resource.model';

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: "root"
})
export class ProjectService {
  
  entityNode: string = 'project';
  entityNodeClient: string = 'client';
  entityNodeFeature: string = 'feature';
  entityNodeMilestone: string = 'milestone';
  entityNodeResource: string = 'resource';
  routeParams: any;
  item: any;
  items: any[];
  onItemChanged: BehaviorSubject<any>;
  onItemsChanged: BehaviorSubject<any>;

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

  public getAllClients(): Observable<any[]> {
    return this.http
      .get(API_URL + '/' + this.entityNodeClient)

      .map(response => {
        const clients = response.json();
        return clients.map((client) => new Client(client));
        // return licenses.map((license) => new licenses(license));
      })
      .catch(this.handleError);
  }

  public getAllFeatures(): Observable<any[]> {
    return this.http
      .get(API_URL + '/' + this.entityNodeFeature)

      .map(response => {
        const features = response.json();
        return features.map((feature) => new Feature(feature));
        // return licenses.map((license) => new licenses(license));
      })
      .catch(this.handleError);
  }

  public getAllMilestones(): Observable<any[]> {
    return this.http
      .get(API_URL + '/' + this.entityNodeMilestone)

      .map(response => {
        const milestones = response.json();
        return milestones.map((milestone) => new Milestone(milestone));
        // return licenses.map((license) => new licenses(license));
      })
      .catch(this.handleError);
  }


  public getAllResources(): Observable<any[]> {
    return this.http
      .get(API_URL + '/' + this.entityNodeResource)

      .map(response => {
        const resources = response.json();
        return resources.map((resource) => new Resource(resource));
        // return licenses.map((license) => new licenses(license));
      })
      .catch(this.handleError);
  }
  deleteItemById(itemId: number): any {
    return  this._httpClient.delete(API_URL + '/' + this.entityNode +'/' + itemId);

  }

  private handleError (error: Response | any) {
    console.error('LicenceService::handleError', error);
    return Observable.throw(error);
  }

}