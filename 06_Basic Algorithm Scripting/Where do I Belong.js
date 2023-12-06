function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  let index = 0;
  while (index < arr.length && arr[index] < num) {
    index++;
  }

  return index;
}
getIndexToIns([40, 60], 50);