import React, { useState } from "react";
// import Image from 'next/dist/client/image';
import { useRouter } from "next/router";
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  Image,
  Spacer,
} from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import Icons from "../Icons/Icons";

export default function Header() {
  const router = useRouter();
  const goPage = (page) => {
    router.push(page);
  };

  return (
    <Flex
      justify="space-between"
      align="center"
      px="3rem"
      overflow="hidden"
      className="bg-white shadow-top z-50 absolute w-full h-20"
    >
      <Flex gap={3}>
        <Image src={Logo.src} />
        <div
          className="strokeText "
          data-storke="Into The Arjaverse!"
          id="title"
        >
          Into The Arjaverse!
        </div>
      </Flex>
      <Spacer />
      <Center gap={6}>
        <Icons id={"medium"} width={8} height={8} />
        <Icons id={"telegram"} width={8} height={8} />
        <Icons id={"opensea"} width={8} height={8} fill={""} />
        <Icons id={"discord"} width={8} height={8} />
      </Center>
    </Flex>
  );
}
