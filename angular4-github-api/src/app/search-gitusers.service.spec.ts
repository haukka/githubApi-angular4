import { TestBed, inject } from '@angular/core/testing';

import { SearchGitusersService } from './search-gitusers.service';

describe('SearchGitusersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchGitusersService]
    });
  });

  it('should ...', inject([SearchGitusersService], (service: SearchGitusersService) => {
    expect(service).toBeTruthy();
  }));
});
