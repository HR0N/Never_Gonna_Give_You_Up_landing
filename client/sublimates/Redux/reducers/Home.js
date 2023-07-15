import {REFRESH_ALL, TEMPLATE_02, EXAMPLE_FETCH_DATA} from "@/sublimates/Redux/actions/actionTypes";

const initialState = {
    refresh_all: false,
    template_2: false,
    fetch_data: null,
};

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case REFRESH_ALL: return {...state, refresh_all: action.payload };
        case TEMPLATE_02: return {...state, template_2: action.payload };
        case EXAMPLE_FETCH_DATA: return {...state, fetch_data: action.payload };
        default: return state;
    }
}