import { useEffect, useState } from 'react';
import { useSignMessage ,useEnsName} from 'wagmi';
import { chain } from 'wagmi';


export const useEns = (address) => {
    const { data, isError, isLoading } = useEnsName({
        address: address
      })
  return {  data, isError, isLoading };
};