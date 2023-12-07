function whatIsInAName(collection, source) {

  const result = collection.filter((obj) => {

    return Object.keys(source).every((key) => obj.hasOwnProperty(key) && obj[key] === source[key]);
  });

  return result;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });