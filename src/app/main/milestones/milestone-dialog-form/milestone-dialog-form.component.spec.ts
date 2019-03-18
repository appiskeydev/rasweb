import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneDialogFormComponent } from './milestone-dialog-form.component';

describe('MilestoneDialogFormComponent', () => {
  let component: MilestoneDialogFormComponent;
  let fixture: ComponentFixture<MilestoneDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilestoneDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
