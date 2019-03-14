import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../client.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ClientService } from '../client.service';
import { MatSnackBar, MatInput } from '@angular/material';
import { Router } from '@angular/router';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { fuseAnimations } from '@fuse/animations';
import { Subscription } from 'rxjs/Subscription';
import { Company } from 'app/main/companies/company.model';
import { CompanyService } from 'app/main/companies/company.service';

@Component({
  providers: [CompanyService],
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  animations: fuseAnimations
})
export class ClientComponent implements OnInit {
  @ViewChild('clientname')
  nameInput: MatInput
  clients: Client[];
  companies: Company[];
  client: Client;
  pageType: string;
  clientForm: FormGroup;

  companyControl = new FormControl();
  referenceControl = new FormControl();

  companyFilteredOptions: Observable<Company[]>;
  referenceFilteredOptions: Observable<Client[]>;

  // myControl = new FormControl();
  package_id: string;

  // Private
  private _unsubscribeAll: Subject<any>;


  /**
   * Constructor
   *
   * @param {ClientService} _clientService
   * @param {CompanyService} _companyService
   * @param {FormBuilder} _formBuilder
   * @param {MatSnackBar} _matSnackBar,
   *
   */
  constructor(
    private _clientService: ClientService,
    private _companyService: CompanyService,
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

    this.clientForm.controls['parent'].valueChanges.subscribe(val => this.validateDataReference(val));

    this._clientService.getAll().subscribe(clients => {
      this.clients = clients.map((client) => new Client(client));
      // console.log(this.clients);


      this.referenceFilteredOptions = this.clientForm.controls['parent'].valueChanges
        .pipe(startWith<string | Client>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filterReference(name) : this.clients.slice()));


    });

    this._clientService.getClientCompany().subscribe(clientCompany => {
      this.companies = clientCompany.map((company) => new Company(company));
      // console.log(this.resourceSkills);

      this.companyFilteredOptions = this.clientForm.controls['clientCompany'].valueChanges
        .pipe(startWith<string | Company>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.companies.slice()));
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
      name: [this.client.name, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      handle: [this.client.handle],
      clientPhoneNumber: [this.client.clientPhoneNumber],
      clientEmail: [this.client.clientEmail, [Validators.required, Validators.email, Validators.minLength(3), Validators.maxLength(50)]],
      clientLocation: [this.client.clientLocation],
      parent: [this.client.parent],
      clientCompany: [this.client.clientCompany]
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
    // console.log(data);
    if (data.parent == "") {
      data.parent = null;
    }



    if (typeof data.clientCompany === "string") {
      this._companyService.addItem({ 'id': '', 'name': data.clientCompany, 'updatedAt': '', 'createdAt': '' }).then((result) => {
        //  console.log('Result' +result); 
        data.clientCompany = new Company(result);
        this.createClient(data);

        //  console.log( 'Log' + data.clientCompany);
      });


    } else {
      this.createClient(data);
    }

    //  console.log(data);
  }

  createClient(data): void {
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
  }

  compareFn(c1: Client, c2: Client): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
  private _filter(name: string): Company[] {
    const filterValue = name.toLowerCase();
    return this.companies.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  displayFn(item?: Company): string | undefined {

    return item ? item.name : undefined;
  }

  private _filterReference(name: string): Client[] {
    const filterValue = name.toLowerCase();
    return this.clients.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
  displayFnReferences(item?: Client): string | undefined {

    return item ? item.name : undefined;
  }

  private validateDataReference(val: any) {
    if (typeof val === "string") {
      this.clientForm.controls['parent'].setErrors({ error: 'Must select reference' });
    }
    else {
      this.clientForm.controls['parent'].setErrors(null);
    }

    console.log(val);
  }


}