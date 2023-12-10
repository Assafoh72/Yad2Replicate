import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRoomsNumberComponent } from './input-rooms-number.component';

describe('InputRoomsNumberComponent', () => {
  let component: InputRoomsNumberComponent;
  let fixture: ComponentFixture<InputRoomsNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputRoomsNumberComponent]
    });
    fixture = TestBed.createComponent(InputRoomsNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
