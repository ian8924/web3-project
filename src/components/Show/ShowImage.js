import React from "react";
import { Image, Box } from "@chakra-ui/react";

export default function ShowImage(props) {
  const {
    bodyImgSrc,
    eyeImgSrc,
    ballImgSrc,
    decorationImgSrc,
    effectImgSrc,
    bgImgSrc,
  } = props;
  return (
    // 背景色
    <Box
      width={{ base: "300px", md: "500px" }}
      height={{ base: "300px", md: "500px" }}
      borderRadius="50%"
      border={"10px solid #425673"}
      position="relative"
      overflow="hidden"
      bgImg={bgImgSrc}
      bgSize="contain"
      boxSizing="content-box"
    >
      {/* 特效 */}
      <Box width="100%" height="100%" bgImg={effectImgSrc} bgSize="contain">
        {/* 身體 */}
        <Image
          position="absolute"
          src={bodyImgSrc}
          height={{ base: "300px", md: "500px" }}
        />
        {/* 配件 */}
        <Image
          position="absolute"
          src={decorationImgSrc}
          height={{ base: "300px", md: "500px" }}
        />
        {/* 眼睛 */}
        <Image
          position="absolute"
          src={eyeImgSrc}
          height={{ base: "300px", md: "500px" }}
        />
        {/* 球 */}
        <Image
          position="absolute"
          src={ballImgSrc}
          height={{ base: "60px", md: "100px" }}
          left={{ base: "50px", md: "100px" }}
          top={{ base: "20px", md: "30px" }}
        />
      </Box>
    </Box>
  );
}
