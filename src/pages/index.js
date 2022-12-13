import React, { useEffect, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Background from "../components/Background/Background";
import WaveButton from "../components/Button/WaveButton/WaveButton";
import { useAccount } from "wagmi";
import NoSSRWrapper from "../components/NoSSRWrapper";
import { motion } from "framer-motion";
import { getContract } from "../hooks/useContract";
//TODO: add animation

export default function Main() {
  const { address } = useAccount();
  const router = useRouter();
  const goPage = (page) => {
    router.push(page);
  };
  const [ifAddressHasNFT, setIfAddressHasNFT] = useState(false);
  const getAddressBalanceOf = async () => {
    const contract = await getContract();
    const balanceOf = await contract.balanceOf(address);
    setIfAddressHasNFT(balanceOf.toNumber() === 0 ? false : true);
  };
  useEffect(() => {
    if (address) {
      getAddressBalanceOf();
    }
  }, []);
  return (
    <Background>
      <Box
        className="titles"
        fontWeight={"semibold"}
        fontSize={{ base: "60px", sm: "60px", md: "120px" }}
        marginTop={{ base: "100px", sm: "70px", md: "70px" }}
        lineHeight={{ base: "70px", sm: "70px", md: "100px" }}
        color="#425673"
        zIndex="3"
      >
        Into The <br />
        <div className="strokeText" data-storke="Arjaverse!" id="title">
          Arjaverse!
        </div>
      </Box>

      <NoSSRWrapper>
        <Flex
          width="100%"
          height="100px"
          justifyContent="center"
          bgColor="transparent"
          mt={{ base: "35px", sm: "40px" }}
          zIndex="20"
        >
          {address ? (
            <></>
          ) : (
            <div className="btn-connect">
              <ConnectButton />
            </div>
          )}
        </Flex>
        {address ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            marginTop={{ base: "5px", sm: "30px" }}
            marginBottom={{ base: "20px", sm: "-100px", md: "-100px" }}
          >
            <Box
              gap="4"
              width={{ base: "80%", sm: "80%" }}
              display={{ base: "flex", sm: "80px" }}
              alignItems={"center"}
              flexDirection={{ base: "column", sm: "column", md: "row" }}
              justifyContent="center"
              zIndex={20}
            >
              <WaveButton fun={() => goPage("/mint")}>Go To Mint</WaveButton>
              {ifAddressHasNFT ? (
                <WaveButton fun={() => goPage("/profile")}>My NFT</WaveButton>
              ) : (
                <></>
              )}
              <WaveButton fun={() => goPage("/show")}>Show Room</WaveButton>
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </NoSSRWrapper>
    </Background>
  );
}
