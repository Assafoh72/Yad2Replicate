import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFromToDropDownComponent } from './input-from-to-drop-down.component';

describe('InputFromToDropDownComponent', () => {
  let component: InputFromToDropDownComponent;
  let fixture: ComponentFixture<InputFromToDropDownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputFromToDropDownComponent]
    });
    fixture = TestBed.createComponent(InputFromToDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
