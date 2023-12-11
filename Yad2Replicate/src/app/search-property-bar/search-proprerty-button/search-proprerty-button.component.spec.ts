import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProprertyButtonComponent } from './search-proprerty-button.component';

describe('SearchProprertyButtonComponent', () => {
  let component: SearchProprertyButtonComponent;
  let fixture: ComponentFixture<SearchProprertyButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchProprertyButtonComponent]
    });
    fixture = TestBed.createComponent(SearchProprertyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
