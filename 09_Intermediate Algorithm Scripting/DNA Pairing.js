function pairElement(str) {

  const basePairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  const result = str.split("").map(char => [char, basePairs[char]]);

  return result;
}

pairElement("GCG");