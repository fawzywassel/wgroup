import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGroupBrandComponent } from './w-group-brand.component';

describe('WGroupBrandComponent', () => {
  let component: WGroupBrandComponent;
  let fixture: ComponentFixture<WGroupBrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WGroupBrandComponent]
    });
    fixture = TestBed.createComponent(WGroupBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
