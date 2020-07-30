import { TestBed } from '@angular/core/testing';

import { WishTransportService } from './wish-transport.service';

describe('WishTransportService', () => {
  let service: WishTransportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishTransportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
