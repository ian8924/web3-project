import React from "react";
import { Center, Image } from "@chakra-ui/react";
import arjaverse from "../../assets/images/Arjaverse.png";
import arja2 from "../../assets/images/seagull/6.png";
import ContentBg from "../../components/Background/ContentBg";
import Alert from "../../components/Alert/Alert";

export default function ShowPage() {
  return (
    <ContentBg seal={false}>
      <div className="text-black w-full h-full">
        <div className="w-full">
          <Image width="100px" maxWidth="30%" src={arja2.src} />
          {/* <Alert variant></Alert> */}
        </div>
        <Center>
          <Image src={arjaverse.src} height={"50rem"} zIndex="2" />
        </Center>
      </div>
    </ContentBg>
  );
}
