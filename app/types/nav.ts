import { SCREENS } from '@@constants/nav';

export type NavigatorCallback = {
  [SCREENS.MAIN]: undefined;
  [SCREENS.LOGIN]: undefined;
  [SCREENS.HOME]: undefined;
};
