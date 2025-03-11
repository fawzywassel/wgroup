import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGroupLandingComponent } from './w-group-landing.component';

describe('WGroupLandingComponent', () => {
  let component: WGroupLandingComponent;
  let fixture: ComponentFixture<WGroupLandingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WGroupLandingComponent]
    });
    fixture = TestBed.createComponent(WGroupLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
