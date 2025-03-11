import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyProjectCardComponent } from './w-property-project-card.component';

describe('WPropertyProjectCardComponent', () => {
  let component: WPropertyProjectCardComponent;
  let fixture: ComponentFixture<WPropertyProjectCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyProjectCardComponent]
    });
    fixture = TestBed.createComponent(WPropertyProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
