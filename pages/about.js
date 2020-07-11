import React, {useContext} from 'react';
import Head from 'next/head'
import {GlobalDataContext} from "../src/context/GlobalData";

export default function Home() {

    const {cities} = useContext(GlobalDataContext);

    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1 className="title">
                    ABOUT
                </h1>
                <hr/>
                <br/>
                <p>CITIES FROM CONTEXT:</p>
                <ul>
                    {
                        cities.map(city => (
                            <li key={city.id}>
                                {city.title}
                            </li>
                        ))
                    }
                </ul>
            </main>
        </div>
    )
}
