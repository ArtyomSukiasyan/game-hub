export const deleteNumbers = (arr, index) => {
  const random = Math.floor(Math.random() * arr.length);
  if (index < 1) {
    return arr;
  }
  if (arr[random] === 0) {
    return deleteNumbers(arr, index);
  }

  arr[random] = 0;
  return deleteNumbers(arr, index - 1);
};
