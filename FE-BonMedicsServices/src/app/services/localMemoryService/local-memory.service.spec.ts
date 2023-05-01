import { TestBed } from '@angular/core/testing';

import { LocalMemoryService } from './local-memory.service';

describe('LocalMemoryService', () => {
  let service: LocalMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
