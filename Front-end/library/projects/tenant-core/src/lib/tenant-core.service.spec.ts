import { TestBed } from '@angular/core/testing';

import { TenantCoreService } from './tenant-core.service';

describe('TenantCoreService', () => {
  let service: TenantCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TenantCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
