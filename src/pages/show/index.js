import React, { useState } from "react";
import { Flex, Center, Box } from "@chakra-ui/react";
import Background from "../../components/Background/Background";

export default function ShowPage() {
  return (
    <Background>
      <div className="absolute z-50 left-0 top-0">
        <div className="text-black">
          <Center h={"calc(100vh - 80px)"}>show</Center>
        </div>
      </div>
    </Background>
  );
}
