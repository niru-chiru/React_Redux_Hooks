import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import rootReducer from '../reducer/index';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;