import Head from 'next/head';
import constants from '../lib/constants';
import Layout from '../components/Layout';

function HomePage() {
  return (
    <Layout home>
      <Head>
        <title>{constants.siteTitle} | トップページ</title>
      </Head>
      <div>Welcome to Next.js!</div>
    </Layout>
  )
}

export default HomePage;
