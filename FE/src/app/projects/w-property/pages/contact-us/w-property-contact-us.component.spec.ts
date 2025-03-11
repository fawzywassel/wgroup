import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyContactUsComponent } from './w-property-contact-us.component';

describe('WPropertyContactUsComponent', () => {
  let component: WPropertyContactUsComponent;
  let fixture: ComponentFixture<WPropertyContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyContactUsComponent]
    });
    fixture = TestBed.createComponent(WPropertyContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
