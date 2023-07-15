import React, {useEffect, useState} from "react";
import ss from "./Header.module.scss"
import Link from "next/link";
import AuthClass from "@/sublimates/Auth/AuthClass";


const auth = new AuthClass();


const Header = () => {

    const [guest, setGuest] = useState(true);


    const logoutHandler = () => {
        auth.log_out();
        setGuest(auth.is_guest());
    };


    useEffect(() => {
        setGuest(auth.is_guest());
    }, []);

    return (
        <>
            <header className={ss.header}>
                <nav>
                    <ul style={{'display': 'flex', 'gap': '10px 20px', 'listStyle': 'none'}}>
                        <li><Link href={`test-1`}>page_1</Link></li>
                        <li><Link href={`test-2`}>page_2</Link></li>
                        {guest
                            ? <li><Link href={`auth`}>Auth</Link></li>
                            :  <li className={`${ss.logout}`}
                                   onClick={logoutHandler}
                                >Logout</li>}
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;