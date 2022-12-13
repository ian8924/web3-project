import React, { useState, useCallback, useEffect } from "react";
import { Flex, Center, Box } from "@chakra-ui/react";
import Background from "../../components/Background/Background";
import ContentBg from "../../components/Background/ContentBg";
import Alert from "../../components/Alert/Alert";
import { getContract } from "../../hooks/useContract";
import { decode } from "js-base64";
import { useAccount } from "wagmi";

export default function ProfilePage() {
  const { address } = useAccount()
  const [contract, setContract] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [animationUrl, setAnimationUrl] = useState();
  const [bgColor, setBgColor] = useState();
  const [ifAddressHasNFT, setIfAddressHasNFT] = useState()
  const [userTokenID, setUserTokenID] = useState();
  const tilte = "Here is your NFT , come and play your NFT right now";

  // tokenOfOwnerByIndex tokenID
  // balanceOf 數量

  const getData = useCallback(async () => {
    const contract = await getContract();
    setContract(contract);
  }, []);
  const getAddressBalanceOf = (async () => {
    const balanceOf = await contract.balanceOf(address)
    setIfAddressHasNFT(balanceOf.toNumber() === 0 ? false : true)
    if (balanceOf?.toNumber()) {
      const tokenID = await contract.tokenOfOwnerByIndex(address, 0)
      setUserTokenID(tokenID)
    }
  })
  const getTokenURI = useCallback(async () => {
    // const tokenURI = await contract?.tokenURI(2);
    const tokenURI = await contract?.tokenURI(userTokenID);
    const object = JSON.parse(
      decode(tokenURI.replace("data:application/json;base64,", ""))
    );
    setImageUrl(object.image);
    const url = object.animation_url.replace("ipfs://", "");
    setAnimationUrl("https://ipfs.io/ipfs/" + url);
    setBgColor("bg-[#" + object.attributes[0].value + "]");
  }, [contract, userTokenID]);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (contract) {
      getTokenURI();
      getAddressBalanceOf()
    }
  }, [contract]);
  return (
    <ContentBg>
      <Box zIndex="5">
        <Flex
          w={"100%"}
          pt={6}
          className="strokeText text-2xl"
          data-storke={tilte}
          color={"yellow"}
          justify={"center"}
          textAlign={"center"}
        >
          {tilte}
        </Flex>
        {/* //TODO: Skeleton before get NFT */}
        <Center width={'100%'} height={'auto'}>
          {/* <img width={"100vw"} height={"100vh"} src={imageUrl} /> */}
          <iframe
            className={`${bgColor} iframe`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-scripts"
            src={animationUrl}
          />
        </Center>
      </Box>
    </ContentBg>
  );
}
