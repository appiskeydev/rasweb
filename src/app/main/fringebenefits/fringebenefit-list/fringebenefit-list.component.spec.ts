import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FringebenefitListComponent } from './fringebenefit-list.component';

describe('FringebenefitListComponent', () => {
  let component: FringebenefitListComponent;
  let fixture: ComponentFixture<FringebenefitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FringebenefitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FringebenefitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
