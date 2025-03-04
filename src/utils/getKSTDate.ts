// 한국 시간
export const getKSTISOString = (date: Date) => {
  date.setHours(date.getHours() + 9);
  return date.toISOString();
};
