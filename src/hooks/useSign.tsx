import { useEffect, useState } from 'react';
import { useSignMessage } from 'wagmi';
import { chain } from 'wagmi';


export const useSign = () => {
  const { data, isError, isLoading, isSuccess, signMessage,signMessageAsync } = useSignMessage({
    message: 'Mint Arjaverse NFT',
  })
  return { data, isError, isLoading, isSuccess, signMessage,signMessageAsync };
};