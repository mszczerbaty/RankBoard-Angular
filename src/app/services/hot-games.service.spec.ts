import { TestBed } from '@angular/core/testing';

import { HotGamesService } from './hot-games.service';

describe('HotGamesService', () => {
  let service: HotGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
