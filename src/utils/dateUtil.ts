import dayjs from "dayjs";

const getCurrentDate = () => {
  const dateNow = new Date();
  return (
    dateNow.getFullYear() +
    "-" +
    (dateNow.getMonth() + 1) +
    "-" +
    dateNow.getDate()
  );
};

const simpleDateFormat = (val: dayjs.Dayjs) => {
  return val.format("YYYY-MM-DD");
};

export { getCurrentDate, simpleDateFormat };
