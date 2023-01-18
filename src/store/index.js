import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import CategoryReducer from "./reducers/category.reducers";
import ProductReducer from "./reducers/product.reducers"
import CartReducer from "./reducers/cart.reducers";
import OrderReducer from "./reducers/order.reducers";


const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    orders: OrderReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))