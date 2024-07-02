import { TestBed } from '@angular/core/testing';

import { MakepizzaService } from './makepizza.service';

describe('MakepizzaService', () => {
  let service: MakepizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakepizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
