import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneListProjectComponent } from './milestone-list-project.component';

describe('MilestoneListProjectComponent', () => {
  let component: MilestoneListProjectComponent;
  let fixture: ComponentFixture<MilestoneListProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilestoneListProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneListProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
