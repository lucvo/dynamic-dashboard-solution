import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantCoreComponent } from './tenant-core.component';

describe('TenantCoreComponent', () => {
  let component: TenantCoreComponent;
  let fixture: ComponentFixture<TenantCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
