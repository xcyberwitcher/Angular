import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderreportComponent } from './orderreport.component';

describe('OrderreportComponent', () => {
  let component: OrderreportComponent;
  let fixture: ComponentFixture<OrderreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
