import React, {useEffect, useState} from "react";
import ss from "./Login.module.scss"
import InputClass from "@/sublimates/Input/InputClass";
import ValidatorClass from "@/sublimates/Validator/ValidatorClass";
import FormSerializeClass from "@/sublimates/FormSerialize/FormSerializeClass";
import ServerClass from "@/sublimates/Server/ServerClass";
import PopupClass from "@/sublimates/Popup/PopupClass";
import {useError} from "@/sublimates/hooks/useError";
import ErrorsClass from "@/sublimates/Errors/ErrorsClass/ErrorsClass";
import AuthClass from "@/sublimates/Auth/AuthClass";
import RegularClass from "@/sublimates/Regular/RegularClass";


const input = new InputClass();
const validate = new ValidatorClass();
const serialize = new FormSerializeClass();
const server = new ServerClass();
const pop = new PopupClass();
const errorsClass = new ErrorsClass();
const auth = new AuthClass();
const regular = new RegularClass();




const Login = (props) => {

    const email = input.init("");
    const pass  = input.init("");

    const [error, setError] = useError(false);


    const submit = (e) => {
        e.preventDefault();
        if(!email.error && !pass.error){
            const data = serialize.trim_values(e);
            server.login(data,
                (res)=>{setError(res);},
                (res) => {
                auth.authentication(res.data);
                console.log(res);
                regular.redirect_homepage();
            });
        }
    };


    return (
        <>
            <div className={ss.login}>

                {error && <div className={`${ss.auth_error}`}>{errorsClass.error(error?.request?.status).description}</div>}

                <div className="auth-form login-form">
                    <h3>Login form</h3>
                    <form className={`form-group`} onSubmit={(e) => {submit(e);}}>

                        <label><span className={`${ss.validate_error}`}>{(email.touched && email.error) && email.errorsDescription}</span>
                            <input onChange={(e)=>{email.onChangeM(e, validate.email)}}
                                   value={email.val}
                                   onBlur={(e)=>{email.onBlur(e)}}
                                   className={`form-control`} type="email" placeholder={`email`} name={`email`}/>
                        </label>


                        <label><span className={`${ss.validate_error}`}>{(pass.touched && pass.error) && pass.errorsDescription}</span>
                            <input onChange={(e)=>{pass.onChangeM(e, validate.pas)}}
                                   value={pass.val}
                                   onBlur={(e)=>{pass.onBlur(e)}}
                                   className={`form-control`} type="password" placeholder={`password`} name={`password`}/>
                        </label>


                        <div className={`${ss.toggle_form}`}>
                            <div className={`${ss.buttons}`}>
                                <div className={`btn`}
                                     onClick={()=>{props.setAuth(false);}}
                                >Register</div>
                                <button type={"submit"} className={`btn btn-info`}>Login</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            {error && pop.error(error, setError)}
        </>
    );
};

export default Login;