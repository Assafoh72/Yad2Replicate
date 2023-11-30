import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupLoginSideComponent } from './signup-login-side.component';

describe('SignupLoginSideComponent', () => {
  let component: SignupLoginSideComponent;
  let fixture: ComponentFixture<SignupLoginSideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupLoginSideComponent]
    });
    fixture = TestBed.createComponent(SignupLoginSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
