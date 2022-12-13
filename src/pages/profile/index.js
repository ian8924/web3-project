import React, { useState, useCallback, useEffect, useContext } from "react";
import { Flex, Center, Box } from "@chakra-ui/react";
import Background from "../../components/Background/Background";
import ContentBg from "../../components/Background/ContentBg";
import { getContract } from "../../hooks/useContract";
import { decode } from "js-base64";
import { useAccount } from "wagmi";
import { AccountContext } from "../../components/Provider";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const { contractAction, ifAddressHasNFT, getAddressBalanceOf, userTokenID } =
    useContext(AccountContext);
  const [imageUrl, setImageUrl] = useState();
  const [animationUrl, setAnimationUrl] = useState();
  const [bgColor, setBgColor] = useState();
  const router = useRouter();

  const tilte = "Here is your NFT , come and play your NFT right now";

  // tokenOfOwnerByIndex tokenID
  // balanceOf 數量

  const getTokenURI = useCallback(async () => {
    // const tokenURI = await contractAction?.tokenURI(2);
    if (userTokenID) {
      const tokenURI = await contractAction?.tokenURI(userTokenID);
      const object = JSON.parse(
        decode(tokenURI.replace("data:application/json;base64,", ""))
      );
      setImageUrl(object.image);
      const url = object.animation_url.replace("ipfs://", "");
      setAnimationUrl("https://ipfs.io/ipfs/" + url);
      setBgColor("bg-[#" + object.attributes[0].value + "]");
    }
  }, [contractAction, userTokenID]);

  useEffect(() => {
    if (contractAction) {
      getAddressBalanceOf();
      getTokenURI();
    }
  }, [contractAction]);

  useEffect(() => {
    if (!ifAddressHasNFT) {
      router.push("/");
    }
  }, [ifAddressHasNFT]);

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
        <Center width={"100%"} height={"auto"}>
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
