import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          react context with Next.js
        </h1>

        <div className="grid">
          <a href="/blog" className="card">
            <h3>BLOG &rarr;</h3>
            <p>navigate to blog page</p>
          </a>
          <a href="/about" className="card">
            <h3>ABOUT &rarr;</h3>
            <p>navigate to about us page</p>
          </a>

        </div>
      </main>
    </div>
  )
}
