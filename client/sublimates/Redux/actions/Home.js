import {EXAMPLE_FETCH_DATA, REFRESH_ALL} from "./actionTypes";

export function refresh_all(payload) {
    return {type: REFRESH_ALL, payload};
}

function store_example_data(payload) {
    return {type: EXAMPLE_FETCH_DATA, payload};
}
export const example_fetch_data = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {dispatch(store_example_data(json))});
    }
};