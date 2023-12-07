function sumAll(arr) {
  const minNum = Math.min(...arr);
  const maxNum = Math.max(...arr);

  let sum = 0;

  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
  }

  return sum;
}
sumAll([1, 4]);
