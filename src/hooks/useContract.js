import { ethers } from 'ethers';
import ERC721_ABI from '../components/Abi/ERC721-ABI.json';
const goerliAPI="https://goerli.infura.io/v3/daf792c59ab34774b94d37ed208b41fe"
const ethAPI ="https://mainnet.infura.io/v3/daf792c59ab34774b94d37ed208b41fe"

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(goerliAPI);

export const getContract = (abi = ERC721_ABI, address='0x80DA9A173F4AE036a8cc060B602153FC7b48b763', signer) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};