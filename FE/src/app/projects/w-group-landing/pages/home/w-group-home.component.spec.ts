import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGroupHomeComponent } from './w-group-home.component';

describe('WGroupHomeComponent', () => {
  let component: WGroupHomeComponent;
  let fixture: ComponentFixture<WGroupHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WGroupHomeComponent]
    });
    fixture = TestBed.createComponent(WGroupHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
