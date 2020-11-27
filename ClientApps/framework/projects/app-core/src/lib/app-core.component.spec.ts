import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCoreComponent } from './app-core.component';

describe('AppCoreComponent', () => {
  let component: AppCoreComponent;
  let fixture: ComponentFixture<AppCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
