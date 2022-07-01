export const productsReducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartList: [...state.cartList, { ...action.payload, qty: 1 }],
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartList: state.cartList.filter(
                    (c) => c.id !== action.payload.id
                ),
            }
        case 'INCREMENT_QTY':
            const _cart = state.cartList.find((c) => c.id === action.payload.id)
            const _cartNew = state.cartList.filter(
                (c) => c.id !== action.payload.id
            )
            _cart.qty = parseInt(action.qty)
            return { ...state, cartList: [..._cartNew, { ..._cart }] }

        case 'SET_FILTER':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.type]: action.payload.filter,
                },
            }

        case 'CLEAR_FILTER':
            return {
                ...state,
                filters: {
                    category: '',
                    price: '',
                    color: '',
                    rating: '',
                },
            }
        default:
            return state
    }
}
