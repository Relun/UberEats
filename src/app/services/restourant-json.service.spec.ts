import { TestBed } from '@angular/core/testing';

import { RestourantJsonService } from './restourant-json.service';

describe('RestourantJsonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestourantJsonService = TestBed.get(RestourantJsonService);
    expect(service).toBeTruthy();
  });
});
