import { TestBed } from '@angular/core/testing';

import { QualService } from './qual.service';

describe('QualService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QualService = TestBed.get(QualService);
    expect(service).toBeTruthy();
  });
});
