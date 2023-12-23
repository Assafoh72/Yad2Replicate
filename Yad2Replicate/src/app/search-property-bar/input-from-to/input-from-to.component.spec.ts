import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFromToComponent } from './input-from-to.component';

describe('InputFromToComponent', () => {
  let component: InputFromToComponent;
  let fixture: ComponentFixture<InputFromToComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFromToComponent]
    });
    fixture = TestBed.createComponent(InputFromToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
