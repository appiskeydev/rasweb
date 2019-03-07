import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignationComponent } from './designation/designation.component';
import { DesignationListComponent } from './designation-list/designation-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DesignationComponent, DesignationListComponent]
})
export class DesignationModule { }
