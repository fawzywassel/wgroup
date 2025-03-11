import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyFeedbackCardComponent } from './w-property-feedback-card.component';

describe('WPropertyFeedbackCardComponent', () => {
  let component: WPropertyFeedbackCardComponent;
  let fixture: ComponentFixture<WPropertyFeedbackCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyFeedbackCardComponent]
    });
    fixture = TestBed.createComponent(WPropertyFeedbackCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
