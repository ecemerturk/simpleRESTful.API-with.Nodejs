import { TestBed } from '@angular/core/testing';

import { PersonalInformationService } from './personal-information.service';

describe('PersonalInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalInformationService = TestBed.get(PersonalInformationService);
    expect(service).toBeTruthy();
  });
});
