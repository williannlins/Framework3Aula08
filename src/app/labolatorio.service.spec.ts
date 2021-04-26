import { TestBed } from '@angular/core/testing';

import { LabolatorioService } from './labolatorio.service';

describe('LabolatorioService', () => {
  let service: LabolatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabolatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
