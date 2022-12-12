import React, { useState, useCallback, useEffect } from "react";
import { Flex, Center, Box } from "@chakra-ui/react";
import Background from "../../components/Background/Background";
import ContentBg from "../../components/Background/ContentBg";
import Alert from "../../components/Alert/Alert";
import { getContract } from "../../hooks/useContract";
import { decode } from "js-base64";

export default function ProfilePage() {
  const [contractToken, setContractToken] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [animationUrl, setAnimationUrl] = useState();
  const [bgColor, setBgColor] = useState();
  const tilte = "Here is your NFT , come and play your NFT right now";

  // tokenOfOwnerByIndex tokenID
  // balanceOf 數量

  const getData = useCallback(async () => {
    const contract = await getContract();
    setContractToken(contract);
  }, []);
  const getTokenURI = useCallback(async () => {
    const tokenURI = await contractToken?.tokenURI(12);
    const object = JSON.parse(
      decode(tokenURI.replace("data:application/json;base64,", ""))
    );
    setImageUrl(object.image);
    const url = object.animation_url.replace("ipfs://", "");
    setAnimationUrl(url);
    setBgColor("bg-[#" + object.attributes[0].value + "]");
    console.log("object", object);
  }, [contractToken]);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (contractToken) {
      getTokenURI();
    }
  }, [contractToken]);
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
            src={"https://ipfs.io/ipfs/" + animationUrl}
          />
        </Center>
      </Box>
    </ContentBg>
  );
}
