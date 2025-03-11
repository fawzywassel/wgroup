import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGroupHiringComponent } from './w-group-hiring.component';

describe('WGroupHiringComponent', () => {
  let component: WGroupHiringComponent;
  let fixture: ComponentFixture<WGroupHiringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WGroupHiringComponent]
    });
    fixture = TestBed.createComponent(WGroupHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
