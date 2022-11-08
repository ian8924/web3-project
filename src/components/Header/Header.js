import React, { useState } from "react";
// import Image from 'next/dist/client/image';
import { useRouter } from "next/router";
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  Icon,
  Image,
  Spacer,
} from "@chakra-ui/react";
import Logo from "../../assets/images/Logo.png";

export default function Header() {
  const router = useRouter();
  const goPage = (page) => {
    router.push(page);
  };

  return (
    <div className="bg-white">
      <Flex
        justify="space-between"
        align="center"
        py="2rem"
        px="3rem"
        overflow="hidden"
        shadow={""}
      >
        <Flex gap={3}>
          <Image src={Logo.src} />
          <div
            className="strokeText "
            data-storke="Into The Arjaverse!"
            id="title"
          >
            Into The Arjaverse!
          </div>
        </Flex>
        <Spacer />
        <Center gap={5}>
          {/* <Button colorScheme="teal"> */}
          <Icon
            viewBox="0 0 16 10"
            color="red.500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.02496 4.54353C9.02496 7.05277 7.00463 9.0869 4.51256 9.0869C2.02049 9.0869 0 7.05231 0 4.54353C0 2.03474 2.02033 0 4.51256 0C7.00478 0 9.02496 2.03428 9.02496 4.54353ZM13.9752 4.54353C13.9752 6.90544 12.9651 8.8209 11.7189 8.8209C10.4728 8.8209 9.46266 6.90544 9.46266 4.54353C9.46266 2.18162 10.4727 0.266148 11.7188 0.266148C12.9649 0.266148 13.9751 2.181 13.9751 4.54353H13.9752ZM16 4.54353C16 6.65922 15.6448 8.37538 15.2065 8.37538C14.7681 8.37538 14.4131 6.65968 14.4131 4.54353C14.4131 2.42737 14.7683 0.71167 15.2065 0.71167C15.6446 0.71167 16 2.42722 16 4.54353Z" />
          </Icon>
          {/* </Button> */}
          <Button colorScheme="teal">
            <Icon
              viewBox="0 0 16 10"
              fill={"white"}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.7768 0.478002L0.956811 5.036C0.150145 5.36 0.154811 5.81 0.808811 6.01067L3.84348 6.95734L10.8648 2.52734C11.1968 2.32534 11.5001 2.434 11.2508 2.65534L5.56215 7.78934H5.56081L5.56215 7.79L5.35281 10.918C5.65948 10.918 5.79481 10.7773 5.96681 10.6113L7.44081 9.178L10.5068 11.4427C11.0721 11.754 11.4781 11.594 11.6188 10.9193L13.6315 1.434C13.8375 0.608002 13.3161 0.234002 12.7768 0.478002Z" />
            </Icon>
          </Button>
          <Button colorScheme="teal">Medium</Button>
          <Button colorScheme="teal">Discord</Button>
        </Center>
      </Flex>
    </div>
  );
}
