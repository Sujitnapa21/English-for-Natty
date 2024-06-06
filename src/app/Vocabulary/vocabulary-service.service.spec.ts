import { TestBed } from '@angular/core/testing';

import { VocabularyServiceService } from './vocabulary-service.service';

describe('VocabularyServiceService', () => {
  let service: VocabularyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocabularyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
