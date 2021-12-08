import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './features/Counter/reducer';

let rootReducers = combineReducers({
    counter: counterReducer
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;
let store = createStore(rootReducers, composeEnchancer(applyMiddleware(thunk)));  

export default store;