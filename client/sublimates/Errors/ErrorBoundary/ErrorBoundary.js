import React, {Component} from "react";
import ss from "./ErrorBoundary.module.scss"
import {error} from "next/dist/build/output/log";



export default class ErrorBoundary extends Component{
    constructor() {
        super();

        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            error, errorInfo
        });
        // console.log(error.message);
        // console.log(errorInfo);
    }



    render() {
        if(this.state.hasError){
            return (
                <>
                    <div className={`${ss.errorBoundary}`}>
                        <div className={`${ss.row1}`}>
                            <div className={`${ss.title}`}>
                                <div className={`${ss.error_label}`}>error</div>
                                <span>Oops!</span>
                                <div className={`${ss.img_astronaut}`}> </div>
                            </div>
                            <div className={`${ss.img_earth}`}> </div>
                        </div>
                        <div className={`${ss.description}`}>{this.state.error && this.state.error.message}</div>
                        <div className={`${ss.buttons}`}>
                            <div className={`btn btn-dark`}
                            onClick={() => {location.replace('/')}}
                            >GO HOME PAGE</div>
                        </div>
                    </div>
                </>
            );
        }

        return this.props.children;
    }

}