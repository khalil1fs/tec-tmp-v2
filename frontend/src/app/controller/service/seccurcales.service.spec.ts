import { TestBed } from '@angular/core/testing';
import { SeccurcalesService } from './seccurcales.service';

describe('SeccurcalesService', () => {
  let service: SeccurcalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeccurcalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

