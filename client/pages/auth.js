import React, {useState} from "react";
import ss from "@/styles/Auth.module.scss";
import {withLayoutPages} from "@/hoc/layouts/pages/layout_pages";
import Login from "@/Components/Auth/Login/Login";
import Register from "@/Components/Auth/Register/Register";
import Head from "next/head";
import SEOClass from "@/sublimates/SEO/SEOClass";



const seo = new SEOClass();

const Auth = () => {

    const [auth, setAuth] = useState(true);

    return (
        <>
            <Head>
                <title>Auth</title>
                {seo.disable_page_index()}
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={ss.auth}>
                {
                    auth
                    ? <Login setAuth={setAuth} />
                    : <Register setAuth={setAuth} />
                }
            </div>
        </>
    );
};

export default withLayoutPages(Auth);