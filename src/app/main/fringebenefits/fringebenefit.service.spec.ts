import { TestBed } from '@angular/core/testing';

import { FringebenefitService } from './fringebenefit.service';

describe('FringebenefitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FringebenefitService = TestBed.get(FringebenefitService);
    expect(service).toBeTruthy();
  });
});
