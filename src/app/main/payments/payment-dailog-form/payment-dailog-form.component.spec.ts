import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDailogFormComponent } from './payment-dailog-form.component';

describe('PaymentDailogFormComponent', () => {
  let component: PaymentDailogFormComponent;
  let fixture: ComponentFixture<PaymentDailogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentDailogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDailogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
