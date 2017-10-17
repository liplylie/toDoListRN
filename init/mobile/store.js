import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
//import promise from 'redux-promise-middleware'
import logger from 'redux-logger'

import reducer from './reducers/index'

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducer, middleware); 

export default store; 