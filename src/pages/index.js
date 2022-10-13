import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ChakraProvider } from "@chakra-ui/react";
import { AccountBoard } from "../components/AccountBoard";
import { Contract } from "../components/Contract";
import React from "react";
import NonSSRWrapper from "../components/NoSSRWrapper";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.goerli],
  [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function IndexPage() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <ChakraProvider>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              padding: "50px",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center"
            }}
          >
            <ConnectButton />
            {/* nonSSR -> prevent hydration error */}
            <NonSSRWrapper>
              <AccountBoard></AccountBoard>
              <Contract />
            </NonSSRWrapper>
            {/* <h2> {address}</h2> */}
          </div>
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
