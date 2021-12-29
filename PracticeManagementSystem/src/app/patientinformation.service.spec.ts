import { TestBed } from '@angular/core/testing';

import { PatientinformationService } from './patientinformation.service';

describe('PatientinformationService', () => {
  let service: PatientinformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientinformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
