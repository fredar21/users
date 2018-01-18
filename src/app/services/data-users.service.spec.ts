import { TestBed, inject } from '@angular/core/testing';

import { DataUsersService } from './data-users.service';

describe('DataUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataUsersService]
    });
  });

  it('should be created', inject([DataUsersService], (service: DataUsersService) => {
    expect(service).toBeTruthy();
  }));
});
