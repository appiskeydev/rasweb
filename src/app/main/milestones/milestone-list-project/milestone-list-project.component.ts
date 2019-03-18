import { Component, OnInit, ViewEncapsulation, ViewChild, TemplateRef } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
import { Subject, Observable } from 'rxjs';
import { MilestoneService } from '../milestone.service';
import { MilestoneFormComponent } from '../milestone-form/milestone-form.component';
import { FormGroup } from '@angular/forms';
import { DataSource } from '@angular/cdk/table';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-milestone-list-project',
  templateUrl: './milestone-list-project.component.html',
  styleUrls: ['./milestone-list-project.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class MilestoneListProjectComponent implements OnInit {

  @ViewChild('dialogContent')
  dialogContent: TemplateRef<any>;

  milestones: any;
  user: any;
  dataSource: FilesDataSource | null;
  displayedColumns = [ 'name', 'email', 'phone', 'buttons'];
  selectedMilestones: any[];
  checkboxes: {};
  dialogRef: any;
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {MilestoneService} _milestonesService
   * @param {MatDialog} _matDialog
   */
  constructor(
      private _milestonesService: MilestoneService,
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
      this.dataSource = new FilesDataSource(this._milestonesService);

      this._milestonesService.onMilestonesChanged
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe(milestones => {
              this.milestones = milestones;

              this.checkboxes = {};
              milestones.map(milestone => {
                  this.checkboxes[milestone.id] = false;
              });
          });

      this._milestonesService.onSelectedMilestonesChanged
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe(selectedMilestones => {
              for ( const id in this.checkboxes )
              {
                  if ( !this.checkboxes.hasOwnProperty(id) )
                  {
                      continue;
                  }

                  this.checkboxes[id] = selectedMilestones.includes(id);
              }
              this.selectedMilestones = selectedMilestones;
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
   * Edit milestone
   *
   * @param milestone
   */
  editMilestone(milestone): void
  {
      this.dialogRef = this._matDialog.open(MilestoneFormComponent, {
          panelClass: 'milestone-form-dialog',
          data      : {
              milestone: milestone,
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

                      this._milestonesService.updateMilestone(formData.getRawValue());
                      break;
                  /**
                   * Delete
                   */
                  case 'delete':

                      this.deleteMilestone(milestone);

                      break;
              }
          });
  }

  /**
   * Delete Milestone
   */
  deleteMilestone(milestone): void
  {
      this.confirmDialogRef = this._matDialog.open(FuseConfirmDialogComponent, {
          disableClose: false
      });

      this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

      this.confirmDialogRef.afterClosed().subscribe(result => {
          if ( result )
          {
              this._milestonesService.deleteMilestone(milestone);
          }
          this.confirmDialogRef = null;
      });

  }

  /**
   * On selected change
   *
   * @param milestoneId
   */
  onSelectedChange(milestoneId): void
  {
      this._milestonesService.toggleSelectedMilestone(milestoneId);
  }

}

export class FilesDataSource extends DataSource<any>
{
  /**
   * Constructor
   *
   * @param {MilestoneService} _milestonesService
   */
  constructor(
      private _milestonesService: MilestoneService
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
      return  this._milestonesService.onMilestonesChanged;
  }

  /**
   * Disconnect
   */
  disconnect(): void
  {
  }
}
