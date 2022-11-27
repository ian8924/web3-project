import { useEffect, useState } from 'react';
import { chain, useSignTypedData } from 'wagmi';


export const useSign = () => {
  const [typedData, setTypedData] = useState({
    domain: {},
    types: {},
    value: {},
  });

  useEffect(() => {
    setTypedData({
      domain: {
        name: 'Arjaverse',
        version: '1',
        chainId: chain.goerli.id, //TODO:Change to etherum
        verifyingContract: '0x',//TODO:ADD Contract
      },
      types: {
        Main: [
          { name: 'Arjaverse', type: 'string' },
          { name: 'Action', type: 'string' },
        ],
      },
      value: {
        Authentication: 'Arjaverse',
        Action: 'Mint Arjaverse NFT',
      },
    });
  }, []);

  const {
    data: signature,
    isError,
    isLoading,
    isSuccess,
    signTypedDataAsync,
  } = useSignTypedData({
    domain: typedData.domain,
    types: typedData.types,
    value: typedData.value,
  });
  return { signature, isError, isLoading, isSuccess, signTypedDataAsync };
};