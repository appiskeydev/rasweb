import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FeatureService } from '../feature.service';
import { fuseAnimations } from '@fuse/animations';
import { Subject, Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';


@Component({
  selector: 'app-feature-list-project',
  templateUrl: './feature-list-project.component.html',
  styleUrls: ['./feature-list-project.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class FeatureListProjectComponent implements OnInit {



  features: any;
  user: any;
  dataSource: FilesDataSource | null;
  displayedColumns = [ 'name', 'duration', 'buttons'];
  selectedFeatures: any[];
  checkboxes: {};
  



  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {FeatureService} _featuresService
   * @param {MatDialog} _matDialog
   */
  constructor(
      private _featuresService: FeatureService,
      public _matDialog: MatDialog
  )
  {
      // Set the private defaults
      this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
      this.dataSource = new FilesDataSource(this._featuresService);

      this._featuresService.onFeaturesChanged
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe(features => {
              console.log('feature list project', features);
              this.features = features;

            //   this.checkboxes = {};
            //   features.map(feature => {
            //       this.checkboxes[feature.id] = false;
            //   });
          });

    
     
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------


  /**
   * Delete Feature
   */
  deleteFeature(feature): void
  {
      
      this._featuresService.deleteFeature(feature);


  }

 

}

export class FilesDataSource extends DataSource<any>
{
  /**
   * Constructor
   *
   * @param {FeatureService} _featuresService
   */
  constructor(
      private _featuresService: FeatureService
  )
  {
      super();
  }

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   * @returns {Observable<any[]>}
   */
  connect(): Observable<any[]>
  {
      return  this._featuresService.onFeaturesChanged;
  }

  /**
   * Disconnect
   */
  disconnect(): void
  {
  }

}
