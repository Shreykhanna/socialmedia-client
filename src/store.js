import {createStore,combineReducers,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './redux/reducers/userReducer.js';
import dataReducer from './redux/reducers/dataReducer.js'
import uiReducer from './redux/reducers/uiReducer.js'




const initialState={};
const middleware=[thunk];

//Actual State of Each Reducer
const reducers=combineReducers({
  user:userReducer,
  data:dataReducer,
  UI:uiReducer
});
const store=createStore(reducers,initialState,compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
