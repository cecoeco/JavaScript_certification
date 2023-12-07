function checkCashRegister(price, cash, cid) {
  const currencyUnit = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100,
  };

  let change = cash - price;
  let changeArr = [];

  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  totalCid = totalCid.toFixed(2);

  if (Number(totalCid) < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (Number(totalCid) === change) {
    return { status: "CLOSED", change: cid };
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      const unit = currencyUnit[cid[i][0]];
      const availableAmount = cid[i][1];
      let numberOfUnits = availableAmount / unit;
      let returnedUnits = Math.floor(change / unit);
      let returnedAmount = returnedUnits * unit;

      if (returnedAmount > 0) {
        if (returnedAmount <= availableAmount) {
          changeArr.push([cid[i][0], returnedAmount]);
          change = (change - returnedAmount).toFixed(2);
        } else {
          changeArr.push([cid[i][0], availableAmount]);
          change = (change - availableAmount).toFixed(2);
        }
      }
    }
  }

  if (Number(change) > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    return { status: "OPEN", change: changeArr };
  }
}
