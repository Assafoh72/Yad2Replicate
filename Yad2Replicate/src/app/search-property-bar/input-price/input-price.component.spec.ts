import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPriceComponent } from './input-price.component';

describe('InputPriceComponent', () => {
  let component: InputPriceComponent;
  let fixture: ComponentFixture<InputPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputPriceComponent]
    });
    fixture = TestBed.createComponent(InputPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
