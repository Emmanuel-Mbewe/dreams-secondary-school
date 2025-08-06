import Head from 'next/head';
import '../styles/globals.css';
import Layout from '@/components/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Secondary School</title>
        <meta name="description" content="Welcome to Secondary School" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;