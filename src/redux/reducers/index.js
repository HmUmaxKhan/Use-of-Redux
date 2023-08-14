import { combineReducers } from "redux";
import incre_decre from "./incre_decre";

const rootReducer = combineReducers({
    amount: incre_decre
})

export default rootReducer;