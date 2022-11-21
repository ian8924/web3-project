import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import bg from "../../assets/images/bg.png";
import arja from "../../assets/images/seagull/5.png";
import arja2 from "../../assets/images/seagull/6.png";

export default function ContentBg(props) {
  const { seal = true } = props;
  return (
    <Flex
      minHeight={{ base: "100vh" }}
      justifyContent="center"
      position="relative"
      overflow="hidden"
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      bgImage={bg.src}
    >
      {seal ? (
        <>
          <Image
            width="295px"
            maxWidth="30%"
            src={arja2.src}
            position="absolute"
            top={{ base: "350px", sm: "300px" }}
            left={{ base: "-20px", sm: "5%" }}
          />
          <Image
            width={{ base: "250px", sm: "612px" }}
            src={arja.src}
            position="absolute"
            top={{ base: "300px", sm: "140px" }}
            right={{ base: "-50px", sm: "0%" }}
            zIndex="0"
          />
        </>
      ) : (
        <></>
      )}
      {props.children}
    </Flex>
  );
}
