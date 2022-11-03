import React from "react";
// 背景
import Wave from "./Wave.js";
import { Flex, Spacer, Image } from "@chakra-ui/react";
import arja from "../../assets/svg/arja.png";
import cloud1 from "../../assets/images/clouds/0.png";
import cloud2 from "../../assets/images/clouds/1.png";
import seagull1 from "../../assets/images/seagull/4.png";
import seagull2 from "../../assets/images/seagull/1.png";

export default function Main() {
  return (
    <>
      <div className="container" position="relative">
        {/* cloud 1 */}
        <Image src={cloud1.src} position="absolute" left="0" top="300px" />
        {/* cloud 2 */}
        <Image src={cloud2.src} position="absolute" right="20%" top="300px" />
        {/* cloud 3 */}
        <Image src={cloud2.src} position="absolute" left="15%" top="650px" />
        <Image
          src={seagull2.src}
          position="absolute"
          right="200px"
          top="600px"
        />
        <Image
          width="200px"
          src={seagull2.src}
          position="absolute"
          right="200px"
          top="650px"
        />

        <div className="titles">
          Into The <br />
          <h1 className="strokeText" data-storke="Arjaverse!" id="title">
            Arjaverse!
          </h1>
        </div>
        {/* sun */}
        <Flex className="sun" alignItems="center" justifyContent="center">
          <div className="sun-content" />
          <Image
            src={seagull1.src}
            position="absolute"
            left="150px"
            top="50px"
          />
          <Image
            width="180px"
            src={seagull1.src}
            position="absolute"
            left="40px"
            top="110px"
          />
        </Flex>
        {/* timer */}
        <Flex
          width="50%"
          height="200px"
          bgColor="#ccc"
          alignItems="center"
          justifyContent="center"
          marginBottom="20px"
          zIndex="20"
        />
        {/* 海豹 */}
        <Image src={arja.src} alt="Dan Abramov" marginBottom="-550px" />
        {/* 海浪 */}
        <Wave />
        <div className="wave-bot"></div>
      </div>
    </>
  );
}
