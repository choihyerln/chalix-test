// 한국 시간으로 변환
export const getKSTISOString = (date: Date) => {
  date.setHours(date.getHours() + 9);
  return date.toISOString();
};

// 형식 변환
export const formatDate = (KSTDate: Date) => {
  return KSTDate.toString().replace("T", " ").split(".")[0];
};
