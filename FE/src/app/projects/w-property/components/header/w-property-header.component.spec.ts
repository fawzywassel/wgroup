import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyHeaderComponent } from './w-property-header.component';

describe('WPropertyHeaderComponent', () => {
  let component: WPropertyHeaderComponent;
  let fixture: ComponentFixture<WPropertyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyHeaderComponent]
    });
    fixture = TestBed.createComponent(WPropertyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
