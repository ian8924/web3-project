import { ethers } from "ethers";
import ERC721_ABI from "../components/Abi/ERC721-ABI.json";
const goerliAPI =
  "https://goerli.infura.io/v3/daf792c59ab34774b94d37ed208b41fe";
const ethAPI = "https://mainnet.infura.io/v3/daf792c59ab34774b94d37ed208b41fe";
const contract = "0x03eea51d8a3414df00c32a90bdc2c7bb9aa51f68";

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(
  goerliAPI
);

export const getContract = (abi = ERC721_ABI, address = contract, signer) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};
