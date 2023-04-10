/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PelerinsService } from './pelerins.service';

describe('Service: Pelerins.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PelerinsService]
    });
  });

  it('should ...', inject([PelerinsService], (service: PelerinsService) => {
    expect(service).toBeTruthy();
  }));
});
