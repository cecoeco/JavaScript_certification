function diffArray(arr1, arr2) {
  const combinedArray = arr1.concat(arr2);

  const symmetricDifference = combinedArray.filter((element) => {
    return !arr1.includes(element) || !arr2.includes(element);
  });

  return symmetricDifference;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);