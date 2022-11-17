import React from "react";
// import Image from 'next/dist/client/image';
import { useRouter } from "next/router";
import { Center, Flex, Image, Spacer } from "@chakra-ui/react";
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
      px={{ base: "16px", sm: "3rem", md: "3rem" }}
      overflow="hidden"
      className="absolute z-50 w-full bg-white shadow-top h-20"
    >
      <Flex
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
          className="strokeText "
          data-storke="Into The Arjaverse!"
          id="title"
        >
          Into The Arjaverse!
        </div>
      </Flex>
      <Spacer />
      <Center>
        <button
          className="bg-[#FAC92E] p-3 w-full h-full rounded-md"
          onClick={() => goPage("/profile")}
        >
          <Center className="text-[#425673] text-2xl font-semibold">
            Connect Wallet
          </Center>
        </button>
      </Center>
    </Flex>
  );
}
