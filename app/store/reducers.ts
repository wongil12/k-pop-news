import { combineReducers } from 'redux';
import authSvcReducer from '@@svc/auth-svc/reducer';

export const rootReducers = combineReducers({
  auth: authSvcReducer,
});
