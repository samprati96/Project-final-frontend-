import { TestBed } from '@angular/core/testing';

import { ValidatedataService } from './validatedata.service';

describe('ValidatedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidatedataService = TestBed.get(ValidatedataService);
    expect(service).toBeTruthy();
  });
});
