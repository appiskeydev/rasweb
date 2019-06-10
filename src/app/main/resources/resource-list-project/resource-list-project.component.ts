import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { Subject, Observable } from 'rxjs';
import { ResourceService } from '../resource.service';
import { takeUntil } from 'rxjs/operators';
import { ResourceDailogFormComponent } from '../resource-dailog-form/resource-dailog-form.component';
import { FormGroup } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-resource-list-project',
  templateUrl: './resource-list-project.component.html',
  styleUrls: ['./resource-list-project.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ResourceListProjectComponent implements OnInit {


  @ViewChild('dialogContent')
  dialogContent: TemplateRef<any>;

  resources: any;
  user: any;
  dataSource: FilesDataSource | null;
  displayedColumns = [ 'name', 'hour', 'allocation',  'start', 'end', 'buttons'];
  selectedResources: any[];
  checkboxes: {};
  dialogRef: any;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;




  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {ResourceService} _resourcesService
   * @param {MatDialog} _matDialog
   */
  constructor(
      private _resourcesService: ResourceService,
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
      this.dataSource = new FilesDataSource(this._resourcesService);

      this._resourcesService.onResourcesChanged
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe(resources => {
              this.resources = resources;

            //   this.checkboxes = {};
            //   resources.map(resource => {
            //       this.checkboxes[resource.id] = false;
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
   * Edit resource
   *
   * @param resource
   */
  editResource(resource): void
  {
      this.dialogRef = this._matDialog.open(ResourceDailogFormComponent, {
          panelClass: 'milestone-form-dialog',
          data      : {
              resource: resource,
              action : 'edit'
          }
      });

      this.dialogRef.afterClosed()
          .subscribe(response => {
              if ( !response )
              {
                  return;
              }
              const actionType: string = response[0];
              const formData: FormGroup = response[1];
              switch ( actionType )
              {
                  /**
                   * Save
                   */
                  case 'save':

                      this._resourcesService.updateResource(formData.getRawValue());
                      break;
                  /**
                   * Delete
                   */
                  case 'delete':

                      this.deleteResource(resource);

                      break;
              }
          });
  }

  /**
   * Delete Resource
   */
  deleteResource(resource): void
  {
      this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
          disableClose: false
      });

      this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

      this.confirmDialogRef.afterClosed().subscribe(result => {
          if ( result )
          {
              this._resourcesService.deleteResource(resource);
          }
          this.confirmDialogRef = null;
      });

  }

 

}

export class FilesDataSource extends DataSource<any>
{
  /**
   * Constructor
   *
   * @param {ResourceService} _resourcesService
   */
  constructor(
      private _resourcesService: ResourceService
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
      return  this._resourcesService.onResourcesChanged;
  }

  /**
   * Disconnect
   */
  disconnect(): void
  {
  }

}
