import "@styles/style.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { PastContextProvider } from "../context/PastContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PastContextProvider>
        <Head>
          <title>Diogo Castro's Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="title" content="Diogo Castro's Portfolio" />
          <meta name="description" content="Know more about me" />
          <meta name="keywords" content="portfolio" />
        </Head>
        <Component {...pageProps} />
      </PastContextProvider>
    </>
  );
}

export default MyApp;
