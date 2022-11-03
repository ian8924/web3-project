import React, { useState } from "react";
// import Image from 'next/dist/client/image';
import { useRouter } from "next/router";
import { Button, ButtonGroup, Center, Flex, Spacer } from "@chakra-ui/react";

export default function Header() {
  const router = useRouter();
  const goPage = (page) => {
    router.push(page);
  };

  return (
    <div className="header">
      <div className="m-2">sssd</div>
      <Flex
        className="m-2"
        justify="space-between"
        align="center"
        py="2rem"
        px="3rem"
        bg="#FFF"
      >
        <Center m={1}>Logo</Center>
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
