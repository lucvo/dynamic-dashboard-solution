import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalCoreComponent } from './portal-core.component';

describe('PortalCoreComponent', () => {
  let component: PortalCoreComponent;
  let fixture: ComponentFixture<PortalCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
