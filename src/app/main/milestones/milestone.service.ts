import { Injectable } from '@angular/core';

import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Project } from '../projects/project.model';
import { Milestone } from './milestone.model';

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: "root"
})
export class MilestoneService {
  
  onMilestonesChanged: BehaviorSubject<any>;
  onSelectedMilestonesChanged: BehaviorSubject<any>;
  // onUserDataChanged: BehaviorSubject<any>;
  // onSearchTextChanged: Subject<any>;
  // onFilterChanged: Subject<any>;



  entityNode: string = 'milestone';
  entityNodeProject: string = 'project';
  routeParams: any;
  item: any;
  items: any[];
  onItemChanged: BehaviorSubject<any>;
  onItemsChanged: BehaviorSubject<any>;
  milestoneIndex:any;



  milestones: Milestone[];
  selectedMilestones: string[] = [];

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
    this.onMilestonesChanged = new BehaviorSubject([]);
    this.onSelectedMilestonesChanged = new BehaviorSubject([]);
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
        // this.getMilestones();
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

  public getAllProjects(): Observable<any[]> {
    return this.http
      .get(API_URL + '/' + this.entityNodeProject)

      .map(response => {
        const projects = response.json();
        return projects.map((project) => new Project(project));
        // return licenses.map((license) => new licenses(license));
      })
      .catch(this.handleError);
  }
  private handleError (error: Response | any) {
    console.error('LicenceService::handleError', error);
    return Observable.throw(error);
  }

  deleteItemById(itemId: number): any {
    return  this._httpClient.delete(API_URL + '/' + this.entityNode +'/' + itemId);

  }



/**
     * Get milestones
     *
     * @returns {Promise<any>}
     */
    getMilestones(): Promise<any>
    {
        return new Promise((resolve, reject) => {
                this._httpClient.get('api/milestones-milestones')
                    .subscribe((response: any) => {

                        this.milestones = response;

                      

                        this.milestones = this.milestones.map(milestone => {
                            return new Milestone(milestone);
                        });

                        this.onMilestonesChanged.next(this.milestones);
                        resolve(this.milestones);
                    }, reject);
            }
        );
    }


    
    /**
     * Toggle selected milestone by id
     *
     * @param id
     */
    toggleSelectedMilestone(id): void
    {
        // First, check if we already have that milestone as selected...
        if ( this.selectedMilestones.length > 0 )
        {
            const index = this.selectedMilestones.indexOf(id);

            if ( index !== -1 )
            {
                this.selectedMilestones.splice(index, 1);

                // Trigger the next event
                this.onSelectedMilestonesChanged.next(this.selectedMilestones);

                // Return
                return;
            }
        }

        // If we don't have it, push as selected
        this.selectedMilestones.push(id);

        // Trigger the next event
        this.onSelectedMilestonesChanged.next(this.selectedMilestones);
    }

    /**
     * Toggle select all
     */
    toggleSelectAll(): void
    {
        if ( this.selectedMilestones.length > 0 )
        {
            this.deselectMilestones();
        }
        else
        {
            this.selectMilestones();
        }
    }

    /**
     * Select milestones
     *
     * @param filterParameter
     * @param filterValue
     */
    selectMilestones(filterParameter?, filterValue?): void
    {
        this.selectedMilestones = [];

        // If there is no filter, select all milestones
        if ( filterParameter === undefined || filterValue === undefined )
        {
            this.selectedMilestones = [];
            this.milestones.map(milestone => {
                this.selectedMilestones.push(milestone.id);
            });
        }

        // Trigger the next event
        this.onSelectedMilestonesChanged.next(this.selectedMilestones);
    }

    /**
     * Update milestone
     *
     * @param milestone
     * @returns {Promise<any>}
     */
    updateMilestone(milestone): Promise<any>
    {
     
        return new Promise((resolve, reject) => {
          if(milestone.id != ''){
           
        this.milestoneIndex = this.milestones.indexOf(milestone);
            this.milestones.splice(this.milestoneIndex, 1);
          }
          this.milestones.push(milestone);
          this.onMilestonesChanged.next(this.milestones);

            // this._httpClient.post('api/milestones-milestones/' + milestone.id, {...milestone})
            //     .subscribe(response => {
            //         this.getMilestones();
                    resolve(milestone);
            //     });
        });
    }

    

    /**
     * Deselect milestones
     */
    deselectMilestones(): void
    {
        this.selectedMilestones = [];

        // Trigger the next event
        this.onSelectedMilestonesChanged.next(this.selectedMilestones);
    }

    /**
     * Delete milestone
     *
     * @param milestone
     */
    deleteMilestone(milestone): void
    {
        const milestoneIndex = this.milestones.indexOf(milestone);
        this.milestones.splice(milestoneIndex, 1);
        this.onMilestonesChanged.next(this.milestones);
    }

    /**
     * Delete selected milestones
     */
    deleteSelectedMilestones(): void
    {
        for ( const milestoneId of this.selectedMilestones )
        {
            const milestone = this.milestones.find(_milestone => {
                return _milestone.id === milestoneId;
            });
            const milestoneIndex = this.milestones.indexOf(milestone);
            this.milestones.splice(milestoneIndex, 1);
        }
        this.onMilestonesChanged.next(this.milestones);
        this.deselectMilestones();
    }



}