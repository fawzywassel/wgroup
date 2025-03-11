import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WArchitectContactUsComponent } from './w-architect-contact-us.component';

describe('WArchitectContactUsComponent', () => {
  let component: WArchitectContactUsComponent;
  let fixture: ComponentFixture<WArchitectContactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WArchitectContactUsComponent]
    });
    fixture = TestBed.createComponent(WArchitectContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
