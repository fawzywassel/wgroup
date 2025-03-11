import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WArchitectComponent } from './w-architect.component';

describe('WArchitectComponent', () => {
  let component: WArchitectComponent;
  let fixture: ComponentFixture<WArchitectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WArchitectComponent]
    });
    fixture = TestBed.createComponent(WArchitectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
