import { TestBed } from '@angular/core/testing';

import { CommentDeactivateGuardService } from './comment-deactivate-guard.service';

describe('CommentDeactivateGuardService', () => {
  let service: CommentDeactivateGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentDeactivateGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
