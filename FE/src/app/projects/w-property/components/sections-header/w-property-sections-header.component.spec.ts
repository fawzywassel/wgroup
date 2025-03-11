import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WPropertySectionsHeaderComponent } from './w-property-sections-header.component';

describe('WPropertySectionsHeaderComponent', () => {
  let component: WPropertySectionsHeaderComponent;
  let fixture: ComponentFixture<WPropertySectionsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WPropertySectionsHeaderComponent]
    });
    fixture = TestBed.createComponent(WPropertySectionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
