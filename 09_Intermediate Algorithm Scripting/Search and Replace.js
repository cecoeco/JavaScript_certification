function myReplace(str, before, after) {

  if (/^[A-Z]/.test(before[0])) {

    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {

    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  return str.replace(new RegExp(before, 'i'), after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
