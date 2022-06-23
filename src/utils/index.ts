import moment from 'moment';

export const convertUnit = (number: number) => {
  return Math.ceil(number / 10000) + '万';
};

export const formatTime = (timeStamp: number | string, format: string) => {
  return moment(timeStamp).format(format);
};
