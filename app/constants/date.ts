export const DAY_OF_THE_WEEK = {
  MON: 0,
  TUE: 1,
  WED: 2,
  THU: 3,
  FRI: 4,
  SAT: 5,
  SUN: 6,
} as const;

export const ALL_DAY_OF_THE_WEEK = Object.values(DAY_OF_THE_WEEK);

export const DAY_BY_STRING_KO = {
  [DAY_OF_THE_WEEK.SUN]: '일',
  [DAY_OF_THE_WEEK.MON]: '월',
  [DAY_OF_THE_WEEK.TUE]: '화',
  [DAY_OF_THE_WEEK.WED]: '수',
  [DAY_OF_THE_WEEK.THU]: '목',
  [DAY_OF_THE_WEEK.FRI]: '금',
  [DAY_OF_THE_WEEK.SAT]: '토',
} as const;
