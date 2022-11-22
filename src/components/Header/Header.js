import React from "react";
// import Image from 'next/dist/client/image';
import { useRouter } from "next/router";
import { Center, Flex, Image, Box } from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import Icons from "../Icons/Icons";
import HeaderButton from "./HeaderButton";
import NoSSRWrapper from "../NoSSRWrapper";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Header() {
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
  const iconStyle = { base: "20px", sm: "25px", md: "35px" };

  return (
    <Flex
      justify="space-between"
      align="center"
      px={{ base: "8px", sm: "2.5rem", md: "2.5rem" }}
      overflow="hidden"
      className="absolute z-50 h-20 w-full bg-white shadow-top"
    >
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
      <Flex className="text-black" gap="4" justifyContent={"space-evenly"}>
        <Center display={{ base: "none", sm: "block" }}>
          <HeaderButton title="Go To Mint" onClick={() => goPage("/mint")} />
        </Center>
        <Center>
          <HeaderButton title="My NFTs" onClick={() => goPage("/profile")} />
        </Center>
        <Center>
          <HeaderButton title="ShowRoom" onClick={() => goPage("/show")} />
        </Center>
      </Flex>
      {/* <Flex justifyContent="flex-end" className="ml-2 w-1/4" gap={6}>
        <Icons id="medium" width={iconStyle} height={iconStyle} />
        <Icons
          id="twitter"
          width={iconStyle}
          height={iconStyle}
          fill="#00acee"
        />
        <Icons
          id="opensea"
          width={iconStyle}
          height={iconStyle}
          fill="rgb(32, 129, 226)"
        />
        <Icons
          id="discord"
          width={iconStyle}
          height={iconStyle}
          fill="#5865F2"
        />
      </Flex> */}
      <NoSSRWrapper>
        <ConnectButton chainStatus="icon" />
      </NoSSRWrapper>
    </Flex>
  );
}
