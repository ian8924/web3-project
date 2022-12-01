import React, { useState, useCallback, useEffect } from "react";
import { Flex, Center, Box } from "@chakra-ui/react";
import Background from "../../components/Background/Background";
import ContentBg from "../../components/Background/ContentBg";
import Alert from "../../components/Alert/Alert";
import { getContract } from "../../hooks/useContract";

export default function ProfilePage() {
  const [contractToken, setContractToken] = useState();
  const getData = useCallback(async () => {
    const contract = await getContract();
    const metadata = await contract
// console.log("metadata",metadata)
    setContractToken(contract);
  }, []);
  useEffect(() => {
    getData();
  }, []);
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
          <iframe
            className="h-full w-3/5 py-6"
            src="https://www.w3schools.com"
            title="Profile NFT"
          />
        </Center>
      </Box>
    </ContentBg>
  );
}
