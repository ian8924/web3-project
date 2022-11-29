import React from "react";
// 背景
import { Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/router.js";
import Background from "../Background/Background.js";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import WaveButton from "../Button/WaveButton/WaveButton";
import { useAccount } from "wagmi";
import NoSSRWrapper from "../NoSSRWrapper";
import { motion } from "framer-motion";
//TODO: add animation

export default function Main() {
  const { isConnected, address } = useAccount();
  const router = useRouter();
  const goPage = (page) => {
    router.push(page);
  };

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

      <NoSSRWrapper>
        {address ? (
          <>
            <Flex
              width="100%"
              height="100px"
              justifyContent="center"
              bgColor="transparent"
              mt={{ base: "35px", sm: "80px" }}
              zIndex="20"
            />
          </>
        ) : (
          <Flex
            width="100%"
            height="100px"
            justifyContent="center"
            bgColor="transparent"
            mt={{ base: "35px", sm: "80px" }}
            zIndex="20"
          >
            <div className="btn-connect">
              <ConnectButton />
            </div>
          </Flex>
        )}
        {address ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            marginTop={{ base: "5px", sm: "30px" }}
            marginBottom={{ base: "20px", sm: "100px" }}
          >
            <Box
              gap="4"
              width={{ base: "80%", sm: "80%" }}
              display={{ base: "flex", sm: "80px" }}
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent="center"
            >
              <WaveButton fun={() => goPage("/profile")}>My NFT</WaveButton>
              <WaveButton fun={() => goPage("/mint")}>Go To Mint</WaveButton>
              <Box display={{ base: "flex", sm: "none" }}>
                <WaveButton fun={() => goPage("/mint")}>Show Room</WaveButton>
              </Box>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </NoSSRWrapper>
    </Background>
  );
}
