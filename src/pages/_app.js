import React from "react";
import "../styles/globals.scss";
import "../styles/homePage.scss";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "../components/Header/Header";
import Head from "next/head";

const emotionCache = createCache({
  key: "style",
  prepend: true, // ensures styles are prepended to the <head>, instead of appended
});

const colors = {};
const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "",
        color: "",
        fontFamily: "",
      },
    }),
  },
  colors,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Palanquin+Dark:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={theme}>
          <Header />
          <div className="pt-20">
            <Component {...pageProps} />
          </div>
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
