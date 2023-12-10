import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithIconComponent } from './input-with-icon.component';

describe('InputWithIconComponent', () => {
  let component: InputWithIconComponent;
  let fixture: ComponentFixture<InputWithIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputWithIconComponent]
    });
    fixture = TestBed.createComponent(InputWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
