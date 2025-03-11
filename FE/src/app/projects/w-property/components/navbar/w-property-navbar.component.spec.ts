import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyNavbarComponent } from './w-property-navbar.component';

describe('WPropertyNavbarComponent', () => {
  let component: WPropertyNavbarComponent;
  let fixture: ComponentFixture<WPropertyNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyNavbarComponent]
    });
    fixture = TestBed.createComponent(WPropertyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
