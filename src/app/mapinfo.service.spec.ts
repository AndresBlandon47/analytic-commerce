import { TestBed } from '@angular/core/testing';

import { MapinfoService } from './mapinfo.service';

describe('MapinfoService', () => {
  let service: MapinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
