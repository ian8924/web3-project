
import React from "react";
import '../styles/globals.scss';
import '../styles/homePage.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;