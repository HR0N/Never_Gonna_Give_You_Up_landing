import React from "react";
import ss from "./layout_pages.module.scss"
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import {Provider, useDispatch} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "@/sublimates/Redux/reducers/rootReducer";
import thunk from "redux-thunk";
import {new_error} from "@/sublimates/Redux/actions/Error";


const store = createStore(rootReducer, applyMiddleware(thunk));


export const LayoutPages = ({children}) => {
    return (
        <Provider store={store}>
            <Header/>
            <div className={ss.layout_pages}>
                {children}
            </div>
            <Footer/>
        </Provider>
    );
};



export const withLayoutPages = (Component) => {
    return function (props) {
        return (
            <LayoutPages>
                <Component {...props}/>
            </LayoutPages>
        );
    }
};