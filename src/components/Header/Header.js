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
        // bg="black"
        overflow="hidden"
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
        <ButtonGroup gap="2">
          <Button colorScheme="teal">IG</Button>
          <Button colorScheme="teal">Twitter</Button>
          <Button colorScheme="teal">Medium</Button>
          <Button colorScheme="teal">Discord</Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
}
