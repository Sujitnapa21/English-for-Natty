import { TestBed } from '@angular/core/testing';

import { GrammarServiceService } from './grammar-service.service';

describe('GrammarServiceService', () => {
  let service: GrammarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrammarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
