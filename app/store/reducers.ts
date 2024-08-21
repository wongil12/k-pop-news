import { combineReducers } from 'redux';
import authSvc from '@@svc/auth-svc/reducer';
import scheduleSvc from '@@svc/schedule-svc/reducer';

export const rootReducers = combineReducers({
  authSvc,
  scheduleSvc,
});
