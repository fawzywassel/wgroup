import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertySubmitRequestComponent } from './w-property-submit-request.component';

describe('WPropertySubmitRequestComponent', () => {
  let component: WPropertySubmitRequestComponent;
  let fixture: ComponentFixture<WPropertySubmitRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertySubmitRequestComponent],
    });
    fixture = TestBed.createComponent(WPropertySubmitRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
