import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import auth from "./auth_store";

const { users } = require("./users_store");
const { deck } = require("./deck_store");
const {
  userTurn,
  dealerTurn,
  handHasBeenDealt,
  handIsOver,
  nextHandHasStarted,
  gameMessage,
  gameMessageWasRelayed,
  nextHandIsReady,
} = require("./game_store");
const {
  dealerHand,
  dealerHandCalc,
  nextCardAfterDealer,
} = require("./dealer_hand_store");
const { yourHand, yourHandCalc } = require("./your_hand_store");

const reducer = combineReducers({
  auth,
  users,
  deck,
  dealerHand,
  yourHand,
  yourHandCalc,
  userTurn,
  dealerTurn,
  dealerHandCalc,
  handHasBeenDealt,
  nextCardAfterDealer,
  handIsOver,
  nextHandHasStarted,
  gameMessage,
  gameMessageWasRelayed,
  nextHandIsReady,
});
const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth_store";
export * from "./users_store";
export * from "./deck_store";
export * from "./game_store";
export * from "./dealer_hand_store";
export * from "./your_hand_store";
export * from "./funcs";
