import { combineReducers } from 'redux';
import authSvc from '@@svc/auth-svc/reducer';

export const rootReducers = combineReducers({
  authSvc,
});
