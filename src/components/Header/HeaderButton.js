import React from "react";
import { Box } from "@chakra-ui/react";

export default function HeaderButton(props) {
  const { title, onClick, ifAddressHasNFT = true } = props;
  //sm 變drawer
  return (
    <Box
      as="button"
      disabled={!ifAddressHasNFT}
      opacity={ifAddressHasNFT ? "1" : "0.5"}
      cursor={ifAddressHasNFT ? "pointer" : "not-allowed"}
      display={{ base: "none", lg: "block" }}
      justifyContent={"center"}
      borderRadius="45px"
      border="3px solid #425673"
      width="140px"
      height="35px"
      fontSize="19px"
      fontWeight="500"
      onClick={onClick}
      zIndex="3"
    >
      <div className="headerText" data-storke={title}>
        {title}
      </div>
    </Box>
  );
}
