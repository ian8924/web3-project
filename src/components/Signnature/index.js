import React, { useEffect, useCallback } from "react";
import { useSignMessage, useAccount } from "wagmi";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import Alert from "../Alert/Alert";

export default function Signnature(props) {
  const { signMessageAsync: signAuth } = useSignMessage({
    message: `Mint Arjaverse NFT, Answer:${props.ans}`,
  });
  const toast = useToast();

  const { isConnected, address } = useAccount();

  useEffect(() => {
    authUser();
  }, []);
  // call useSign 確認拿到簽章
  const authUser = useCallback(async () => {
    if (isConnected) {
      try {
        const sig = await signAuth();
        if (sig) {
          props.setSignData(sig);

          axios({
            method: "post",
            url: "https://api.arjaverse.art/nft/mint",
            //API要求的資料
            data: {
              address,
              message: `Mint Arjaverse NFT, Answer:${props.ans}`,
              signature: sig,
            },
          })
            .then((res) => {
              if (res.data.msg === "Minted successfully") {
                toast({
                  duration: 2000,
                  position: "bottom",
                  render: () => (
                    <Alert
                      content="成功送出回答，請等候驗證"
                      variant="success"
                    />
                  ),
                });
                return;
              }
            })
            .catch((err) => {
              console.log(err);
              toast({
                duration: 2000,
                position: "bottom",
                render: () => <Alert content="Failed" variant="error" />,
              });
            })
            .finally(() => {
              props.reload();
            });
        }
      } catch (error) {
        console.log(error);
        toast({
          duration: 2000,
          position: "bottom",
          render: () => <Alert content="簽署失敗" variant="error" />,
        });
        props.errorLoad();
      }
    }
  }, [isConnected, signAuth]);

  return <></>;
}
