import React, { useState } from "react";
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
  Divider,
} from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useEns } from "../../hooks/useEns.js";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Mobile(props) {
  const ethIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzI1MjkyRSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMjhhMTQgMTQgMCAxIDAgMC0yOCAxNCAxNCAwIDAgMCAwIDI4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1vcGFjaXR5PSIuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMjhhMTQgMTQgMCAxIDAgMC0yOCAxNCAxNCAwIDAgMCAwIDI4WiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZmlsbD0idXJsKCNiKSIgZD0iTTguMTkgMTQuNzcgMTQgMTguMjFsNS44LTMuNDQtNS44IDguMTktNS44MS04LjE5WiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0xNCAxNi45My01LjgxLTMuNDRMMTQgNC4zNGw1LjgxIDkuMTVMMTQgMTYuOTNaIi8+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeDI9IjE0IiB5MT0iMCIgeTI9IjI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI2ZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImIiIHgxPSIxNCIgeDI9IjE0IiB5MT0iMTQuNzciIHkyPSIyMi45NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iLjkiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48L3N2Zz4K";
  const { address } = useAccount();
  const { data: ens } = useEns(address);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hover, setHover] = useState(false);

  const { goPage, ifAddressHasNFT } = props;

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
        <DrawerContent bgColor="#B5E0E9">
          <DrawerHeader bgColor="#B5E0E9">
            {address ? (
              <div className="flex justify-around text-darkBlue text-lg h-16 items-center">
                <ConnectButton.Custom>
                  {({ openAccountModal, openChainModal }) => {
                    return (
                      <Flex>
                        <Box
                          as="button"
                          bg="white"
                          rounded={"2xl"}
                          h="43px"
                          w={"80px"}
                          _hover={{ bg: "white" }}
                          display="flex"
                          justifyContent="center"
                          gap="3"
                          alignItems="center"
                          className="shadow-xl"
                          onClick={() => openChainModal()}
                        >
                          <img src={ethIcon} />
                          <ChevronDownIcon />
                        </Box>
                        <Box
                          as="button"
                          h="43px"
                          w={"140px"}
                          display="flex"
                          justifyContent="center"
                          gap="3"
                          alignItems="center"
                          marginLeft={"16px"}
                          rounded={"2xl"}
                          _hover={{ bg: "white" }}
                          className="shadow-xl bg-white rounded-2xl p-2"
                          onClick={() => openAccountModal()}
                        >
                          {ens
                            ? ens
                            : address.slice(0, 4) +
                              "..." +
                              address.slice(38, 42)}
                          <ChevronDownIcon />
                        </Box>
                      </Flex>
                    );
                  }}
                </ConnectButton.Custom>
              </div>
            ) : (
              <div className="mt-4 flex justify-center text-xl">
                <div className="rounded-2xl bg-[#0E76FD] p-3 text-white">
                  <ConnectButton chainStatus="icon" showBalance={false} />
                </div>
              </div>
            )}
          </DrawerHeader>
          <Divider className="mb-2" bg="transparent" />
          <DrawerBody bg={"linear-gradient(#B5E0E9, #CEE2D6 80%)"} mt="1">
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
                    disabled={!ifAddressHasNFT}
                    opacity={ifAddressHasNFT ? "1" : "0.5"}
                    cursor={ifAddressHasNFT ? "pointer" : "not-allowed"}
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
                <Center h={"50px"}>
                  <Button
                    width={"100%"}
                    bgColor="#B5E0E9"
                    color="cyan.800"
                    className="drop-shadow-xl"
                    onClick={() => {
                      window.open("https://opensea.io/zh-TW/collection/arjaverse-nft", "_blank");
                      onClose();
                    }}
                  >
                    Opensea
                  </Button>
                </Center>
              </div>
            ) : (
              <></>
            )}
          </DrawerBody>
          <DrawerFooter
            bg="#CEE2D6"
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
