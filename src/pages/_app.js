import React from "react";
import "../styles/globals.scss";
import "../styles/homePage.scss";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const emotionCache = createCache({
  key: "emotion-style",
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
    <CacheProvider value={emotionCache}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  );
}

export default MyApp;
