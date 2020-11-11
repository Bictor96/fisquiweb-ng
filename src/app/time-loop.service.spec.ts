import { TestBed } from '@angular/core/testing';

import { TimeLoopService } from './time-loop.service';

describe('TimeLoopService', () => {
  let service: TimeLoopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeLoopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
