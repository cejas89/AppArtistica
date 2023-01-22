import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import CategoryReducer from "./reducers/category.reducers";
import ProductReducer from "./reducers/product.reducers"
import CartReducer from "./reducers/cart.reducers";
import OrderReducer from "./reducers/order.reducers";
import AuthReducer from "./reducers/auth.reducers";


const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    orders: OrderReducer,
    auth: AuthReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))