import { TestBed } from '@angular/core/testing';

import { GestionStorageServiceService } from './gestion-storage-service.service';

describe('GestionStorageServiceService', () => {
  let service: GestionStorageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionStorageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
