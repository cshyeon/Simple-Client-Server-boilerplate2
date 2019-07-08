import { createStore, combineReducers } from "redux";
import friendReducer from './miniApps/friend/state';

const reducer = combineReducers({
  friend: friendReducer,
});

const store = createStore(reducer);
export default store;
