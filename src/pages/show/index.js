import React, { useState } from "react";
import {
  Grid,
  Image,
  Box,
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import ContentBg from "../../components/Background/ContentBg";
import SwiperItem from "../../components/Show/Swiper";
import ShowImage from "../../components/Show/ShowImage";

// images
import body from "../../assets/images/show/body/Arja.png";
import body2 from "../../assets/images/show/body/BeardedSeal.png";
import body3 from "../../assets/images/show/body/HarpSeal.png";
import body4 from "../../assets/images/show/body/JimmyTheSeal.png";
import body5 from "../../assets/images/show/body/RibbonSeal.png";

import ball1 from "../../assets/images/show/ball/Coin.png";
import ball2 from "../../assets/images/show/ball/Flower.png";
import ball3 from "../../assets/images/show/ball/Octopus.png";
import ball4 from "../../assets/images/show/ball/Penguin.png";
import ball5 from "../../assets/images/show/ball/StarRing.png";
import ball6 from "../../assets/images/show/ball/Volley-ball.png";

import eye1 from "../../assets/images/show/eyes/DollarBills.png";
import eye2 from "../../assets/images/show/eyes/Dot.png";
import eye3 from "../../assets/images/show/eyes/Lightening.png";
import eye4 from "../../assets/images/show/eyes/LineShape.png";
import eye5 from "../../assets/images/show/eyes/Sad.png";
import eye6 from "../../assets/images/show/eyes/Watery.png";

import bg1 from "../../assets/images/show/bg/Beige.png";
import bg2 from "../../assets/images/show/bg/Blue.png";
import bg3 from "../../assets/images/show/bg/Gray.png";
import bg4 from "../../assets/images/show/bg/Green.png";
import bg5 from "../../assets/images/show/bg/Navy.png";
import bg6 from "../../assets/images/show/bg/Pink.png";
import bg7 from "../../assets/images/show/bg/Purple.png";
import bg8 from "../../assets/images/show/bg/Yellow.png";

import dec1 from "../../assets/images/show/decoration/BowTieHead.png";
import dec2 from "../../assets/images/show/decoration/BowTieNeck.png";
import dec3 from "../../assets/images/show/decoration/BowTieTail.png";
import dec4 from "../../assets/images/show/decoration/Cowboy.png";
import dec5 from "../../assets/images/show/decoration/Crown.png";
import dec6 from "../../assets/images/show/decoration/Dress.png";
import dec7 from "../../assets/images/show/decoration/FriedG.png";
import dec8 from "../../assets/images/show/decoration/Fries.png";
import dec9 from "../../assets/images/show/decoration/GoldenNacklace.png";
import dec10 from "../../assets/images/show/decoration/MultiGoldeRings.png";
import dec11 from "../../assets/images/show/decoration/PearlMilk.png";
import dec12 from "../../assets/images/show/decoration/Scarf01.png";
import dec13 from "../../assets/images/show/decoration/Scarf02.png";
import dec14 from "../../assets/images/show/decoration/Scarf03.png";
import dec15 from "../../assets/images/show/decoration/Seaweed.png";
import dec16 from "../../assets/images/show/decoration/Splash.png";
import dec17 from "../../assets/images/show/decoration/TailRing.png";

import effect1 from "../../assets/images/show/effect/ColorSpot.png";
import effect2 from "../../assets/images/show/effect/RedWave.png";
import effect3 from "../../assets/images/show/effect/RingStars.png";
import effect4 from "../../assets/images/show/effect/Ripple.png";
import effect5 from "../../assets/images/show/effect/Spotlight.png";
import effect6 from "../../assets/images/show/effect/Stars.png";

const bodys = [
  { id: 1, name: "Arja", src: body.src },
  { id: 2, name: "BeardedSeal", src: body2.src },
  { id: 3, name: "HarpSeal", src: body3.src },
  { id: 4, name: "JimmyTheSeal", src: body4.src },
  { id: 5, name: "RibbonSeal", src: body5.src },
];

const balls = [
  { id: 1, name: "Coin", src: ball1.src },
  { id: 2, name: "Flower", src: ball2.src },
  { id: 3, name: "Octopus", src: ball3.src },
  { id: 4, name: "Penguin", src: ball4.src },
  { id: 5, name: "StarRing", src: ball5.src },
  { id: 6, name: "Volley-ball", src: ball6.src },
];

const eyes = [
  { id: 1, name: "DollarBills", src: eye1.src },
  { id: 2, name: "Dot", src: eye2.src },
  { id: 3, name: "Lightening", src: eye3.src },
  { id: 4, name: "LineShape", src: eye4.src },
  { id: 5, name: "Sad", src: eye5.src },
  { id: 6, name: "Watery", src: eye6.src },
];

const backgrounds = [
  { id: 1, name: "Beige", src: bg1.src },
  { id: 2, name: "Blue", src: bg2.src },
  { id: 3, name: "Gray", src: bg3.src },
  { id: 4, name: "Green", src: bg4.src },
  { id: 5, name: "Navy", src: bg5.src },
  { id: 6, name: "Pink", src: bg6.src },
  { id: 7, name: "Purple", src: bg7.src },
  { id: 8, name: "Yellow", src: bg8.src },
];

const decorations = [
  { id: 1, name: "BowTieHead", src: dec1.src },
  { id: 2, name: "BowTieNeck", src: dec2.src },
  { id: 3, name: "BowTieTail", src: dec3.src },
  { id: 4, name: "Cowboy", src: dec4.src },
  { id: 5, name: "Crown", src: dec5.src },
  { id: 6, name: "Dress", src: dec6.src },
  { id: 7, name: "FriedG", src: dec7.src },
  { id: 8, name: "Fries", src: dec8.src },
  { id: 9, name: "GoldenNacklace", src: dec9.src },
  { id: 10, name: "MultiGoldeRings", src: dec10.src },
  { id: 11, name: "PearlMilk", src: dec11.src },
  { id: 12, name: "Scarf01", src: dec12.src },
  { id: 13, name: "Scarf02", src: dec13.src },
  { id: 14, name: "Scarf03", src: dec14.src },
  { id: 15, name: "Seaweed", src: dec15.src },
  { id: 16, name: "Splash", src: dec16.src },
  { id: 17, name: "TailRing", src: dec17.src },
];

const effects = [
  { id: 1, name: "ColorSpot", src: effect1.src },
  { id: 2, name: "RedWave", src: effect2.src },
  { id: 3, name: "RingStars", src: effect3.src },
  { id: 4, name: "Ripple", src: effect4.src },
  { id: 5, name: "Spotlight", src: effect5.src },
  { id: 6, name: "Stars", src: effect6.src },
];

export default function ShowPage() {
  const [bodyId, setBodyId] = useState(1);
  const [ballId, setBallId] = useState(1);
  const [eyeId, setEyeId] = useState(1);
  const [backgroundId, setBackgroundId] = useState(1);
  const [decorationId, setDecorationId] = useState(1);
  const [effectId, setEffectId] = useState(1);

  const setB = (ID) => {
    setBodyId(ID);
  };

  return (
    <ContentBg seal={false}>
      <Flex
        width={"100%"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        color={"#425673"}
        fontWeight={700}
        fontSize={"40px"}
        marginTop={{ base: "20px", sm: "20px", md: "50px" }}
        marginBottom={"50px"}
        flexDirection={"column"}
      >
        展示區
        <Box
          fontSize={"16px"}
          backgroundColor="rgba(42,56,73,.6)"
          color="white"
          padding="10px"
          borderRadius="10px"
          marginTop={'16px'}
        >
          可隨意切換物件展示各種造型
        </Box>
        {/* 電腦版 */}
        <Box
          width={"100%"}
          color={"black"}
          marginTop={"80px"}
          display={{ base: "none", md: "none", md: "block" }}
        >
          <Grid
            gridTemplateColumns={{
              base: "1fr auto 1fr",
            }}
            gridTemplateRows={{
              base: "1fr auto 1fr",
            }}
            gridTemplateAreas={{
              base: `'body1 showResult body4' 'body2 showResult body5' 'body3 showResult body6'`,
            }}
            gap={4}
          >
            <Flex gridArea="body1" justifyContent={"center"} textAlign="center">
              <Flex flexDirection="column" fontSize="20px">
                身體 {bodyId}
                <SwiperItem options={bodys} triggle={setBodyId} />
              </Flex>
            </Flex>
            <Flex gridArea="body2" justifyContent={"center"} textAlign="center">
              <Flex flexDirection="column" fontSize="20px">
                球 {ballId}
                <SwiperItem options={balls} triggle={setBallId} />
              </Flex>
            </Flex>
            <Flex gridArea="body3" justifyContent={"center"} textAlign="center">
              <Flex flexDirection="column" fontSize="20px">
                眼睛 {eyeId}
                <SwiperItem options={eyes} triggle={setEyeId} />
              </Flex>
            </Flex>
            <Flex gridArea="body4" justifyContent={"center"} textAlign="center">
              <Flex flexDirection="column" fontSize="20px">
                背景 {backgroundId}
                <SwiperItem options={backgrounds} triggle={setBackgroundId} />
              </Flex>
            </Flex>
            <Flex gridArea="body5" justifyContent={"center"} textAlign="center">
              <Flex flexDirection="column" fontSize="20px">
                配件 {decorationId}
                <SwiperItem options={decorations} triggle={setDecorationId} />
              </Flex>
            </Flex>
            <Flex gridArea="body6" justifyContent={"center"} textAlign="center">
              <Flex flexDirection="column" fontSize="20px">
                特效 {effectId}
                <SwiperItem options={effects} triggle={setEffectId} />
              </Flex>
            </Flex>
            <Flex
              gridArea="showResult"
              justifyContent={"center"}
              textAlign="center"
            >
              <ShowImage
                bodyImgSrc={bodys[bodyId - 1].src}
                ballImgSrc={balls[ballId - 1].src}
                decorationImgSrc={decorations[decorationId - 1].src}
                eyeImgSrc={eyes[eyeId - 1].src}
                effectImgSrc={effects[effectId - 1].src}
                bgImgSrc={backgrounds[backgroundId - 1].src}
              />
            </Flex>
          </Grid>
        </Box>
        {/* 手機版 */}
        <Flex
          display={{ base: "flex", sm: "flex", md: "none" }}
          flexDirection={"column"}
          marginTop={{ base: "20px", sm: "20px", md: "50px" }}
          alignItems="center"
          width="100%"
          padding="20px 10px"
        >
          <ShowImage
            bodyImgSrc={bodys[bodyId - 1].src}
            ballImgSrc={balls[ballId - 1].src}
            decorationImgSrc={decorations[decorationId - 1].src}
            eyeImgSrc={eyes[eyeId - 1].src}
            effectImgSrc={effects[effectId - 1].src}
            bgImgSrc={backgrounds[backgroundId - 1].src}
          />
          <Tabs
            width={"100%"}
            marginTop={"20px"}
            colorScheme="white"
            variant="colorful"
            color={"white"}
            backgroundColor="rgba(57,57,57,.6)"
            borderRadius={"10px"}
          >
            <TabList justifyContent={"center"} width="100%" padding={"8px 0"}>
              <Tab fontSize={"16px"} flex="1">
                身體
              </Tab>
              <Tab fontSize={"16px"} flex="1">
                球
              </Tab>
              <Tab fontSize={"16px"} flex="1">
                眼睛
              </Tab>
              <Tab fontSize={"16px"} flex="1">
                背景
              </Tab>
              <Tab fontSize={"16px"} flex="1">
                配件
              </Tab>
              <Tab fontSize={"16px"} flex="1">
                特效
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex
                  width={"auto"}
                  flexWrap={"wrap"}
                  justifyContent="flex-start"
                >
                  {bodys.map((i, index) => (
                    <Image
                      key={index}
                      src={i.src}
                      width={"33%"}
                      height={"auto"}
                      border={"2px solid red"}
                      marginTop="10px"
                      cursor="pointer"
                      borderColor={bodyId === i.id ? "red" : "transparent"}
                      onClick={() => setBodyId(i.id)}
                    />
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  width={"auto"}
                  flexWrap={"wrap"}
                  justifyContent="flex-start"
                >
                  {balls.map((i, index) => (
                    <Image
                      key={index}
                      src={i.src}
                      width={"33%"}
                      height={"auto"}
                      border={"2px solid red"}
                      marginTop="16px"
                      cursor="pointer"
                      borderColor={ballId === i.id ? "red" : "transparent"}
                      onClick={() => setBallId(i.id)}
                    ></Image>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  width={"auto"}
                  flexWrap={"wrap"}
                  justifyContent="flex-start"
                >
                  {eyes.map((i, index) => (
                    <Image
                      key={index}
                      src={i.src}
                      width={"33%"}
                      height={"auto"}
                      border={"2px solid red"}
                      marginTop="10px"
                      cursor="pointer"
                      borderColor={eyeId === i.id ? "red" : "transparent"}
                      onClick={() => setEyeId(i.id)}
                    ></Image>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  width={"auto"}
                  flexWrap={"wrap"}
                  justifyContent="flex-start"
                >
                  {backgrounds.map((i, index) => (
                    <Image
                      key={index}
                      src={i.src}
                      width={"33%"}
                      height={"auto"}
                      border={"2px solid red"}
                      marginTop="10px"
                      cursor="pointer"
                      borderColor={
                        backgroundId === i.id ? "red" : "transparent"
                      }
                      onClick={() => setBackgroundId(i.id)}
                    ></Image>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  width={"auto"}
                  flexWrap={"wrap"}
                  justifyContent="flex-start"
                >
                  {decorations.map((i, index) => (
                    <Image
                      key={index}
                      src={i.src}
                      width={"33%"}
                      height={"auto"}
                      border={"2px solid red"}
                      marginTop="10px"
                      cursor="pointer"
                      borderColor={
                        decorationId === i.id ? "red" : "transparent"
                      }
                      onClick={() => setDecorationId(i.id)}
                    ></Image>
                  ))}
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  width={"auto"}
                  flexWrap={"wrap"}
                  justifyContent="flex-start"
                >
                  {effects.map((i, index) => (
                    <Image
                      key={index}
                      src={i.src}
                      width={"33%"}
                      height={"auto"}
                      border={"2px solid red"}
                      marginTop="10px"
                      cursor="pointer"
                      borderColor={effectId === i.id ? "red" : "transparent"}
                      onClick={() => setEffectId(i.id)}
                    ></Image>
                  ))}
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </ContentBg>
  );
}
