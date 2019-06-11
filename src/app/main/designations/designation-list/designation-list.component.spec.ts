import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationListComponent } from './designation-list.component';

describe('DesignationListComponent', () => {
  let component: DesignationListComponent;
  let fixture: ComponentFixture<DesignationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
