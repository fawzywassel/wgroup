import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertyComponent } from './w-property.component';

describe('WPropertyComponent', () => {
  let component: WPropertyComponent;
  let fixture: ComponentFixture<WPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertyComponent]
    });
    fixture = TestBed.createComponent(WPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
