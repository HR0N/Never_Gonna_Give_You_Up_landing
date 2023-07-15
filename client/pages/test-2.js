import Head from 'next/head'
import React from "react";
import Link from "next/link";
import Test1 from "@/pages/test-1";
import SEOClass from "@/sublimates/SEO/SEOClass";
import Player from "@/Components/Player/Player";

const seo = new SEOClass(true);


/*export const getStaticProps = async () => {
    const res = await fetch('https://api.publicapis.org/entries');
    const data = await res.json();

    return {
        props: data
    };
};*/





export default function Test2() {



    return (
        <>
            <Head>
                <title>title</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <nav>
                    <ul style={{'display':'flex', 'gap':'10px 20px', 'listStyle':'none'}}>
                        <li><Link href={`test-1`}>page_1</Link></li>
                        <li><Link href={`test-2`}>page_2</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Player/>
            </main>
        </>
    )
}