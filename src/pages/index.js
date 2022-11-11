import Head from 'next/head';
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import Logo from "../../src/assets/images/logo.ico";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Arjaverse!</title>
        <link rel="icon" href={ Logo.src } />
      </Head>
      <div className="app">
        <Header />
        <Main />
      </div>
    </>
  )
}
