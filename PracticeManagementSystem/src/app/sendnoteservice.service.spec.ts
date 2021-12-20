import { TestBed } from '@angular/core/testing';

import { SendnoteserviceService } from './sendnoteservice.service';

describe('SendnoteserviceService', () => {
  let service: SendnoteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendnoteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
