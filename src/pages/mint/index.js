import React, { useState, useCallback, useEffect, useRef } from "react";
import { Box, Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import ContentBg from "../../components/Background/ContentBg";
import Wave3 from "../../components/Background/Wave3";
import { useSignMessage, useAccount } from "wagmi";
import axios from "axios";
import moment from "moment";
import ModalQuestion from "../../components/Modal/Modal";
import Signnature from "../../components/Signnature";

export default function ProfilePage() {
  const modalRef = useRef();
  // 帳戶
  const { isConnected, address } = useAccount();
  // 簽章資料
  const [signData, setSignData] = useState();
  // 截止/發放日期
  const [deadline, setDeadline] = useState("");
  // 剩於數量
  const [amount, setAmount] = useState(0);
  // 所有 mint 地址
  const [allInfo, setAllInfo] = useState([]);
  // 問題
  const [question, setQuestion] = useState("");

  const getAmout = () => {
    axios.get("https://api.arjaverse.art/nft/mint-info").then((res) => {
      setAmount(res.data.availableAmt);
      setDeadline(res.data.deadline);
    });
  };
  const getAllmint = () => {
    axios.get("https://api.arjaverse.art/nft/getAll").then((res) => {
      setAllInfo([...res.data.data]);
    });
  };
  //TODO check profile type
  useEffect(() => {
    getAmout();
    getAllmint();
  }, []);

  const getCurrentHasMint = () => {
    const idx = allInfo.findIndex((item) => {
      return item.address.toUpperCase() === address.toUpperCase();
    });
    return idx !== -1;
  };

  // 確認問題
  const confirmQuestion = (val) => {
    modalRef.current.closeModal();
    setQuestion(val);
  };

  const reload = () => {
    getAmout();
    getAllmint();
  };

  const errorLoad = () => {
    setQuestion("");
  };
  return (
    <>
      {/* <Alert status="error">
        <AlertIcon />
        <AlertTitle>簽署失敗</AlertTitle>
      </Alert> */}
      {question ? (
        <Signnature
          ans={question}
          setSignData={setSignData}
          errorLoad={errorLoad}
          reload={reload}
        />
      ) : (
        ""
      )}
      <ModalQuestion ref={modalRef} confirmQuestion={confirmQuestion} />
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
                <Box
                  color="#425673"
                  fontSize="24px"
                  zIndex="2"
                  fontWeight="700"
                >
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
          {getCurrentHasMint() ? (
            // 是否有過deadline
            moment().valueOf() > parseInt(deadline) ? (
              <Box
                fontSize={{ base: "30px", sm: "50px" }}
                fontWeight="700"
                marginBottom="20px"
                color="red"
              >
                All NFTs have been sent
              </Box>
            ) : (
              <Box
                fontSize={{ base: "30px", sm: "30px" }}
                fontWeight="700"
                color="#425673"
                textAlign="center"
                marginBottom="20px"
              >
                This account has already answered, waiting for verification... <br />
                {/* 發放時間： {moment(deadline).format("YYYY/MM/DD , h:mm")} */}
              </Box>
            )
          ) : amount > 0 ? (
            <Box
              onClick={() => modalRef.current.openModal()}
              as="button"
              borderRadius="45px"
              border={{ base: "5px solid #425673", sm: "10px solid #425673" }}
              width={{ base: "150px", sm: "360px" }}
              height={{ base: "50px", sm: "90px" }}
              fontSize={{ base: "20px", sm: "30px" }}
              fontWeight="700"
              marginBottom="30px"
              color="#425673"
              bg="#fff"
            >
              MINT
            </Box>
          ) : (
            <Box
              fontSize={{ base: "30px", sm: "50px" }}
              fontWeight="700"
              marginBottom="20px"
              color="red"
            >
              All NFTs have been sent
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
              1. N ➜ 1,  N Transactions can package into 1 transaction and achieve many people free-minting, only paying once for the gas fee of the rollup.
              <br />
              2. ZKP decentralized verification, verified on smart contract and not on frontend or backend.
              <br />
              3. Perfect UX, only need signature and without any gas fee.
              <br />
            </Box>
          </Box>
        </Box>
      </ContentBg>
    </>
  );
}
