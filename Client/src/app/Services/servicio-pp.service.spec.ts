import { TestBed } from '@angular/core/testing';

import { ServicioPPService } from './servicio-pp.service';

describe('ServicioPPService', () => {
  let service: ServicioPPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
