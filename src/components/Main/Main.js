import React from "react";
// 背景
import Wave from "./Wave.js";
import { Flex, Center, Image, Box } from "@chakra-ui/react";
import arja from "../../assets/svg/arja.png";
import cloud1 from "../../assets/images/clouds/0.png";
import cloud2 from "../../assets/images/clouds/1.png";
import seagull1 from "../../assets/images/seagull/4.png";
import seagull2 from "../../assets/images/seagull/1.png";
import { useRouter } from "next/router.js";
import Background from "../Background/Background.js";

export default function Main() {
  const router = useRouter();
  const goPage = (page) => {
    router.push(page);
  };


  // test push 
  return (
    <>
      {/* <Flex
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
      > */}
      <Background>
        <>
          <Box
            className="titles"
            fontWeight={"semibold"}
            fontSize={{ base: "60px", sm: "60px", md: "120px" }}
            marginTop={{ base: "100px", sm: "100px", md: "200px" }}
            lineHeight={{ base: "70px", sm: "70px", md: "100px" }}
            color="#425673"
            zIndex="3"
          >
            Into The <br />
            <div className="strokeText" data-storke="Arjaverse!" id="title">
              Arjaverse!
            </div>
          </Box>
          <Flex
            width="30%"
            height="100px"
            bgColor="transparent"
            alignItems="center"
            justifyContent="center"
            mt="80px"
            zIndex="20"
          >
            <button
              className="bg-[#FAC92E] p-3 w-full h-full rounded-md"
              onClick={() => goPage("/mint")}
            >
              <Center className="text-[#425673] text-2xl font-semibold">
                Connect Wallet
              </Center>
            </button>
          </Flex>
        </>
      </Background>
      {/* </Flex> */}
    </>
  );
}
