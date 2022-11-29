import React, { useState, useCallback } from "react";
import { Box } from "@chakra-ui/react";
import ContentBg from "../../components/Background/ContentBg";
import Wave3 from "../../components/Background/Wave3";
import pop from "../../assets/images/pop.png";
import { useSignMessage, useAccount } from "wagmi";

export default function ProfilePage() {
  const { isConnected } = useAccount();
  const {
    data,
    signMessage,
    signMessageAsync: signAuth,
  } = useSignMessage({
    message: "Mint Arjaverse NFT",
  });
  const [signData, setSignData] = useState();
  //TODO check profile type

  //call useSign 確認拿到簽章
  const authUser = useCallback(async () => {
    if (isConnected) {
      try {
        const sig = await signAuth();
        if (sig) {
          setSignData(sig);
        }
      } catch (error) {
        console.log("error", error);
        //TODO:Alert
      }
    }
  }, [isConnected, signAuth]);

  return (
    <ContentBg position="relative">
      <Box
        position="absolute"
        top="70px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          width="300px"
          height="300px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          marginBottom="30px"
          position="relative"
          overflow="hidden"
          border="15px solid #425673"
        >
          <Box
            color="#425673"
            fontSize="40px"
            zIndex="2"
            fontWeight="700"
            textAlign="center"
            marginTop="-30px"
          >
            剩餘
            <Box display="flex" alignItems="flex-end" marginTop="-30px">
              <Box
                className="strokeText"
                data-Storke="20"
                id="title"
                fontSize="120px !important"
                lineHeight="120px"
              >
                20
              </Box>
              <Box color="#425673" fontSize="24px" zIndex="2" fontWeight="700">
                個
              </Box>
            </Box>
          </Box>
          <Box
            position="absolute"
            left="-20px"
            top={`calc(70% + ${-30}px)`}
            zIndex="0"
          >
            <Wave3></Wave3>
          </Box>
        </Box>
        <Box
          onClick={() => authUser()}
          as="button"
          borderRadius="45px"
          border={{ base: "5px solid #425673", sm: "10px solid #425673" }}
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
        maxWidth="1100px"
        position="absolute"
        bottom={{ base: "150px", sm: "100px" }}
        backgroundColor="rgba(255,255,255,.5)"
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={{ base: "16px", sm: "50px 70px" }}
      >
        <Box
          fontSize={{ base: "24px", sm: "60px" }}
          marginBottom={{ base: "16px", sm: "24px" }}
        >
          Zero-Knowledge rollup
        </Box>
        <Box
          fontSize={{ base: "16px", sm: "24px" }}
          lineHeight={{ base: "24px", sm: "45px" }}
        >
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
