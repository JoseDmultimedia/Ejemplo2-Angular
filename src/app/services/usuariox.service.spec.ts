import { TestBed } from '@angular/core/testing';

import { UsuarioxService } from './usuariox.service';

describe('UsuarioxService', () => {
  let service: UsuarioxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
