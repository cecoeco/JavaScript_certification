function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const calculateOrbitalPeriod = (avgAlt) => {
    const semiMajorAxis = earthRadius + avgAlt;
    const orbitalPeriodInSeconds = Math.round(2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / GM));
    return orbitalPeriodInSeconds;
  };

  const resultArray = arr.map(body => {
    const { name, avgAlt } = body;
    const orbitalPeriod = calculateOrbitalPeriod(avgAlt);
    return { name, orbitalPeriod };
  });

  return resultArray;
}
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);