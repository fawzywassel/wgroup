import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyAboutUsComponent } from './w-property-about-us.component';

describe('WPropertyAboutUsComponent', () => {
  let component: WPropertyAboutUsComponent;
  let fixture: ComponentFixture<WPropertyAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyAboutUsComponent]
    });
    fixture = TestBed.createComponent(WPropertyAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
