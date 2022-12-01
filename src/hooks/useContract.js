import { ethers } from 'ethers';
import ERC721_ABI from '../components/Abi/ERC721-ABI.json';
const gor="https://goerli.infura.io/v3/daf792c59ab34774b94d37ed208b41fe"
const eth ="https://mainnet.infura.io/v3/daf792c59ab34774b94d37ed208b41fe"
export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(eth);

export const getContract = (abi = ERC721_ABI, address='0xf132f2c8F1EedE27070E0850775436A0E6e7268A', signer) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};