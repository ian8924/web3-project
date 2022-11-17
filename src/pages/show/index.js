import React from "react";
import { Flex, Center, Box, Image } from "@chakra-ui/react";
import ContentBg from "../../components/Background/ContentBg";
import bgNo from "../../assets/images/bg-noAj.png";
import arjaverse from "../../assets/images/Arjaverse.png";

export default function ShowPage() {
  return (
    <ContentBg src={bgNo.src}>
      <div className="text-black">
        <Center h={"calc(100vh - 80px)"}>
          <Image src={arjaverse.src} height={"50rem"} zIndex="2" />
        </Center>
      </div>
    </ContentBg>
  );
}
