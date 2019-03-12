import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpratingcostComponent } from './opratingcost.component';

describe('OpratingcostComponent', () => {
  let component: OpratingcostComponent;
  let fixture: ComponentFixture<OpratingcostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpratingcostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpratingcostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
