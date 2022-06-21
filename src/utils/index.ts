export const convertUnit = (number: number) => {
  return Math.ceil(number / 10000) + '万';
};
