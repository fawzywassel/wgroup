import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyFeedbacksComponent } from './w-property-feedbacks.component';

describe('WPropertyFeedbacksComponent', () => {
  let component: WPropertyFeedbacksComponent;
  let fixture: ComponentFixture<WPropertyFeedbacksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyFeedbacksComponent]
    });
    fixture = TestBed.createComponent(WPropertyFeedbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
