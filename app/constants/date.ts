export const DAY_OF_THE_WEEK = {
  SUN: 0,
  MON: 1,
  TUE: 2,
  WED: 3,
  THU: 4,
  FRI: 5,
  SAT: 6,
} as const;

export const DAY_BY_STRING_KO = {
  [DAY_OF_THE_WEEK.SUN]: '일',
  [DAY_OF_THE_WEEK.MON]: '월',
  [DAY_OF_THE_WEEK.TUE]: '화',
  [DAY_OF_THE_WEEK.WED]: '수',
  [DAY_OF_THE_WEEK.THU]: '목',
  [DAY_OF_THE_WEEK.FRI]: '금',
  [DAY_OF_THE_WEEK.SAT]: '토',
} as const;
