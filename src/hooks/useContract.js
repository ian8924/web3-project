import { ethers } from "ethers";
import ERC721_ABI from "../components/Abi/ERC721-ABI.json";
const goerliAPI =
  "https://goerli.infura.io/v3/daf792c59ab34774b94d37ed208b41fe";
const ethAPI = "https://mainnet.infura.io/v3/daf792c59ab34774b94d37ed208b41fe";
const contract = "0x921eb8e0305b428a9eed6cc228f92ca3073bd4e0";

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(
  goerliAPI
);

export const getContract = (abi = ERC721_ABI, address = contract, signer) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};
