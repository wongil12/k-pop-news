import { AuthServiceState } from '@@svc/auth-svc/types';
import { ScheduleServiceState } from '@@svc/schedule-svc/types';

export interface AppState {
  authSvc: AuthServiceState;
  scheduleSvc: ScheduleServiceState;
}
