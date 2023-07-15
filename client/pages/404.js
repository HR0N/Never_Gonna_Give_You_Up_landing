import React from "react";
import ss from "@/styles/Page404.module.scss";
import Image from "next/dist/client/legacy/image";
import img_404 from "@/public/media/404/404.webp";
import Link from "next/link";


const Page404 = () => {
    return (
        <>
            <div className={ss.page404}>

                <div className={`${ss.title}`}>404</div>
                <div className={`${ss.description}`}>Page not found</div>

                <div className={`${ss.img}`}>
                    <img src="/media/404/404.webp" alt="404 page"/>
                </div>
                <div className={`${ss.buttons}`}>
                    <Link href={`/`} className="btn btn-outline-dark">go homepage</Link>
                </div>

            </div>
        </>
    );
};

export default (Page404);