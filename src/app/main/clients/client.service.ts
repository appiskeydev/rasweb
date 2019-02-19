import { Injectable } from '@angular/core';

import { environment } from 'environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Client } from './client.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


const API_URL = environment.apiUrl;


@Injectable({
  providedIn: "root"
})
export class ClientService {
  clients: any[];
  entityNode: string = 'client';
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
      this._httpClient.put(API_URL + '/' + this.entityNode , item)
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
  getItems(): any {
    
    return new Promise((resolve, reject) => {
      this._httpClient.get(API_URL + '/' + this.entityNode)
        .subscribe((response: any) => {
          this.newMethod(response);
          this.onItemsChanged.next(this.items);
          resolve(response);
    console.log(response);
        }, reject);
    });
  }
  public getAll(): Observable<any[]> {
    return this.http
      .get(API_URL + '/' + this.entityNode)

      .map(response => {
        const clients = response.json();
        return clients.map((client) => new Client(client));
        // return licenses.map((license) => new licenses(license));
      })
      .catch(this.handleError);
  }


  private newMethod(response: any) {
    this.items = response;
  }

  deleteItemById(itemId: number): any {
    return  this._httpClient.delete(API_URL + '/' + this.entityNode +'/' + itemId);

  }
  // deleteItem(item: any): any {
  //   console.log(item);
  //   let body = JSON.stringify(item);
  //   return  this._httpClient.delete(API_URL + '/' + this.entityNode ,  body.toString );

  // }

  // deleteItem(department: Department | number): Observable<Department> {
  //   return  this._httpClient.delete<Department>(API_URL + '/' + this.entityNode ,department);

  // }


  // deleteItem(item):  Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this._httpClient.delete(API_URL + '/' + this.entityNode , item)
  //       .subscribe((response: any) => {
  //         resolve(response);
  //       }, reject);
  //   });
  // }
    // tslint:disable-next-line:typedef
    private handleError (error: Response | any) {
      console.error('LicenceService::handleError', error);
      return Observable.throw(error);
    }
  

}