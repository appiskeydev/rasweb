import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpratingcostListComponent } from './opratingcost-list.component';

describe('OpratingcostListComponent', () => {
  let component: OpratingcostListComponent;
  let fixture: ComponentFixture<OpratingcostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpratingcostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpratingcostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
