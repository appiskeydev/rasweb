import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FringebenefitComponent } from './fringebenefit.component';

describe('FringebenefitComponent', () => {
  let component: FringebenefitComponent;
  let fixture: ComponentFixture<FringebenefitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FringebenefitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FringebenefitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
