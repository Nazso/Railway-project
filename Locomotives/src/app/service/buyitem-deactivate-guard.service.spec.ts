import { TestBed } from '@angular/core/testing';

import { BuyitemDeactivateGuardService } from './buyitem-deactivate-guard.service';

describe('BuyitemDeactivateGuardService', () => {
  let service: BuyitemDeactivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyitemDeactivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
