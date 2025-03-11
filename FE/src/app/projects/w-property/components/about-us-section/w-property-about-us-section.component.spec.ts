import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyAboutUsSectionComponent } from './w-property-about-us-section.component';

describe('WPropertyAboutUsSectionComponent', () => {
  let component: WPropertyAboutUsSectionComponent;
  let fixture: ComponentFixture<WPropertyAboutUsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyAboutUsSectionComponent],
    });
    fixture = TestBed.createComponent(WPropertyAboutUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
