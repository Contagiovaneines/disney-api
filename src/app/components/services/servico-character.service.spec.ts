import { TestBed } from '@angular/core/testing';

import { ServicoCharacterService } from './servico-character.service';

describe('ServicoCharacterService', () => {
  let service: ServicoCharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoCharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
