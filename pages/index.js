import React from 'react';
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon"/>
            </Head>

            <main>
                <h1>
                    react context with Next.js
                </h1>

                <div>
                    <Link href="/about">
                        <a>
                            <h3>ABOUT &rarr;</h3>
                            <p>navigate to about us page</p>
                        </a>
                    </Link>
                </div>
            </main>
        </div>
    )
}
