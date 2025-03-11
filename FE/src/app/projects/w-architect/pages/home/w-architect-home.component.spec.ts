import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WArchitectHomeComponent } from './w-architect-home.component';

describe('WArchitectHomeComponent', () => {
  let component: WArchitectHomeComponent;
  let fixture: ComponentFixture<WArchitectHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WArchitectHomeComponent]
    });
    fixture = TestBed.createComponent(WArchitectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
