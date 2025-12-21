import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import Layout from "./components/Layout";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>ZVTC</title>
        <meta name="description" content="Welcome to ZVTC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Google Analytics Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
