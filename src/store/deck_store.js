const LOAD_DECK = "LOAD_DECK";

const _loadDeck = (deck) => {
  return { type: LOAD_DECK, deck };
};

export const loadDeck = () => {
  return async (dispatch) => {
    const suit = ["S", "C", "H", "D"];
    const cards = [
      "A",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "J",
      "Q",
      "K",
    ];

    const deck = [];

    for (let k = 0; k < 2; k++) {
      for (let i = 0; i < suit.length; i++) {
        for (let j = 0; j < cards.length; j++) {
          const card = `${cards[j]}${suit[i]}`;
          deck.push(card);
        }
      }
    }

    let counter = 0;
    const shuffledDeck = {};

    while (counter < 104) {
      const randomNum = Math.ceil(Math.random() * 104);

      if (!shuffledDeck.hasOwnProperty(randomNum)) {
        shuffledDeck[randomNum] = deck[counter];
        counter++;
      }
    }

    dispatch(_loadDeck(shuffledDeck));
  };
};

export const deck = (state = {}, action) => {
  switch (action.type) {
    case LOAD_DECK:
      return action.deck;
    default:
      return state;
  }
};
