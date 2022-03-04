import { calcHand } from "./funcs";

const FETCH_USER_HAND = "FETCH_USER_HAND";
const HIT_USER = "HIT_USER";
const CLEAR_HAND = "CLEAR_HAND";
const CALC_USER_HAND = "CALC_USER_HAND";

const _fetchUserHand = () => {
  return { type: FETCH_USER_HAND };
};

const _hitUser = (card) => {
  return { type: HIT_USER, card };
};

const _clearHand = () => {
  return { type: CLEAR_HAND };
};

const _calcUserHand = (total) => {
  return { type: CALC_USER_HAND, total };
};

export const fetchUserHand = () => {
  return async (dispatch) => {
    dispatch(_fetchUserHand());
  };
};

export const hitUser = (card) => {
  return async (dispatch) => {
    dispatch(_hitUser(card));
  };
};

export const clearHand = () => {
  return async (dispatch) => {
    dispatch(_clearHand());
  };
};

export const calculateUserHand = (arr) => {
  return async (dispatch) => {
    const total = calcHand(arr);
    dispatch(_calcUserHand(total));
  };
};

export const yourHand = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_HAND:
      return state;
    case HIT_USER:
      state.push(action.card);
      return state;
    case CLEAR_HAND:
      state = [];
      return state;
    default:
      return state;
  }
};

export const yourHandCalc = (state = 0, action) => {
  switch (action.type) {
    case CALC_USER_HAND:
      state = action.total;
      return state;
    default:
      return state;
  }
};
