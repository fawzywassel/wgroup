import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WRealEstateComponent } from './w-real-estate.component';

describe('WRealEstateComponent', () => {
  let component: WRealEstateComponent;
  let fixture: ComponentFixture<WRealEstateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WRealEstateComponent]
    });
    fixture = TestBed.createComponent(WRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
