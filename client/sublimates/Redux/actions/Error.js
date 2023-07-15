import {NEW_ERROR, DISABLE_ERROR} from "./actionTypes";

export function new_error(payload) {
    return {type: NEW_ERROR, payload};
}
export function disable_error(payload) {
    return {type: DISABLE_ERROR, payload};
}