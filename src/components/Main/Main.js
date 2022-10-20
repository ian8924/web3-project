import React from 'react';
import ImageBgMain from '../../assets/images/bg-main.png';
import { Box, Center } from '@chakra-ui/react';

export default function Main() {
  return (
    <>
      <Box className="section-main">
        <div className="bg-cover desktop">
          <div className="ImageBgMain-cont">
            <img src={ImageBgMain.src} width="100%" height="100%" alt="ImageBgMain" />
          </div>
        </div>
        <div className="content">
          <Center>
            <h1>
              Web3 <br />Project
            </h1>
          </Center>
          <div className="ctrls-box">
            <button className="btn-launch" >
              Connect
            </button>

          </div>
        </div>
      </Box>
    </>
  );
}
