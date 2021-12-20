import { TestBed } from '@angular/core/testing';

import { AllergyserviceService } from './allergyservice.service';

describe('AllergyserviceService', () => {
  let service: AllergyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllergyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
