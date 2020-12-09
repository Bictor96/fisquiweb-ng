import { TestBed } from '@angular/core/testing';

import { LabsProviderService } from './labs-provider.service';

describe('LabsProviderService', () => {
  let service: LabsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
