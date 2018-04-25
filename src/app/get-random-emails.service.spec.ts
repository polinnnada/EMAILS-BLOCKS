import { TestBed, inject } from '@angular/core/testing';

import { GetRandomEmailsService } from './get-random-emails.service';

describe('GetRandomEmailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRandomEmailsService]
    });
  });

  it('should be created', inject([GetRandomEmailsService], (service: GetRandomEmailsService) => {
    expect(service).toBeTruthy();
  }));
});
