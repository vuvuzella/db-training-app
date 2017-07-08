import { TestBed, inject } from '@angular/core/testing';

import { RowersService } from './rowers.service';

describe('RowersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RowersService]
    });
  });

  it('should be created', inject([RowersService], (service: RowersService) => {
    expect(service).toBeTruthy();
  }));
});
