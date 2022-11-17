import React from "react";
// 背景
import { Flex, Center, Box } from "@chakra-ui/react";
import { useRouter } from "next/router.js";
import Background from "../Background/Background.js";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { motion } from "framer-motion";
//TODO: add animation

export default function Main() {
  const router = useRouter();
  const goPage = (page) => {
    router.push(page);
  };
  // test push
  return (
    <Background>
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
        mt="80px"
        zIndex="20"
      >
        {/* <button
          className="bg-[#FAC92E] p-3 w-full h-full rounded-md"
          onClick={() => goPage("/mint")}
        >
          <Center className="text-[#425673] text-2xl font-semibold">
            Connect Wallet
          </Center>
        </button> */}
        <div className="btn-connect">
          <ConnectButton />
        </div>
      </Flex>
    </Background>
  );
}
