import { TestBed } from '@angular/core/testing';

import { CustomerdataService } from './customerdata.service';

describe('CustomerdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerdataService = TestBed.get(CustomerdataService);
    expect(service).toBeTruthy();
  });
});
