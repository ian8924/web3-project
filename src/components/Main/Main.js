import React from "react";
// 背景
import Wave from "./Wave.js";
import { Flex, Spacer, Image, Box} from "@chakra-ui/react";
import arja from "../../assets/svg/arja.png";
import cloud1 from "../../assets/images/clouds/0.png";
import cloud2 from "../../assets/images/clouds/1.png";
import seagull1 from "../../assets/images/seagull/4.png";
import seagull2 from "../../assets/images/seagull/1.png";

export default function Main() {
  return (
    <>
      <Flex
        className="dashboard"
        height={{ base: "1100px", sm: "1100px", md: "1200px" }}
        position="relative"
        textAlign="center"
        overflow="hidden"
        color="white"
        justifyContent="flex-end"
        alignItems="center"
        background="linear-gradient(180deg,rgba(181, 224, 233, 1) 0%,rgba(206, 226, 214, 1) 100%)"
        flexDirection="column"
      >
        {/* cloud 1 */}
        <Image
          src={cloud1.src}
          position="absolute"
          left="0"
          top={{ base: "30px", sm: "30px", md: "300px" }}
        />
        {/* cloud 2 */}
        <Image
          src={cloud2.src}
          position="absolute"
          right="20%"
          top={{ base: "100px", sm: "100px", md: "300px" }}
        />
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

        <Box
          className="titles"
          fontFamily="Palanquin Dark, sans-serif"
          fontStyle="SemiBold"
          fontSize={{ base: "60px", sm: "60px", md: "120px" }}
          marginTop={{ base: "100px", sm: "100px", md: "200px" }}
          lineHeight={{ base: "70px", sm: "70px", md: "100px" }}
          color="#425673"
          zIndex="3"
        >
          Into The <br />
          <div className="strokeText" data-storke="Arjaverse!" id="title" >
            Arjaverse!
          </div>
        </Box>
        {/* sun */}
        <Flex
          alignItems="center"
          justifyContent="center"
          width={{ base: "300px", sm: "300px", md: "436px" }}
          height={{ base: "300px", sm: "300px", md: "436px" }}
          backgroundColor="rgba(255, 229, 201, .4)"
          borderRadius="50%"
          position="absolute"
          left="10%"
          top="53px"
        >
          <Flex
            width={{ base: "250px", sm: "250px", md: "372px" }}
            height={{ base: "250px", sm: "250px", md: "372px" }}
            borderRadius="50%"
            backgroundColor="rgba(255, 229, 201, 1)"
          />
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
      </Flex>
    </>
  );
}
