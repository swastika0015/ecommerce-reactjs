import { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { cartReducer } from '../reducer/cart-reducer';


const CartContext = createContext();
const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartList: [],
  });

  const value = {cartState, cartDispatch}
  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
        {children}
    </CartContext.Provider>
  )
}

export default { useCartContext, CartContextProvider };

