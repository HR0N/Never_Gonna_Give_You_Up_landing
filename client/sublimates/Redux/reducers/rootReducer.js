import {combineReducers} from "redux";
import homeReducer from "@/sublimates/Redux/reducers/Home";
import errorReducer from "@/sublimates/Redux/reducers/Error";

export default combineReducers({
    home: homeReducer,
    errors: errorReducer,

});
