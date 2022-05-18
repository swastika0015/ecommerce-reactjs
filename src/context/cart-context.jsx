import { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { cartReducer } from '../reducer/cart-reducer';

export const initialState = {
	cartList: [],
};

const CartContext = createContext();

const CartContextProvider = ({children}) => {
  return (
    <CartContext.Provider value={useReducer(cartReducer, initialState)}>
        {children}
    </CartContext.Provider>
  )
}

export const useStateValue = () => useContext(CartContext);

export default CartContextProvider;

