import React, { useContext, useEffect } from "react";
// import Image from 'next/dist/client/image';
import { Flex, useToast } from "@chakra-ui/react";
import Mobile from "./HeaderMobile";
import Desktop from "./HeaderDesktop";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import Alert from "../Alert/Alert";
import { AccountContext } from "../Provider";

export default function Header() {
  const { getContractAction, getAddressBalanceOf, ifAddressHasNFT } =
    useContext(AccountContext);
  const router = useRouter();
  const { address } = useAccount();
  const toast = useToast();

  const goPage = (page) => {
    if (page !== "/") {
      if (!address) {
        toast({
          duration: 2000,
          position: "bottom",
          render: () => (
            <Alert content="Please connect wallet First !" variant="info" />
          ),
        });
        return;
      }
    }
    router.push(page);
  };

  useEffect(() => {
    getContractAction();
  }, []);

  useEffect(() => {
    if (address) {
      getAddressBalanceOf();
    }
  }, [address]);
  return (
    <Flex
      justify="space-between"
      align="center"
      px={{ base: "8px", sm: "2.5rem", md: "2.5rem" }}
      py={{ base: "8px", sm: "8px", md: "8px" }}
      overflow="hidden"
      className="absolute z-50 h-20 w-full bg-white shadow-top"
    >
      <Desktop goPage={goPage} ifAddressHasNFT={ifAddressHasNFT} />
      <Mobile goPage={goPage} ifAddressHasNFT={ifAddressHasNFT} />
    </Flex>
  );
}
