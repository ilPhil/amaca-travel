import { configureStore } from '@reduxjs/toolkit/dist/configureStore';
import { cartReducer } from './cart.slice';



const reducer = {
  cart: cartReducer,
};

const store = configureStore({
  reducer,
});


export default store;
