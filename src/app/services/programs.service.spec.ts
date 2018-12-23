import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProgramsService } from './programs.service';

describe('ActivityService', () => {
  let injector: TestBed;
  let service: ProgramsService;
  let httpMock: HttpTestingController;
  const programs = [{
    id: 1,
    name: 'Test activity',
    url: 'https://dev-api.toladata.io/api/workflowlevel1/1',
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProgramsService],
    });

    injector = getTestBed();
    service = injector.get(ProgramsService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getPrograms()', () => {
    it('should return an Observable<Program[]>', () => {
      service.getPrograms().subscribe(_programs => {
        expect(_programs.length).toEqual(programs.length);
        expect(_programs).toEqual(programs);
      });

      const request = httpMock.expectOne(service.apiUrl);
      expect(request.request.method).toBe('GET');
      request.flush(programs);
    });
  });
});
