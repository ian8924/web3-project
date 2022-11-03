import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import React from "react";
import "../styles/globals.scss";
import "../styles/homePage.scss";

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
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
