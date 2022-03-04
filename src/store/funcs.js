const calcHand = (arr) => {
  const calcObj = {
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    J: 10,
    Q: 10,
    K: 10,
    A: 11,
  };

  let aceCount = null;
  let total, testingTotal1, testingTotal2;

  let aceUsed = false;

  arr.map((card) => {
    card.slice(0, card.length - 1) === "A" && aceCount++;
  });

  if (!arr) {
    return 0;
  }

  if (!aceCount) {
    total = arr
      .map((card) => {
        const valueText = card.slice(0, card.length - 1);
        return calcObj[valueText];
      })
      .reduce((a, b) => a + b);
  } else if (aceCount === 1) {
    testingTotal1 = arr
      .map((card) => {
        const valueText = card.slice(0, card.length - 1);

        if (valueText === "A") {
          if (!aceUsed) {
            aceUsed = true;
            return calcObj[valueText];
          } else {
            return 1;
          }
        }

        return calcObj[valueText];
      })
      .reduce((a, b) => a + b);

    if (testingTotal1 > 21) {
      total = arr
        .map((card) => {
          const valueText = card.slice(0, card.length - 1);

          if (valueText === "A") {
            if (!aceUsed) {
              aceUsed = true;
              return calcObj[valueText];
            } else {
              return 1;
            }
          }

          return calcObj[valueText];
        })
        .reduce((a, b) => a + b);
    } else {
      total = testingTotal1;
    }
  } else {
    testingTotal1 = arr
      .map((card) => {
        const valueText = card.slice(0, card.length - 1);

        if (valueText === "A") {
          if (!aceUsed) {
            aceUsed = true;
            return calcObj[valueText];
          } else {
            return 1;
          }
        }

        return calcObj[valueText];
      })
      .reduce((a, b) => a + b);

    if (testingTotal1 > 21) {
      aceUsed = false;
      testingTotal2 = arr
        .map((card) => {
          const valueText = card.slice(0, card.length - 1);

          if (valueText === "A") {
            if (!aceUsed) {
              aceUsed = true;
              return calcObj[valueText];
            } else {
              return 1;
            }
          }

          return calcObj[valueText];
        })
        .reduce((a, b) => a + b);

      if (testingTotal2 > 21) {
        total = arr
          .map((card) => {
            const valueText = card.slice(0, card.length - 1);

            return valueText === "A" ? 1 : calcObj[valueText];
          })
          .reduce((a, b) => a + b);
      } else {
        total = testingTotal2;
      }
    } else {
      total = testingTotal1;
    }
  }

  return total;
};

const dealerIsUp = (nc, deck, dh) => {
  let nextCard = nc;

  let dealerHand = dh;

  let dealerHandTotal = calcHand(dealerHand);

  while (dealerHandTotal < 17) {
    dealerHand.push(deck[nextCard]);
    nextCard++;
    dealerHandTotal = calcHand(dealerHand);
  }

  return {
    nextCard,
    dealerHand,
    dealerHandTotal,
  };
};

module.exports = {
  calcHand,
  dealerIsUp,
};
