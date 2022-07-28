import "@styles/style.css";
import type { AppProps } from "next/app";
import { PastContextProvider } from "../context/PastContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PastContextProvider>
        <Component {...pageProps} />
      </PastContextProvider>
    </>
  );
}

export default MyApp;
