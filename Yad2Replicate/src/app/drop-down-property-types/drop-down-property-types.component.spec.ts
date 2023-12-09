import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownPropertyTypesComponent } from './drop-down-property-types.component';

describe('DropDownPropertyTypesComponent', () => {
  let component: DropDownPropertyTypesComponent;
  let fixture: ComponentFixture<DropDownPropertyTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownPropertyTypesComponent]
    });
    fixture = TestBed.createComponent(DropDownPropertyTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
