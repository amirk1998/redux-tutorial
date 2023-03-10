import { combineReducers } from 'redux';
import cakeReducer from './Cake/CakeReducer';
import iceCreamReducer from './Icecream/IceCreamReducer';
import userReducer from './User/userReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export default rootReducer;
