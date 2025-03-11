import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyHomeComponent } from './w-property-home.component';

describe('WPropertyHomeComponent', () => {
  let component: WPropertyHomeComponent;
  let fixture: ComponentFixture<WPropertyHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyHomeComponent]
    });
    fixture = TestBed.createComponent(WPropertyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
