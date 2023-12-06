function chunkArrayInGroups(arr, size) {
  let result = [];
  
  for (let i = 0; i < arr.length; i += size) {

    let chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);