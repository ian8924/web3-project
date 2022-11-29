import React, { useState } from "react";
// import Image from 'next/dist/client/image';
import { useRouter } from "next/router";
import { Center, Flex, Image, Box, useDisclosure } from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import HeaderButton from "./HeaderButton";
import NoSSRWrapper from "../NoSSRWrapper";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Desktop() {
  const router = useRouter();
  const { address } = useAccount();

  const goPage = (page) => {
    if (page !== "/") {
      if (!address) {
        alert("請先連結錢包");
        return;
      }
    }
    router.push(page);
  };

  return (
    <>
      <Flex
        gap={{ base: "1", sm: "3" }}
        align="center"
        onClick={() => goPage("/")}
        cursor={"pointer"}
      >
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
          // display={{ base: "none", sm: "block" }}
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
          <HeaderButton title="My NFTs" onClick={() => goPage("/profile")} />
        </Center>
        <Center>
          <HeaderButton title="ShowRoom" onClick={() => goPage("/show")} />
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
