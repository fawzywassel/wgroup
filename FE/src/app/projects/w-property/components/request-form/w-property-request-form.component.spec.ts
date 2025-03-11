import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyRequestFormComponent } from './w-property-request-form.component';

describe('WPropertyRequestFormComponent', () => {
  let component: WPropertyRequestFormComponent;
  let fixture: ComponentFixture<WPropertyRequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyRequestFormComponent]
    });
    fixture = TestBed.createComponent(WPropertyRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
