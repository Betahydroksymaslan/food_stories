export const handleRatingStats = (data) => {
  if (!data) return { average: 0, totalRatesNum: 0 };
  let sum = 0;
  let index = 0;

  for (let id in data) {
    sum += data[id].rate;
    index++;
  }
  const result = {
    average: Number((sum / index).toFixed(1)),
    totalRatesNum: index,
  };
  return result;
};
