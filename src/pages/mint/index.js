import React, { useState, useCallback, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ContentBg from "../../components/Background/ContentBg";
import Wave3 from "../../components/Background/Wave3";
import pop from "../../assets/images/pop.png";
import { useSignMessage, useAccount } from "wagmi";
import axios from "axios";
import moment from "moment";

export default function ProfilePage() {
  const { isConnected } = useAccount();
  const { address } = useAccount();

  const {
    data,
    signMessage,
    signMessageAsync: signAuth,
  } = useSignMessage({
    message: "Mint Arjaverse NFT",
  });
  // 簽章資料
  const [signData, setSignData] = useState();
  // 截止/發放日期
  const [deadline, setDeadline] = useState("");

  //TODO check profile type

  useEffect(() => {
    getAmout();
    getAllmint();
  }, []);

  // 剩於數量
  const [amount, setAmount] = useState(0);
  const getAmout = () => {
    axios.get("https://arjaverse.art/nft/mint-info").then((res) => {
      // setAmount(0);
      setAmount(res.data.availableAmt);
      setDeadline(res.data.deadline);
      // setDeadline(0);
    });
  };

  // 所有 mint 地址
  const [allInfo, setAllInfo] = useState([]);
  const getAllmint = () => {
    axios.get("https://arjaverse.art/nft/getAll").then((res) => {
      setAllInfo([...res.data.data]);
    });
  };


  const getCurrentHasMint = () => {
    const idx = allInfo.findIndex((item) => {
      return item.address.toUpperCase() === address.toUpperCase();
    });
    return idx !== -1;
  };

  //call useSign 確認拿到簽章
  const authUser = useCallback(async () => {
    if (isConnected) {
      try {
        const sig = await signAuth();
        if (sig) {
          setSignData(sig);
          axios({
            method: "post",
            url: "http://139.162.88.46/nft/mint",
            //API要求的資料
            data: {
              address,
              message: "Mint Arjaverse NFT",
              signature: sig,
            },
          })
            .then((res) => {
              if(res.data.msg === 'Minted successfully') {
                alert ('成功領取，請等候發放')
              }
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(()=>{
              getAmout();
              getAllmint();
            })
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
        className="where"
        position="flex"
        mt={{ base: "5", sm: "10" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        zIndex="100"
      >
        <Box
          width={{ base: "200px", sm: "300px" }}
          height={{ base: "200px", sm: "300px" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          marginBottom="30px"
          position="relative"
          overflow="hidden"
          border={{ base: "9px solid #425673", sm: "15px solid #425673" }}
        >
          <Box
            color="#425673"
            fontSize={{ base: "30px", sm: "40px" }}
            zIndex="2"
            fontWeight="700"
            textAlign="center"
            marginTop="-30px"
          >
            剩餘
            <Box display="flex" alignItems="flex-end" marginTop="-30px">
              <Box
                className="strokeText"
                data-storke={amount}
                id="title"
                fontSize={{ base: "90px !important", sm: "120px !important" }}
                lineHeight={{ base: "100px", sm: "120px" }}
              >
                {amount}
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
        {/* 此帳號是否已經mint */}
        {getCurrentHasMint() ? 
        // 是否有過deadline
        (
          moment().valueOf() > parseInt(deadline) ? (
            <Box
              fontSize={{ base: "50px", sm: "50px" }}
              fontWeight="700"
              marginBottom="20px"
              color="red"
            >
              所有NFT已發放完畢
            </Box>
          ) : (
            <Box
              fontSize="36px"
              fontWeight="700"
              color="#425673"
              textAlign="center"
              marginBottom="20px"
            >
              此帳號已 mint 過，等待發放中... <br />
              發放時間： {moment(deadline).format("YYYY/MM/DD , h:mm")}
            </Box>
          )
        ) : amount > 0 ? (
          <Box
            onClick={() => authUser()}
            as="button"
            borderRadius="45px"
            border={{ base: "5px solid #425673", sm: "10px solid #425673" }}
            width={{ base: "150px", sm: "360px" }}
            height={{ base: "50px", sm: "90px" }}
            fontSize={{ base: "20px", sm: "30px" }}
            fontWeight="700"
            marginBottom='30px'
            color="#425673"
            bg="#fff"
          >
            MINT
          </Box>
        ) : (
          <Box
            fontSize={{ base: "50px", sm: "50px" }}
            fontWeight="700"
            marginBottom="20px"
            color="red"
          >
            所有NFT已發放完畢
          </Box>
        )}
        <Box
          borderRadius="lg"
          color="#425673"
          width={{ base: "90%", sm: "80%" }}
          maxWidth="1100px"
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
      </Box>
    </ContentBg>
  );
}
