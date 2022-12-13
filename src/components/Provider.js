import { createContext, useCallback, useState } from "react";
import { useAccount } from "wagmi";
import { getContract } from "../hooks/useContract";

export const AccountContext = createContext({
  contractAction: undefined,
  getContractAction: () => {},
  getAddressBalanceOf: () => {},
  ifAddressHasNFT: false,
  userTokenID: undefined,
});

export const Provider = ({ children }) => {
  const { address } = useAccount();
  const [contractAction, setContractAction] = useState();
  const [ifAddressHasNFT, setIfAddressHasNFT] = useState(false);
  const [userTokenID, setUserTokenID] = useState();

  const getContractAction = useCallback(async () => {
    const contract = await getContract();
    setContractAction(contract);
    console.log("Pr:contract", contract);
  }, []);

  const getAddressBalanceOf = async () => {
    const contract = await getContract();
    const balanceOf = await contract?.balanceOf(address);
    console.log("Pr:balanceOf", balanceOf);
    if (balanceOf?.toNumber()) {
      const tokenID = await contract?.tokenOfOwnerByIndex(address, 0);
      setIfAddressHasNFT(true);
      setUserTokenID(tokenID);
    } else setIfAddressHasNFT(false);
  };

  return (
    <AccountContext.Provider
      value={{
        contractAction,
        getContractAction,
        getAddressBalanceOf,
        ifAddressHasNFT,
        userTokenID,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
