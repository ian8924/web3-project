import React from "react";
// import Image from 'next/dist/client/image';
import { Flex } from "@chakra-ui/react";
import Mobile from "./HeaderMobile";
import Desktop from "./HeaderDesktop";

export default function Header() {
  return (
    <Flex
      justify="space-between"
      align="center"
      px={{ base: "8px", sm: "2.5rem", md: "2.5rem" }}
      overflow="hidden"
      className="absolute z-50 h-20 w-full bg-white shadow-top"
    >
      <Desktop />
      {/* mobile */}
      <Mobile />
    </Flex>
  );
}
