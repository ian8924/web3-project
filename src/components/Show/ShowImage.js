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
      width={"500px"}
      height={"500px"}
      borderRadius="50%"
      border={"10px solid #222"}
      position="relative"
      overflow="hidden"
      bgImg={bgImgSrc}
      bgSize="contain"
    >
      {/* 特效 */}
      <Box width="100%" height="100%" bgImg={effectImgSrc} bgSize="contain">
        {/* 身體 */}
        <Image position="absolute" src={bodyImgSrc} height="500px" />
        {/* 配件 */}
        <Image position="absolute" src={decorationImgSrc} height="500px" />
        {/* 眼睛 */}
        <Image position="absolute" src={eyeImgSrc} height="500px" />
        {/* 球 */}
        <Image
          position="absolute"
          src={ballImgSrc}
          height="100px"
          left="100px"
          top="30px"
        />
      </Box>
    </Box>
  );
}
