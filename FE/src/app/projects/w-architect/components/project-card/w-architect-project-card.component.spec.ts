import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WArchitectProjectCardComponent } from './w-architect-project-card.component';

describe('WArchitectProjectCardComponent', () => {
  let component: WArchitectProjectCardComponent;
  let fixture: ComponentFixture<WArchitectProjectCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WArchitectProjectCardComponent]
    });
    fixture = TestBed.createComponent(WArchitectProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
