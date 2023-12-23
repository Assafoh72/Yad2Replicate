import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownAssetTypeComponent } from './drop-down-asset-type.component';

describe('DropDownAssetTypeComponent', () => {
  let component: DropDownAssetTypeComponent;
  let fixture: ComponentFixture<DropDownAssetTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropDownAssetTypeComponent]
    });
    fixture = TestBed.createComponent(DropDownAssetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
