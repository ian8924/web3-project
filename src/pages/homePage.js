import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

export default function homePage() {
  return (
    <div className='body'>
      <Header />
      <Main />
    </div>
  )
}
