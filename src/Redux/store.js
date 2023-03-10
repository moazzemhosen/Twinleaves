import { applyMiddleware, combineReducers, compose, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { AppReducer } from './AppReducer/reducer';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
const rootreducer = combineReducers({
  AppReducer: AppReducer,
});
export const store = legacy_createStore(
  rootreducer,
  composeEnhancers(applyMiddleware(thunk))
);
