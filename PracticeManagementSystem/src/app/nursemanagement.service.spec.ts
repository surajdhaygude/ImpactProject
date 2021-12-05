import { TestBed } from '@angular/core/testing';

import { NursemanagementService } from './nursemanagement.service';

describe('NursemanagementService', () => {
  let service: NursemanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NursemanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
