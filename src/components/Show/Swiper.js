import React from "react";
// Import Swiper React components
import { Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Image, Box } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function SwiperItem(props) {
  const { options, triggle } = props;

  return (
    <Flex width={"200px"} height={"200px"} justifyContent={"center"}>
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        navigation={true}
        onActiveIndexChange={(index) => {
          triggle(index.activeIndex + 1);
        }}
      >
        {options.map((item, index) => (
          <SwiperSlide key={item.id} virtualIndex={index}>
            <Box width={"200px"} height={"100%"} justifyContent={"center"}>
              <Image src={item.src} width={"100%"} height={"100%"} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
}
