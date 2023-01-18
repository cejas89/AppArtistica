
import { CART } from "../../data/cart";
import { ADD_ITEM, REMOVE_ITEM } from "../actions/cart.action";

const INITIAL_STATE = {
    items: CART,
    total: 7000,
}

// const sumTotal = list => {
//     list.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0);
// }

const CartReducer = (state = INITIAL_STATE, action) => {
    
        return state;
    //switch (action.type) {

        //     case ADD_ITEM:
        //         const indexItem = state.items.findIndex(
        //             (item) => item.id === action.item.id
        //         );
        //         if (indexItem === -1) {
        //             const item = { ...action.item, quantity: 1 };
        //             const updateCart = [...state.items, item];
        //             console.log(updateCart);
        //             return { ...state, items: updateCart, total: sumTotal(updateCart) };
        //         }
        //         const items = [...state.items].map((item) => {
        //             if (item.id === action.item.id) item.quantity++;

        //             return item;
        //         });


        // case ADD_ITEM:
        //     console.log(item)
        //     let updateCart = [];
        //     if (state.items.find(item.id === action.item.id)) {
        //         updateCart = state.items.map(item => {
        //             if (item.id === action.item.id) item.quantity++;
        //             return item;
        //         })
        //     } else {
        //         const item = { ...action.item, quantity: 1 };
        //         updateCart = { ...state.items, item }
        //     }

        //     return {
        //         ...state,
        //         items: updateCart,
        //         total: sumTotal(updateCart)
        //     };

        // case REMOVE_ITEM:
        //     const filteredCart = state.items.filter(item => item.id !== action.itemID);
        //     return {
        //         items: filteredCart,
        //         total: sumTotal(filteredCart),
        //     }

        // default:
        //     return state;
  //  }
};

export default CartReducer;