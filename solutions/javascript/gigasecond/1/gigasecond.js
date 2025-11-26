//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const GIGASECOND = 1000000000;
  const CURRENTE_DATE = new Date(date);
  const CURRENTE_DATE_TO_SECOND = Math.floor(CURRENTE_DATE.getTime() / 1000);

  return new Date((CURRENTE_DATE_TO_SECOND + GIGASECOND) * 1000);
};
