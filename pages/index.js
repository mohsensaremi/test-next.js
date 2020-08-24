import React from 'react';
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

    return (
        <div className="container">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <h1 className="title">
                    react context with Next.js
                </h1>

                <div className="grid">
                    <Link href="/about" prefetch>
                        <a className="card">
                            <h3>ABOUT &rarr;</h3>
                            <p>navigate to about us page</p>
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    )
}
