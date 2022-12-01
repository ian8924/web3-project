import React, { useState } from "react";
// import Image from 'next/dist/client/image';
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
  DrawerFooter,
} from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useNetwork } from "wagmi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEns } from "../../hooks/useEns.js";

export default function Mobile(props) {
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { data: ens } = useEns(address);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hover, setHover] = useState(false);

  const { goPage } = props;

  return (
    <>
      <Flex display={{ base: "flex", lg: "none" }} width="40px" height="30px">
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
        <DrawerContent bgColor="#CEE2D6">
          <DrawerHeader bgColor="#B5E0E9">
            {address ? (
              // <div className="flex justify-around text-darkBlue">
              //   <div className="">{chain.name}</div>
              //   <div className=" ">{ens ? ens : address.split(0, 2)}</div>
              // </div>
              <ConnectButton/>
            ) : (
              <div className="mt-4 flex justify-center text-xl">
                <div className="rounded-2xl bg-[#0E76FD] p-3 text-white">
                  <ConnectButton chainStatus="icon" showBalance={false} />
                </div>
              </div>
            )}
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
              <></>
            )}
          </DrawerBody>
          <DrawerFooter
            justifyContent="center"
            onClick={() => {
              goPage("/");
              onClose();
            }}
          >
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
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
