import { TestBed } from '@angular/core/testing';

import { MySoulService } from './my-soul.service';

describe('MySoulService', () => {
  let service: MySoulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySoulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
