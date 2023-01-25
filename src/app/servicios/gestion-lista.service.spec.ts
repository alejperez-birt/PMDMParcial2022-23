import { TestBed } from '@angular/core/testing';

import { GestionListaService } from './gestion-lista.service';

describe('GestionListaService', () => {
  let service: GestionListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
