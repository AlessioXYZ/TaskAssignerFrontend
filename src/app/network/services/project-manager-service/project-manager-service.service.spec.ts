import { TestBed } from '@angular/core/testing';

import { ProjectManagerServiceService } from './project-manager-service.service';

describe('ProjectManagerServiceService', () => {
  let service: ProjectManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
