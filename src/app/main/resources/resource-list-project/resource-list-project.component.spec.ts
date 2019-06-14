import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceListProjectComponent } from './resource-list-project.component';

describe('ResourceListProjectComponent', () => {
  let component: ResourceListProjectComponent;
  let fixture: ComponentFixture<ResourceListProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceListProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceListProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
