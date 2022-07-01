export const cartReducer = (cartState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...cartState,
                cartList: [
                    ...cartState.cartList,
                    { ...action.payload, qty: 1 },
                ],
            }

        case 'REMOVE_FROM_CART':
            return {
                ...cartState,
                cartList: cartState.cartList.filter(
                    (c) => c.id !== action.payload.id
                ),
            }
        case 'INCREMENT_QTY':
            const _cart = cartState.cartList.find(
                (c) => c.id === action.payload.id
            )
            const _cartNew = cartState.cartList.filter(
                (c) => c.id !== action.payload.id
            )
            _cart.qty = parseInt(action.qty)
            return { ...cartState, cartList: [..._cartNew, { ..._cart }] }
        default:
            return cartState
    }
}
