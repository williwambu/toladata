import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ActivityService } from './activity.service';

describe('ActivityService', () => {
  let injector: TestBed;
  let service: ActivityService;
  let httpMock: HttpTestingController;
  const activities = [{
    id: 1,
    name: 'Test activity',
    url: 'https://dev-api.toladata.io/api/workflowlevel2/1',
    workflowlevel1: 'https://dev-api.toladata.io/api/workflowlevel1/223/',
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ActivityService],
    });

    injector = getTestBed();
    service = injector.get(ActivityService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getActivities()', () => {
    it('should return an Observable<Activity[]>', () => {
      service.getActivities().subscribe(_activities => {
        expect(_activities.length).toEqual(1);
        expect(_activities).toEqual(activities);
      });

      const request = httpMock.expectOne(service.apiUrl);
      expect(request.request.method).toBe('GET');
      request.flush(activities);
    });
  });

  describe('createActivity()', () => {
    it('should return an Observable<Activity>', () => {
      const activity = {
        id: null,
        name: 'Test activity',
        url: 'https://dev-api.toladata.io/api/workflowlevel2/1',
        workflowlevel1: 'https://dev-api.toladata.io/api/workflowlevel1/223/',
      };
      service.createActivity(activity).subscribe(_activity => {
        expect(_activity.name).toEqual(activity.name);
      });

      const request = httpMock.expectOne(service.apiUrl);
      expect(request.request.method).toBe('POST');
      request.flush(activity);
    });
  });
});
