import { TestBed } from '@angular/core/testing';

import { ProceduriService } from './proceduri.service';

describe('ProceduriService', () => {
  let service: ProceduriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProceduriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
