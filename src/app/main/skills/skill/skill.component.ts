import { Component, OnInit, ViewChild } from '@angular/core';
import { Skill } from '../skill.model';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { SkillService } from '../skill.service';
import { MatSnackBar, MatInput } from '@angular/material';
import { Router } from '@angular/router';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { FuseUtils } from '@fuse/utils';
import { fuseAnimations } from '@fuse/animations';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: fuseAnimations
})
export class SkillComponent implements OnInit {
  @ViewChild('skillname') 
  nameInput: MatInput;

  skill: Skill;
  pageType: string;
  skillForm: FormGroup;
  
  // myControl = new FormControl();
  package_id: string;

  // Private
  private _unsubscribeAll: Subject<any>;
  toppings = new FormControl();
  
  /**
   * Constructor
   *
   * @param {SkillService} _skillService
   * @param {FormBuilder} _formBuilder
   * @param {MatSnackBar} _matSnackBar,
   *
   */
  constructor(
    private _skillService: SkillService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {
    // Set the default
    this.skill = new Skill();
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
    this._skillService.onItemChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(skill => {

        if (skill) {
          this.skill = new Skill(skill);
          this.pageType = 'edit';
        }
        else {
          this.pageType = 'new';
          this.skill = new Skill();
        }
        this.skillForm = this.createSkillForm();


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
   * Create skill form
   *
   * @returns {FormGroup}
   */
  createSkillForm(): FormGroup {
    
      return this._formBuilder.group({
        id: [this.skill.id],
        name: [this.skill.name,[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        handle: [this.skill.handle],
        skillResources: [this.skill.skillResources]
      });
   
  }

  /**
   * Save skill
   */
  saveSkill(): void {
    const data = this.skillForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    this._skillService.saveItem(data)
      .then(() => {

        // Trigger the subscription with new data
        this._skillService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record saved', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });
        this._router.navigate(['/skills']);
      });
  }

/**
   * Add skill
   */
  addSkill(): void {
    const data = this.skillForm.getRawValue();
    data.handle = FuseUtils.handleize(data.name);

    let itemList: Skill[] = []; 
    let splitted = data.name.split(","); 
    // console.log(splitted);

    for (let key in splitted) {
      let value = splitted[key];
      // Use `key` and `value`
      if(value != ''){
        itemList.push(new Skill({id: '',
          name: value,
          handle: '',
          skillResources:[],
          updatedAt: '',
          createdAt: ''}));
      }
  }

    this._skillService.addListItem(itemList)
      .then(() => {

        // Trigger the subscription with new data
        this._skillService.onItemChanged.next(data);

        // Show the success message
        this._matSnackBar.open('Record added', 'OK', {
          verticalPosition: 'top',
          duration: 2000
        });

        // Change the location with new one
        this._router.navigate(['/skills']);
      });
  }


}