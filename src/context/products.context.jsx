import { createContext, useContext } from 'react'
import { useReducer } from 'react'
import productsData from '../productsData'
import { productsReducer } from '../reducer/products.reducer'

export const initialState = {
    cartList: [],
    products: [...productsData],
    filters: {
        category: '',
        price: '',
        color: '',
        rating: '',
    },
}

const ProductsContext = createContext()

const ProductsContextProvider = ({ children }) => {
    return (
        <ProductsContext.Provider
            value={useReducer(productsReducer, initialState)}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useStateValue = () => useContext(ProductsContext)

export default ProductsContextProvider
