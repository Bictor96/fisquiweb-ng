import { TestBed } from '@angular/core/testing';

import { LabSettingsService } from './lab-settings.service';

describe('LabSettingsService', () => {
  let service: LabSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
