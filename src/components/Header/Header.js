import React, { useState }  from "react";
// import Image from 'next/dist/client/image';
import { Flex } from "@chakra-ui/react";
import Mobile from "./HeaderMobile";
import Desktop from "./HeaderDesktop";
// import Image from 'next/dist/client/image';
import { useRouter } from "next/router";
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

  return (
    <Flex
      justify="space-between"
      align="center"
      px={{ base: "8px", sm: "2.5rem", md: "2.5rem" }}
      overflow="hidden"
      className="absolute z-50 h-20 w-full bg-white shadow-top"
    >
      <Desktop goPage={goPage} />
      <Mobile goPage={goPage} />
    </Flex>
  );
}
