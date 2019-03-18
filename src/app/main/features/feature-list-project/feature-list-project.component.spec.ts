import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureListProjectComponent } from './feature-list-project.component';

describe('FeatureListProjectComponent', () => {
  let component: FeatureListProjectComponent;
  let fixture: ComponentFixture<FeatureListProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureListProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureListProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
