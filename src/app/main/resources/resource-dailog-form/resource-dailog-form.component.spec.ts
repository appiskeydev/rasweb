import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceDailogFormComponent } from './resource-dailog-form.component';

describe('ResourceDailogFormComponent', () => {
  let component: ResourceDailogFormComponent;
  let fixture: ComponentFixture<ResourceDailogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceDailogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceDailogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
