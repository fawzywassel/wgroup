import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGroupContactUsComponent } from './w-group-contact-us.component';

describe('WGroupContactUsComponent', () => {
  let component: WGroupContactUsComponent;
  let fixture: ComponentFixture<WGroupContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WGroupContactUsComponent]
    });
    fixture = TestBed.createComponent(WGroupContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
