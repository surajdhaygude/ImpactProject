import { TestBed } from '@angular/core/testing';

import { HospitalmanagementService } from './hospitalmanagement.service';

describe('HospitalmanagementService', () => {
  let service: HospitalmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
