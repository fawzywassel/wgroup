import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WGroupSectionsHeaderComponent } from './w-group-sections-header.component';

describe('WGroupSectionsHeaderComponent', () => {
  let component: WGroupSectionsHeaderComponent;
  let fixture: ComponentFixture<WGroupSectionsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WGroupSectionsHeaderComponent]
    });
    fixture = TestBed.createComponent(WGroupSectionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
