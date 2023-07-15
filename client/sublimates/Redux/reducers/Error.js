import {NEW_ERROR, DISABLE_ERROR} from "@/sublimates/Redux/actions/actionTypes";

const initialState = {
    http: false,
};

export default function errorReducer(state = initialState, action) {
    switch (action.type) {
        case NEW_ERROR: return {...state, http: action.payload };
        case DISABLE_ERROR: return {...state, http: action.payload };
        default: return state;
    }
}