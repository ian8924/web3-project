import React from "react";
// import Image from 'next/dist/client/image';
import { useRouter } from "next/router";
import { Center, Flex, Image, Box } from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import Icons from "../Icons/Icons";
import HeaderButton from "./HeaderButton";

export default function Header() {
  const router = useRouter();
  const goPage = (page) => {
    router.push(page);
  };
  const iconStyle = { base: "20px", sm: "25px", md: "35px" };

  return (
    <Flex
      justify="space-between"
      align="center"
      px={{ base: "16px", sm: "2.5rem", md: "2.5rem" }}
      overflow="hidden"
      className="absolute z-50 w-full bg-white shadow-top h-20"
    >
      <Flex
        className="w-1/4"
        gap={3}
        align="center"
        onClick={() => goPage("/")}
        cursor={"pointer"}
      >
        <Image
          src={Logo.src}
          width={{ base: "60px", sm: "100px", md: "auto" }}
          height={{ base: "50px", sm: "auto", md: "auto" }}
        />
        <div
          className="strokeText"
          data-storke="Into The Arjaverse!"
          id="title"
        >
          Into The Arjaverse!
        </div>
      </Flex>
      <Flex
        className="w-1/2 text-black"
        gap={5}
        justifyContent={"space-evenly"}
      >
        <Center w="33%">
          <HeaderButton title="Arjaverse" onClick={() => goPage("/mint")} />
        </Center>
        <Center w="33%">
          <HeaderButton title="Profile" onClick={() => goPage("/profile")} />
        </Center>
        <Center w="33%">
          <HeaderButton title="ShowRoom" onClick={() => goPage("/show")} />
        </Center>
      </Flex>
      <Flex justifyContent="flex-end" className="w-1/4 ml-2" gap={6}>
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
      </Flex>
    </Flex>
  );
}
