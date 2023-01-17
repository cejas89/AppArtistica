import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers
import CategoryReducer from "./reducers/category.reducers";
import ProductReducer from "./reducers/product.reducers"
import CartReducer from "./reducers/cart.reducers";


const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))