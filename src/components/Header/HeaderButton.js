import React from "react";
import { Box, IconButton, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function HeaderButton(props) {
  const { title, onClick } = props;
  //sm 變drawer
  return (
    <Box
      as="button"
      display={{ base: "none", lg: "block" }}
      justifyContent={"center"}
      borderRadius="45px"
      border="3px solid #425673"
      width="170px"
      height="35px"
      fontSize="19px"
      fontWeight="500"
      onClick={onClick}
    >
      <div className="headerText" data-storke={title}>
        {title}
      </div>
    </Box>
  );
}
