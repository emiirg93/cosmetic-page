import { TestBed } from '@angular/core/testing';

import { MontoProductoService } from './monto-producto.service';

describe('MontoProductoService', () => {
  let service: MontoProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MontoProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
