/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WorkspaceContainerComponent } from './workspace-container.component';

describe('WorkspaceContainerComponent', () => {
  let component: WorkspaceContainerComponent;
  let fixture: ComponentFixture<WorkspaceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
