import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {


  return (
    <Layout className="container">
      <Head>
        <title>Random Word</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2>Learn a new word today</h2>
        <p></p>
      </main>


    </Layout>
  )
}
