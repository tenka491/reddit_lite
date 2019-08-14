const randomI = () => {
  return Math.floor((Math.random() * 61));
};

const uniqueKeyGen = (maxLength = 16) => {
  const possibleValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uniqueKey = '';
  let i = 0;

  while (i < maxLength) {
    const k = possibleValues.charAt(randomI());
    uniqueKey += k;
    i++;
  }

  return uniqueKey;
}

export default uniqueKeyGen;
