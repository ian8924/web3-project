import React, { useState } from "react";
import { Flex, Center, Box } from "@chakra-ui/react";
import Background from "../../components/Background/Background";
import ContentBg from "../../components/Background/ContentBg";

export default function ProfilePage() {
  return (
    <ContentBg position="relative">
      <Box
        position="absolute"
        top="100px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          as="button"
          borderRadius="45px"
          border={{ base: "5px solid #425673", sm: "10px solid #425673"}}   
          width={{ base: "150px", sm: "360px" }} 
          height={{ base: "50px", sm: "90px" }} 
          fontSize={{ base: "20px", sm: "30px" }} 
          fontWeight="700"
          color="#425673"
          bg="#fff"
        >
          MINT
        </Box>
        <Box fontSize="36px" fontWeight="700" color="#425673">
          等待發放中...
        </Box>
      </Box>
      <Box
        borderRadius="lg"
        color="#425673"
        width={{ base: "90%", sm: "80%" }}
        maxWidth='1100px'
        position="absolute"
        bottom={{ base: "150px", sm: "100px" }}
        backgroundColor="rgba(255,255,255,.5)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={{ base: "16px", sm: "50px 70px" }}  
      >
        <Box fontSize={{ base: "24px", sm: "60px" }} marginBottom={{ base: "16px", sm: "24px" }}>
          Zero-Knowledge rollup
        </Box>
        <Box fontSize={{ base: "16px", sm: "24px" }} lineHeight={{ base: "24px", sm: "45px" }}>
          1. 100 ＝＞ 1 ， 100筆資料打包成1筆上鏈，實現100個人
          free-mint，只要付一次 Gas <br />
          2. 大量的 MetaData 上鏈，包裝起來一次上鏈，降低所需的開發成本 <br />
          3. 項目方的空投活動，不再需要一個一個傳送 <br />
          4. 令使用者只需利用錢包的簽章，即可 mint NFT，實現 0 Gas fee
          <br />
        </Box>
      </Box>
    </ContentBg>
  );
}
