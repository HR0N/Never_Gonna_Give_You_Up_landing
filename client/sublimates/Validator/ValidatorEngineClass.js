const validator = require('validator');

export default class ValidatorEngineClass {


    isEmail = val => validator.isEmail(val);
    isLength = (val, min, max) => validator.isLength(val, {min, max});
    isPasEquals = (v1, v2) => validator.equals(v1, v2);
    isAlphanumeric = val => validator.isAlphanumeric(val);
    isEmpty = val => validator.isEmpty(val);
    isStrongPassword = ()=>{};
    blacklist = (val, chars) => validator.blacklist(val, chars);
    escape = (val) => validator.escape(val);
    trim = (val, chars) => validator.trim(val, chars);


    isEmailMsg = val => this.isEmail(val) ? '' : "email invalid";
    isLengthMsg = (val, min, max) => this.isLength(val, min, max) ? '' : `diapason: ${min}-${max} symbols`;
    isPasEqualsMsg = (v1, v2) => this.isPasEquals(v1, v2) ? '' : "passwords don't match";
    isAlphanumericMsg = val => validator.isAlphanumeric(val) ? '' : "only letters and numbers";



    email = (value, setError, errors, setErrors, v2) => {
        if(!this.isEmail(value)){
            setError(true);
            setErrors(`email invalid`);
        }else{
            setError(false);
            setErrors(``);
        }
    };


    username = (value, setError, errors, setErrors, v2) => {
        if(!this.isLength(value, 2, 20)){
            setError(true);
            setErrors(`diapason: ${2}-${20} symbols`);
        }else if(!this.isAlphanumeric(value)){
            setError(true);
            setErrors(`only letters and numbers`);
        }else{
            setError(false);
            setErrors(``);
        }
    };


    pas = (value, setError, errors, setErrors, v2) => {
        if(!this.isLength(value, 8, 40)){
            setError(true);
            setErrors(`diapason: ${8}-${40} symbols`);
        }else if(!this.isAlphanumeric(value)){
            setError(true);
            setErrors(`only letters and numbers`);
        }else{
            setError(false);
            setErrors(``);
        }
    };


    pas2 = (value, setError, errors, setErrors, v2) => {
        if(!this.isPasEquals(value, v2)){
            setError(true);
            setErrors(`passwords don't match`);
        }else{
            setError(false);
            setErrors(``);
        }
    };


}