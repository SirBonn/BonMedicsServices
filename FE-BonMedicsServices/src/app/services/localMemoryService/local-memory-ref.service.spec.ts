import { TestBed } from '@angular/core/testing';

import { LocalMemoryRefService } from './local-memory-ref.service';

describe('LocalMemoryRefService', () => {
  let service: LocalMemoryRefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalMemoryRefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
