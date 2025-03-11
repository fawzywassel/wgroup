import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WArchitectSectionsHeaderComponent } from './w-architect-sections-header.component';

describe('WArchitectSectionsHeaderComponent', () => {
  let component: WArchitectSectionsHeaderComponent;
  let fixture: ComponentFixture<WArchitectSectionsHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WArchitectSectionsHeaderComponent]
    });
    fixture = TestBed.createComponent(WArchitectSectionsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
