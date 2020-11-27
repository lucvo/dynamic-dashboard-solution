import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdDynamicCoreComponent } from './md-dynamic-core.component';

describe('MdDynamicCoreComponent', () => {
  let component: MdDynamicCoreComponent;
  let fixture: ComponentFixture<MdDynamicCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MdDynamicCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MdDynamicCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
