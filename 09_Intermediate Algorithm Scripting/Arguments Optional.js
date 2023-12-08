function addTogether() {
  const a = arguments[0];
  const b = arguments[1];

  if (typeof a === 'number') {
    if (arguments.length === 2) {
      if (typeof b === 'number') {
        return a + b;
      } else {
        return undefined;
      }
    } else {
      return (arg) => {
        if (typeof arg === 'number') {
          return a + arg;
        } else {
          return undefined;
        }
      };
    }
  } else {
    return undefined;
  }
}

addTogether(2,3);