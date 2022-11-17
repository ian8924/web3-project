import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import bg from "../../assets/images/bg.png";

export default function ContentBg(props) {
  const { src } = props;
  return (
    <>
      <Flex
        height={{ base: "1100px", sm: "1100px", md: "1200px" }}
        justifyContent="center"
        position="relative"
        overflow="hidden"
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="100%"
        bgImage={src ? src : bg.src}
      >
        {props.children}
      </Flex>
    </>
  );
}
