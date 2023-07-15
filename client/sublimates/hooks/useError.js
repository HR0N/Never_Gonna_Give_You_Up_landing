import {useDispatch, useSelector} from "react-redux";
import {disable_error, new_error} from "@/sublimates/Redux/actions/Error";
import {useEffect, useState} from "react";

function useError(initValue) {

    const dispatch = useDispatch();
    const error = useSelector(state => state.errors.http);

    const setError = (initValue)=>{
        if(initValue){
            dispatch(new_error(initValue));
        }else if(!initValue){
            dispatch(disable_error(false));
        }else{return false;}
    };

    const [value, setValue] = useState(initValue);
    setError(initValue);

    useEffect(() => {
        setValue(error);
    }, [error]);


    return [value, setValue];
}

export { useError };
