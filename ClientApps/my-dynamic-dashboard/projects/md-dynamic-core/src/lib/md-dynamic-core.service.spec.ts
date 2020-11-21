import { TestBed } from '@angular/core/testing';

import { MdDynamicCoreService } from './md-dynamic-core.service';

describe('MdDynamicCoreService', () => {
  let service: MdDynamicCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdDynamicCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
