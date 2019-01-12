import { TestBed } from '@angular/core/testing';

import { RestServisService } from './rest-servis.service';

describe('RestServisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestServisService = TestBed.get(RestServisService);
    expect(service).toBeTruthy();
  });
});
