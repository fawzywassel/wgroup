import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGroupNewsCardComponent } from './w-group-news-card.component';

describe('WGroupNewsCardComponent', () => {
  let component: WGroupNewsCardComponent;
  let fixture: ComponentFixture<WGroupNewsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WGroupNewsCardComponent]
    });
    fixture = TestBed.createComponent(WGroupNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
