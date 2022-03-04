import { calcHand, dealerIsUp } from "./funcs";

const FETCH_DEALER_HAND = "FETCH_DEALER_HAND";
const HIT_DEALER = "HIT_DEALER";
const CLEAR_HAND = "CLEAR_HAND";
const CALC_DEALER_HAND = "CALC_DEALER_HAND";
const DEALER_IS_UP = "DEALER_IS_UP";

const _fetchDealerHand = () => {
  return { type: FETCH_DEALER_HAND };
};

const _hitDealer = (card) => {
  return { type: HIT_DEALER, card };
};

const _calcDealerHand = (total) => {
  return { type: CALC_DEALER_HAND, total };
};

const _dealerIsUp = (nextCard, dealerHand, dealerHandTotal) => {
  return { type: DEALER_IS_UP, nextCard, dealerHand, dealerHandTotal };
};

export const fetchDealerHand = () => {
  return async (dispatch) => {
    dispatch(_fetchDealerHand());
  };
};

export const hitDealer = (card) => {
  return async (dispatch) => {
    dispatch(_hitDealer(card));
  };
};

export const calculateDealerHand = (arr) => {
  return async (dispatch) => {
    const total = calcHand(arr);
    dispatch(_calcDealerHand(total));
  };
};

export const dealerIsUpThunk = (nc, deck, dh) => {
  return async (dispatch) => {
    const answer = dealerIsUp(nc, deck, dh);

    dispatch(
      _dealerIsUp(answer.nextCard, answer.dealerHand, answer.dealerHandTotal)
    );
  };
};

export const dealerHand = (state = [], action) => {
  switch (action.type) {
    case FETCH_DEALER_HAND:
      return state;
    case HIT_DEALER:
      state.push(action.card);
      return state;
    case CLEAR_HAND:
      state = [];
      return state;
    case DEALER_IS_UP:
      state = action.dealerHand;
      return state;
    default:
      return state;
  }
};

export const dealerHandCalc = (state = 0, action) => {
  switch (action.type) {
    case CALC_DEALER_HAND:
      state = action.total;
      return state;
    case DEALER_IS_UP:
      state = action.dealerHandTotal;
      return state;
    default:
      return state;
  }
};

export const nextCardAfterDealer = (state = 0, action) => {
  switch (action.type) {
    case DEALER_IS_UP:
      state = action.nextCard - 1;
      return state;
    default:
      return state;
  }
};
