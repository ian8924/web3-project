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
    <div className="bg-white">
      <Flex
        justify="space-between"
        align="center"
        py="2rem"
        px="3rem"
        overflow="hidden"
        shadow={""}
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
    </div>
  );
}
