import {useState} from "react";

export default class InputClass {

    init = (define)=>{
        const [val, setVal] = useState(define);
        const [touched, setTouched] = useState(false);
        const [checked, setChecked] = useState(false);
        const [error, setError] = useState(false);
        const [errorsDescription, setErrorsDescription] = useState('');
        const onChange = e => setVal(this.v(e));
        const setValue = v => setVal(v);
        const onBlur = e => setTouched(true);

        const onChangeM = (e, validate, v2=null) => {   // event, validate method, pass2?
            setVal(this.v(e));
            validate(this.v(e), setError, errorsDescription, setErrorsDescription, v2);
        };


        return {val, touched, error, errorsDescription, onChange, onChangeM, onBlur, setValue}
    };
    v = e => e.target.value
}