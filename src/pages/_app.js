import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import Layout from "./components/Layout";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

function MyApp({ Component, pageProps }) {
   console.log("GA ID from env:", process.env.NEXT_PUBLIC_GA_ID);
  return (
    <>
      <Head>
        <title>ZVTC</title>
        <meta name="description" content="Welcome to ZVTC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Google Analytics */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />

          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </>
      )}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
