import { useEnsName } from "wagmi";

export const useEns = (address) => {
  const { data, isError, isLoading } = useEnsName({
    address: address,
  });
  return { data, isError, isLoading };
};
