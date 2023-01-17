export const strictEquals = (firstValue, secondValue) => {
  if (Object.is(firstValue, NaN) && Object.is(secondValue, NaN)) {
    return false;
  }
  if (Object.is(firstValue, -0) && Object.is(secondValue, 0)) {
    return true;
  }
  if (Object.is(firstValue, 0) && Object.is(secondValue, -0)) {
    return true;
  }
  return Object.is(firstValue, secondValue);
};
