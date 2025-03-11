import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WArchitectHeaderComponent } from './w-architect-header.component';

describe('WArchitectHeaderComponent', () => {
  let component: WArchitectHeaderComponent;
  let fixture: ComponentFixture<WArchitectHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WArchitectHeaderComponent]
    });
    fixture = TestBed.createComponent(WArchitectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
