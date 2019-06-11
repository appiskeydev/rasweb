import { TestBed } from '@angular/core/testing';

import { OpratingcostService } from './opratingcost.service';

describe('OpratingcostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OpratingcostService = TestBed.get(OpratingcostService);
    expect(service).toBeTruthy();
  });
});
