export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  if (endIndex >= 0) {
    result.splice(endIndex, 0, removed);
  }

  return result;
};
