import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentListProjectComponent } from './payment-list-project.component';

describe('PaymentListProjectComponent', () => {
  let component: PaymentListProjectComponent;
  let fixture: ComponentFixture<PaymentListProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentListProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentListProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
