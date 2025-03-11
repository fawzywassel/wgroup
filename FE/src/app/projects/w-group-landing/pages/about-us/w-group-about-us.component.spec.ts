import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGroupAboutUsComponent } from './w-group-about-us.component';

describe('WGroupAboutUsComponent', () => {
  let component: WGroupAboutUsComponent;
  let fixture: ComponentFixture<WGroupAboutUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WGroupAboutUsComponent]
    });
    fixture = TestBed.createComponent(WGroupAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
