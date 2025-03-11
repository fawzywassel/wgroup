import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WArchitectProjectsComponent } from './w-architect-projects.component';

describe('WArchitectProjectsComponent', () => {
  let component: WArchitectProjectsComponent;
  let fixture: ComponentFixture<WArchitectProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WArchitectProjectsComponent]
    });
    fixture = TestBed.createComponent(WArchitectProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
