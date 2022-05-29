import { useContext, createContext, useReducer } from "react";
import WishlistReducer from "../reducer/wishlist-reducer";
import { initialState } from "./cart-context";

const wishlistContext = createContext();

const WishlistContextProvider = ({children}) => {
    return (
    <wishlistContext.Provider value={useReducer(WishlistReducer, initialState)}>
        {children}
    </wishlistContext.Provider>
)
}
export const useWishlistValue = () => useContext(wishlistContext);

export default WishlistContextProvider;