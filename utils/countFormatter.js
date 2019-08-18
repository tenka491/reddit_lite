const countFormatter = number => {
  const numberAsString = `${number}`;

  if(numberAsString.length <= 3) {
    return number;
  }
  
  const suffixes = ["", "K", "M", "B", "T"];
  const suffixNum = Math.floor(numberAsString.length / 3);
  const shortValue = parseFloat(
    (suffixNum != 0
      ? number / Math.pow(1000, suffixNum)
      : number
    ).toPrecision(2)
  );

  if (shortValue % 1 != 0) {
    const shortNum = shortValue.toFixed(1);
    return `${shortNum}${suffixes[suffixNum]}`;
  }
  return `${shortValue}${suffixes[suffixNum]}`;
}

export default countFormatter;
