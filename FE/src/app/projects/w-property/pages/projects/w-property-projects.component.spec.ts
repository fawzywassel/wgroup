import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyProjectsComponent } from './w-property-projects.component';

describe('WPropertyProjectsComponent', () => {
  let component: WPropertyProjectsComponent;
  let fixture: ComponentFixture<WPropertyProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyProjectsComponent]
    });
    fixture = TestBed.createComponent(WPropertyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
