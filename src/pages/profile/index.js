import React, { useState } from "react";
import { Flex, Center, Box } from "@chakra-ui/react";
import Background from "../../components/Background/Background";
import ContentBg from "../../components/Background/ContentBg";
import Alert from "../../components/Alert/Alert";

export default function ProfilePage() {
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
        <Alert>ss</Alert>

        </Flex>
        {/* //TODO: Skeleton before get NFT */}
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
