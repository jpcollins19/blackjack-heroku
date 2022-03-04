const USERS_TURN = "USERS_TURN";
const DEALERS_TURN = "DEALERS_TURN";
const HAND_DEALT = "HAND_DEALT";
const HAND_OVER = "HAND_OVER";
const NEXT_HAND_STARTED = "NEXT_HAND_STARTED";
const GAME_MESSAGE = "GAME_MESSAGE";
const GAME_MESSAGE_RELAYED = "GAME_MESSAGE_RELAYED";
const NEXT_HAND_READY = "NEXT_HAND_READY";

const _usersTurn = (boolean) => {
  return { type: USERS_TURN, boolean };
};

const _dealersTurn = (boolean) => {
  return { type: DEALERS_TURN, boolean };
};

const _handDealt = (boolean) => {
  return { type: HAND_DEALT, boolean };
};

const _handOver = (boolean) => {
  return { type: HAND_OVER, boolean };
};

const _nextHandStarted = (boolean) => {
  return { type: NEXT_HAND_STARTED, boolean };
};

const _gameMessage = (message) => {
  return { type: GAME_MESSAGE, message };
};

const _gameMessageRelayed = (boolean) => {
  return { type: GAME_MESSAGE_RELAYED, boolean };
};

const _nextHandReady = (boolean) => {
  return { type: NEXT_HAND_READY, boolean };
};

export const usersTurn = (boolean) => {
  return async (dispatch) => {
    dispatch(_usersTurn(boolean));
  };
};

export const dealersTurn = (boolean) => {
  return async (dispatch) => {
    dispatch(_dealersTurn(boolean));
  };
};

export const handDealt = (boolean) => {
  return async (dispatch) => {
    dispatch(_handDealt(boolean));
  };
};

export const handOver = (boolean) => {
  return async (dispatch) => {
    dispatch(_handOver(boolean));
  };
};

export const nextHandStarted = (boolean) => {
  return async (dispatch) => {
    dispatch(_nextHandStarted(boolean));
  };
};

export const setGameMessage = (message) => {
  return async (dispatch) => {
    dispatch(_gameMessage(message));
  };
};

export const gameMessageRelayed = (boolean) => {
  return async (dispatch) => {
    dispatch(_gameMessageRelayed(boolean));
  };
};

export const nextHandReady = (boolean) => {
  return async (dispatch) => {
    dispatch(_nextHandReady(boolean));
  };
};

export const userTurn = (state = false, action) => {
  switch (action.type) {
    case USERS_TURN:
      state = action.boolean;
      return state;
    default:
      return state;
  }
};

export const dealerTurn = (state = false, action) => {
  switch (action.type) {
    case DEALERS_TURN:
      state = action.boolean;
      return state;
    default:
      return state;
  }
};

export const handHasBeenDealt = (state = false, action) => {
  switch (action.type) {
    case HAND_DEALT:
      state = action.boolean;
      return state;
    default:
      return state;
  }
};

export const handIsOver = (state = false, action) => {
  switch (action.type) {
    case HAND_OVER:
      state = action.boolean;
      return state;
    default:
      return state;
  }
};

export const nextHandHasStarted = (state = true, action) => {
  switch (action.type) {
    case NEXT_HAND_STARTED:
      state = action.boolean;
      return state;
    default:
      return state;
  }
};

export const gameMessage = (state = "", action) => {
  switch (action.type) {
    case GAME_MESSAGE:
      state = action.message;
      return state;
    default:
      return state;
  }
};

export const gameMessageWasRelayed = (state = false, action) => {
  switch (action.type) {
    case GAME_MESSAGE_RELAYED:
      state = action.boolean;
      return state;
    default:
      return state;
  }
};

export const nextHandIsReady = (state = false, action) => {
  switch (action.type) {
    case NEXT_HAND_READY:
      state = action.boolean;
      return state;
    default:
      return state;
  }
};
