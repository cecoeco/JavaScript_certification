function uniteUnique(...arrays) {
  const combinedArray = [].concat(...arrays);

  const uniqueSet = new Set(combinedArray);

  const uniqueArray = [...uniqueSet];

  return uniqueArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);