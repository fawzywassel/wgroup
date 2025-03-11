import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGroupNewsComponent } from './w-group-news.component';

describe('WGroupNewsComponent', () => {
  let component: WGroupNewsComponent;
  let fixture: ComponentFixture<WGroupNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WGroupNewsComponent]
    });
    fixture = TestBed.createComponent(WGroupNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
