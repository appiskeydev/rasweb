import { TestBed } from '@angular/core/testing';

import { MilestoneService } from './milestone.service';

describe('MilestoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MilestoneService = TestBed.get(MilestoneService);
    expect(service).toBeTruthy();
  });
});
