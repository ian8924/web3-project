import React, { useState } from "react";
// import Image from 'next/dist/client/image';
import { useRouter } from "next/router";
import {
  Center,
  Flex,
  Image,
  Box,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Drawer,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function Mobile() {
  const router = useRouter();
  const { address } = useAccount();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hover, setHover] = useState(false);

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
      <Flex display={{ base: "flex", lg: "none" }} width="40px" height="30px">
        {/* <div className="headerText">sss</div> */}
        <Button
          bgColor={"darkcyan"}
          _hover={{ bgColor: "white" }}
          onClick={() => {
            setHover(true);
            onOpen();
          }}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          <HamburgerIcon color={hover ? "darkcyan" : "white"} w={8} h={8} />
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bgColor="#B5E0E9">
            <Flex
              gap={{ base: "1", sm: "3" }}
              align="center"
              justifyContent="space-evenly"
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
              >
                Arjaverse!
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody bg={"linear-gradient(#B5E0E9, #CEE2D6 80%)"}>
            {address ? (
              <div className="w-full">
                <Center h={"50px"}>
                  <Button
                    width={"100%"}
                    bgColor="#B5E0E9"
                    color="cyan.800"
                    onClick={() => {
                      goPage("/mint");
                      onClose();
                    }}
                    className="drop-shadow-xl"
                  >
                    Go To Mint
                  </Button>
                </Center>
                <Center h={"50px"}>
                  <Button
                    width={"100%"}
                    bgColor="#B5E0E9"
                    color="cyan.800"
                    className="drop-shadow-xl"
                    onClick={() => {
                      goPage("/profile");
                      onClose();
                    }}
                  >
                    My NFTs
                  </Button>
                </Center>
                <Center h={"50px"}>
                  <Button
                    width={"100%"}
                    bgColor="#B5E0E9"
                    color="cyan.800"
                    className="drop-shadow-xl"
                    onClick={() => {
                      goPage("/show");
                      onClose();
                    }}
                  >
                    ShowRoom
                  </Button>
                </Center>
              </div>
            ) : (
              <div className="flex justify-center mt-4 text-xl ">
                <div className="text-white p-3 rounded-2xl bg-[#0E76FD]">
                  <ConnectButton />
                </div>
              </div>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
