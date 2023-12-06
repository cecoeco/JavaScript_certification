function mutation(arr) {
  let firstStr = arr[0].toLowerCase();
  let secondStr = arr[1].toLowerCase();

  for (let i = 0; i < secondStr.length; i++) {
    if (firstStr.indexOf(secondStr[i]) === -1) {
      return false;
    }
  }

  return true;
}
mutation(["hello", "hey"]);