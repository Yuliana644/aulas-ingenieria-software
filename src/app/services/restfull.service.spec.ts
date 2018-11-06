import { TestBed, inject } from '@angular/core/testing';

import { RestfullService } from './restfull.service';

describe('RestfullService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestfullService]
    });
  });

  it('should be created', inject([RestfullService], (service: RestfullService) => {
    expect(service).toBeTruthy();
  }));
});
