function steamrollArray(arr) {
  const flattenedArray = [];

  function flatten(innerArr) {
    for (let i = 0; i < innerArr.length; i++) {
      if (Array.isArray(innerArr[i])) {
        flatten(innerArr[i]);
      } else {
        flattenedArray.push(innerArr[i]);
      }
    }
  }

  flatten(arr);

  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);