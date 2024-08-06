import { AppState } from '@@store/types';
import { useSelector } from 'react-redux';

export const useAppState = <T>(selector: (state: AppState) => T) => {
  return useSelector(selector);
};
