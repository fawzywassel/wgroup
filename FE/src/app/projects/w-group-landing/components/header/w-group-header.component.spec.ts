import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGroupHeaderComponent } from './w-group-header.component';

describe('WGroupHeaderComponent', () => {
  let component: WGroupHeaderComponent;
  let fixture: ComponentFixture<WGroupHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WGroupHeaderComponent]
    });
    fixture = TestBed.createComponent(WGroupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
