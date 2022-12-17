import React from "react";
// import Image from 'next/dist/client/image';
import { Center, Flex, Image, Box } from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import HeaderButton from "./HeaderButton";
import NoSSRWrapper from "../NoSSRWrapper";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Desktop(props) {
  const { goPage, ifAddressHasNFT } = props;

  return (
    <>
      <Flex align="center" onClick={() => goPage("/")} cursor={"pointer"}>
        <Image
          src={Logo.src}
          width={{ base: "50px", sm: "60px", md: "auto" }}
          height={{ base: "40px", sm: "auto", md: "auto" }}
        />
        <Box
          className="strokeText"
          data-storke="Arjaverse!"
          id="title"
          lineHeight="25px"
        >
          Arjaverse!
        </Box>
      </Flex>
      <Flex
        className="text-black"
        gap="4"
        justifyContent={"space-evenly"}
        display={{ base: "none", lg: "flex" }}
      >
        <Center>
          <HeaderButton title="Go To Mint" onClick={() => goPage("/mint")} />
        </Center>
        <Center>
          <HeaderButton
            title="My NFTs"
            onClick={() => goPage("/profile")}
            ifAddressHasNFT={ifAddressHasNFT}
          />
        </Center>
        <Center>
          <HeaderButton title="ShowRoom" onClick={() => goPage("/show")} />
        </Center>
        <Center>
          <HeaderButton
            title="Opensea"
            onClick={() => {
              window.open(
                "https://opensea.io/zh-TW/collection/arjaverse-nft",
                "_blank"
              );
            }}
          />
        </Center>
      </Flex>
      <Flex display={{ base: "none", lg: "flex" }}>
        <NoSSRWrapper>
          <ConnectButton chainStatus="icon" />
        </NoSSRWrapper>
      </Flex>
    </>
  );
}
