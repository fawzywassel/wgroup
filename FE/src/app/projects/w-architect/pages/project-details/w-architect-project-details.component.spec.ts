import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WArchitectProjectDetailsComponent } from './w-architect-project-details.component';

describe('WArchitectProjectDetailsComponent', () => {
  let component: WArchitectProjectDetailsComponent;
  let fixture: ComponentFixture<WArchitectProjectDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WArchitectProjectDetailsComponent]
    });
    fixture = TestBed.createComponent(WArchitectProjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
