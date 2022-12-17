import { ethers } from "ethers";
import ERC721_ABI from "../components/Abi/ERC721-ABI.json";
const goerliAPI =
  "https://goerli.infura.io/v3/daf792c59ab34774b94d37ed208b41fe";
const ethAPI = "https://mainnet.infura.io/v3/daf792c59ab34774b94d37ed208b41fe";
const contract = "0x8bcb8314199484abac99914683cbd9f87161412a";

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(
  ethAPI
);

export const getContract = (abi = ERC721_ABI, address = contract, signer) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};
