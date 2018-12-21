import { ProgramsService } from './programs.service';
import { ActivityService } from './activity.service';

export const services: any[] = [ProgramsService, ActivityService];

export * from './programs.service';
export * from './activity.service';
