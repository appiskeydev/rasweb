import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreateDailogComponent } from './project-create-dailog.component';

describe('ProjectCreateDailogComponent', () => {
  let component: ProjectCreateDailogComponent;
  let fixture: ComponentFixture<ProjectCreateDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectCreateDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCreateDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
