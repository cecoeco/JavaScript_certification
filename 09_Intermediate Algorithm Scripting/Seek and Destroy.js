function destroyer(arr, ...args) {
  // Use filter to keep elements that are not present in args
  const filteredArray = arr.filter((element) => !args.includes(element));

  return filteredArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);