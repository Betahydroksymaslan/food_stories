type functionType = (string: string, n: number) => string;

export const cutTooLongString: functionType = (string, n) => {
  return string.length > n ? `${string.substr(0, n - 1)}...` : string;
};
