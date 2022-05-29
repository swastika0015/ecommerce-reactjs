import { Action } from "history";

export const initialState = {
    wishlist : ['hh','hjh'],
};

function WishlistReducer(state, action){
    switch(action.type){
        case 'ADD_TO_WISHLIST':

        break;
        case 'REMOVE_FROM_WISHLIST':

        break;
        default:
            return state;
    }
}

export default WishlistReducer;