import React, { useState, useCallback, useEffect } from "react";
import { Flex, Center, Box } from "@chakra-ui/react";
import Background from "../../components/Background/Background";
import ContentBg from "../../components/Background/ContentBg";
import Alert from "../../components/Alert/Alert";
import { getContract } from "../../hooks/useContract";
import { decode } from "js-base64";

export default function ProfilePage() {
  const [contractToken, setContractToken] = useState();
  const [tokenURI, setTokenURI] = useState();
  const getData = useCallback(async () => {
    const contract = await getContract();
    setContractToken(contract);
  }, []);
  const getTokenURI = useCallback(async () => {
    const tokenURI = await contractToken?.tokenURI(2);
    const object = JSON.parse(
      decode(tokenURI.replace("data:application/json;base64,", ""))
    );
    setTokenURI(object.image);
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
      <Box className="" zIndex="5">
        <Flex
          w={"100%"}
          pt={6}
          className="text-2xl"
          color={"black"}
          justify={"center"}
        >
          遊戲說明
          {/* <Alert>ss</Alert> */}
        </Flex>
        {/* //TODO: Skeleton before get NFT */}
        {console.log("s", contractToken)}
        {/* {console.log("metadata",metadata)} */}
        <Center h={"calc(100vh - 80px)"} w={"100vw"}>
          <img width={"100vw"} height={"100vh"} src={tokenURI} />
        </Center>
      </Box>
    </ContentBg>
  );
}
