import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyVideoComponent } from './w-property-video.component';

describe('WPropertyVideoComponent', () => {
  let component: WPropertyVideoComponent;
  let fixture: ComponentFixture<WPropertyVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyVideoComponent]
    });
    fixture = TestBed.createComponent(WPropertyVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
