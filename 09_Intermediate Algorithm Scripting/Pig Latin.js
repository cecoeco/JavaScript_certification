function translatePigLatin(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.includes(str[0])) {
    return str + 'way';
  } else {
    let consonantCluster = '';
    let i = 0;
    while (i < str.length && !vowels.includes(str[i])) {
      consonantCluster += str[i];
      i++;
    }
    return str.slice(i) + consonantCluster + 'ay';
  }
}

translatePigLatin("consonant");