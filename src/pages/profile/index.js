import React, { useState } from "react";
import { Flex, Center, Box } from "@chakra-ui/react";
import Background from "../../components/Background/Background";
import ContentBg from "../../components/Background/ContentBg";

export default function ProfilePage() {
  return (
    <ContentBg>
      <div className="text-">
        <div className="flex justify-around text-4xl w-full pt-10">
          userAddress
        </div>
        <Center h={"calc(100vh - 80px)"} w={"100vw"}>
          <iframe
            className="h-full w-3/5 py-10"
            src="https://www.w3schools.com"
            title="Profile NFT"
          ></iframe>
        </Center>
      </div>
    </ContentBg>
  );
}
