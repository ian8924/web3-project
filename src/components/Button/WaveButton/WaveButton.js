import React from "react";
import { Button, Box, PseudoBox } from "@chakra-ui/react";
import Wave2 from "../../Background/Wave2";

export default function WaveButton(props) {
  return (
      <Button
        className="btn-wave"
        bgColor="#fff"
        _hover={{ bgColor: "#fff" }}
        fontSize={{ base: "20px", sm: "30px" }}
        height={{ base: "50px", sm: "70px" }}
        borderRadius={{ base: "25px", sm: "35px" }}
        border={{ base: "6px solid #425673", sm: "8px solid #425673" }}
        color="#425673"
        width={{ base: "100%", sm: "300px" }}
        onClick={() => props.fun()}
        overflow="hidden"
        position="relative"
   
        role="group"
      >
        <Box zIndex="2">{props.children}</Box>
        <Box
          position="absolute"
          left="-10px"
          top="20px"
          zIndex="1"
          transitionDuration="0.2s"
          transitionTimingFunction="ease-in-out"
          _groupHover={{ top: "2px" }}
        >
          <Wave2></Wave2>
        </Box>
      </Button>
  );
}
