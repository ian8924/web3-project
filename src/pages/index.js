import Head from 'next/head';
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Web3 Project</title>
      </Head>
      <div className="app">
        <Header />
        <Main />
      </div>
    </>
  )
}
