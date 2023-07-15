import React from "react";
import {useSelector} from "react-redux";
import PopupEngineClass from "@/sublimates/Popup/PopupEngineClass";
import {useError} from "@/sublimates/hooks/useError";

const popup = new PopupEngineClass();



export const HocErrors = ({children}) => {

    const error = useSelector(state => state.errors.error);
    const [err, setError] = useError(false);


    return (
        <>
            {children}
            {error && popup.error(error, setError)}
        </>
    );
};