
//  Writes literals to local storage if the specified key is not present. | [value, setValue]
function useLocalStorage(initialValue, key) {

    const getValue = () => {
        const storage = typeof window !== "undefined" ? localStorage.getItem(key) : false;  // string | null

        if (storage) {return JSON.parse(storage);}  // '[]'
        else{localStorage.setItem(key, JSON.stringify(initialValue));}

        return initialValue;
    };

    const value = getValue();
    const setValue = (val) => {localStorage.setItem(key, JSON.stringify(val));};

    return [value, setValue];
}

export { useLocalStorage };














// Old version. Cant't work with it, because:
// Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

/*import { useState, useEffect } from "react";

//  Writes literals to local storage if the specified key is not present. | [value, setValue]
function useLocalStorage(initialValue, key) {

    const getValue = () => {
        const storage = typeof window !== "undefined" ? localStorage.getItem(key) : false;  // string | null

        if (storage) {return JSON.parse(storage);}  // '[]'

        return initialValue;
    };

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
}

export { useLocalStorage };*/
