import React from "react";
import ss from "./Register.module.scss";
import InputClass from "@/sublimates/Input/InputClass";
import ValidatorClass from "@/sublimates/Validator/ValidatorClass";
import FormSerializeClass from "@/sublimates/FormSerialize/FormSerializeClass";
import {useError} from "@/sublimates/hooks/useError";
import ServerClass from "@/sublimates/Server/ServerClass";
import PopupClass from "@/sublimates/Popup/PopupClass";
import AuthClass from "@/sublimates/Auth/AuthClass";
import {useRouter} from "next/router";
import ErrorsClass from "@/sublimates/Errors/ErrorsClass/ErrorsClass";


const input = new InputClass();
const validate = new ValidatorClass();
const serialize = new FormSerializeClass();
const server = new ServerClass();
const pop = new PopupClass();
const auth = new AuthClass();
const errorsClass = new ErrorsClass();


const Register = (props) => {

    const email    = input.init("");
    const username = input.init("");
    const pass     = input.init("");
    const pass2    = input.init("");

    const router = useRouter();
    const [error, setError] = useError(false);


    const submit = (e) => {
        e.preventDefault();
        if(!email.error && !username.error && !pass.error && !pass2.error){
            const data = serialize.trim_values(e);
            server.registration(data,
                (res)=>{setError(res);},
                (res) => {
                auth.authentication(res.data);
                setTimeout(() => {router.push('/emailVerify/pleaseVerifyEmail')}, 150);
            });
        }
    };


    return (
        <>
            <div className={`${ss.register}`}>

                {error && <div className={`${ss.auth_error}`}>{errorsClass.error(error?.request?.status).description}</div>}

                <div>
                    <h3>Registration form</h3>
                    <form className={`form-group`} onSubmit={e => {submit(e)}}>

                        <label>{/*  ..:: label 1 ::..*/}
                            <span className={`${ss.validate_error}`}>{(email.touched && email.error) && email.errorsDescription}</span>
                            <input
                                onChange={(e)=>{email.onChange(e)}}
                                value={email.val}
                                onBlur={(e)=>{email.onBlur(e)}}
                                className={`form-control`} type="email" placeholder={`email`} name={`email`}/>
                        </label>


                        <label>{/*  ..:: label 2 ::..*/}
                            <span className={`${ss.validate_error}`}>{(username.touched && username.error) && username.errorsDescription}</span>
                            <input
                                onChange={(e)=>{username.onChangeM(e, validate.username)}}
                                value={username.val}
                                onBlur={(e)=>{username.onBlur(e)}}
                                className={`form-control`} type="text" placeholder={`username`} name={`name`}/>
                        </label>


                        <label>{/*  ..:: label 3 ::..*/}
                            <span className={`${ss.validate_error}`}>{(pass.touched && pass.error) && pass.errorsDescription}</span>
                            <input
                                onChange={(e)=>{pass.onChangeM(e, validate.pas)}}
                                value={pass.val}
                                onBlur={(e)=>{pass.onBlur(e)}}
                                className={`form-control`} type="password" placeholder={`password`} name={`password`}/>
                        </label>


                        <label>{/*  ..:: label 4 ::..*/}
                            <span className={`${ss.validate_error}`}>{(pass2.touched && pass2.error) && pass2.errorsDescription}</span>
                            <input
                                onChange={(e)=>{pass2.onChangeM(e, validate.pas2, pass.val)}}
                                value={pass2.val}
                                onBlur={(e)=>{pass2.onBlur(e)}}
                                className={`form-control`} type="password" placeholder={`confirm password`} name={`password_confirmation`}/>
                        </label>


                        <div className={`${ss.toggle_form}`}>
                            <div className={`${ss.buttons}`}>
                                <div className={`btn`}
                                     onClick={()=>{props.setAuth(true)}}
                                >Sign in</div>
                                <button type={"submit"} className={`btn btn-info`}>Register</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>
            {error && pop.error(error, setError)}
        </>
    );
};

export default Register;