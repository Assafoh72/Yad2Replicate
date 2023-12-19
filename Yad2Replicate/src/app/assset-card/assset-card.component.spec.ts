import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsssetCardComponent } from './assset-card.component';

describe('AsssetCardComponent', () => {
  let component: AsssetCardComponent;
  let fixture: ComponentFixture<AsssetCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsssetCardComponent]
    });
    fixture = TestBed.createComponent(AsssetCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
