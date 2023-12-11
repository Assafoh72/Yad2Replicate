import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvenceSearchButtonComponent } from './addvence-search-button.component';

describe('AddvenceSearchButtonComponent', () => {
  let component: AddvenceSearchButtonComponent;
  let fixture: ComponentFixture<AddvenceSearchButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddvenceSearchButtonComponent]
    });
    fixture = TestBed.createComponent(AddvenceSearchButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
