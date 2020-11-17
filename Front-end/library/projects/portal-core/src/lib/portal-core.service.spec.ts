import { TestBed } from '@angular/core/testing';

import { PortalCoreService } from './portal-core.service';

describe('PortalCoreService', () => {
  let service: PortalCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortalCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
