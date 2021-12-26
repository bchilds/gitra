export const guidMatch =
  '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}';

const s4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

export const newGuid = () => `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
export const isGuid = (stringToCheck) => {
  if (!stringToCheck || typeof stringToCheck !== 'string') {
    return false;
  }
  const match = stringToCheck.match(guidMatch);
  return match && match[0] === stringToCheck;
};
