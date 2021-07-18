export const getDaysLeft = (validDateArg: string | number | Date) => {
  const dDay = Number(new Date(validDateArg));

  let result;
  try {
    result = Math.floor(new Date(dDay - Number(new Date())).getTime() / 1000 / 60 / 60 / 24);

    if (result < 0) {
      result = '00';
    }
  } catch (e) {
    result = '00';
  }
  return result;
};
