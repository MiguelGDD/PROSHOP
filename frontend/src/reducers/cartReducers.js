import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstans"

export const cartReducer = (state = { cardItems: [] }, action) => {

    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload

            const existItem = state.cardItems.find(x => x.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cardItems: state.cardItems.map((x) => x.product === existItem.product ? item : x)
                }

            } else {

                return {
                    ...state,
                    cardItems: [...state.cardItems, item]
                }
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cardItems: state.cardItems.filter((x) => x.product !== action.payload)
            }
        default:
            return state
    }
}