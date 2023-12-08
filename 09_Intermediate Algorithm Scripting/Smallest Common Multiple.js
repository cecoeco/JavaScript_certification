function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort((a, b) => a - b);

  let result = arr[0];

  for (let i = arr[0] + 1; i <= arr[1]; i++) {
    result = lcm(result, i);
  }

  return result;
}

smallestCommons([1,5]);