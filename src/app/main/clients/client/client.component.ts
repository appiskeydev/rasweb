import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../client.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ClientService } from '../client.service';
import { MatSnackBar, MatInput } from '@angular/material';
import { Router } from '@angular/router';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { fuseAnimations } from '@fuse/animations';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  animations: fuseAnimations
})
export class ClientComponent implements OnInit {
  @ViewChild('clientname')
  nameInput:MatInput
  clients: Client[];
  client: Client;
  pageType: string;
  clientForm: FormGroup;
  
  // myControl = new FormControl();
  package_id: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  
  /**
   * Constructor
   *
   * @param {ClientService} _clientService
   * @param {FormBuilder} _formBuilder
   * @param {MatSnackBar} _matSnackBar,
   *
   */
  constructor(
    private _clientService: ClientService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {
    // Set the default
    this.client = new Client();
    // Set the private defaults
    this._unsubscribeAll = new Subject();

  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit(): void {
    this.nameInput.focus();

    // Subscribe to update product on changes
    this._clientService.onItemChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(client => {

        if (client) {
          this.client = new Client(client);
          this.pageType = 'edit';
         // console.log(client)

        }
        else {
          this.pageType = 'new';
          this.client = new Client();
        }
        this.clientForm = this.createClientForm();


      });


      this._clientService.getAll().subscribe(clients => {
        this.clients =  clients.map((client) => new Client(client));
    console.log(this.clients);

    });



  }
  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }



  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Create client form
   *
   * @returns {FormGroup}
   */
  createClientForm(): FormGroup {
    
      return this._formBuilder.group({
        id: [this.client.id],
        name: [this.client.name,[Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        handle: [this.client.handle],
        clientPhoneNumber:[this.client.clientPhoneNumber],
        clientEmail: [this.client.clientEmail ,[Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(50)]],
        clientLocation: [this.client.clientLocation],
        parent: [this.client.parent],
        clientCompanyName: [this.client.clientCompanyName]
      });
   
  }

  /**
   * Save client
   */
  saveClient(): void {
    const data = this.clientForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    this._clientService.saveItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._clientService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this._router.navigate(['/clients']);
      });
  }

  /**
   * Add client
   */
  addClient(): void {
    const data = this.clientForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);
if(data.parent == ""){
  data.parent=null;
}
    this._clientService.addItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._clientService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });

        // Change the location with new one
        this._router.navigate(['/clients']);
      });
     // console.log(data);
  }

  compareFn(c1: Client, c2: Client): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
   }


}