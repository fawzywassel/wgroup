import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGroupNavbarComponent } from './w-group-navbar.component';

describe('WGroupNavbarComponent', () => {
  let component: WGroupNavbarComponent;
  let fixture: ComponentFixture<WGroupNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WGroupNavbarComponent]
    });
    fixture = TestBed.createComponent(WGroupNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
