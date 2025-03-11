import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WArchitectNavbarComponent } from './w-architect-navbar.component';

describe('WArchitectNavbarComponent', () => {
  let component: WArchitectNavbarComponent;
  let fixture: ComponentFixture<WArchitectNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WArchitectNavbarComponent]
    });
    fixture = TestBed.createComponent(WArchitectNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
