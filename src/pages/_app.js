import Head from 'next/head';
import '../styles/globals.css';
import Layout from '@/components/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>ZVTC</title>
        <meta name="description" content="Welcome to ZVTC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;