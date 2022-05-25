type dataType = { [id: string]: { rate: number } };
type resultType = { average: number; totalRatesNum: number };
type functionType = (data: dataType) => resultType;

export const handleRatingStats: functionType = (data) => {
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
