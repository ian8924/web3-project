import Head from 'next/head';
import React from 'react';
import ImageBgMain from '../../assets/images/bg-main.png';

export default function Main() {
  return (
    <>
      <Head>
        <title>Web3 Project</title>
      </Head>
      <section className="section-main">
        <div className="bg-cover desktop">
          <div className="ImageBgMain-cont">
            {/* <img src={ImageBgMain.src} width="100%" height="100%" alt="ImageBgMain" /> */}
          </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="content">
          <div className="slogan-box">
            <h1>
              Web3 <br />Project
            </h1>

          </div>
          <div className="ctrls-box">
            <button className="btn-launch" >
              Connect
            </button>

          </div>
        </div>
      </section>
    </>
  );
}
