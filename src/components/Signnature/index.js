import React, { useState, useEffect, useCallback } from "react";
import { useSignMessage, useAccount } from "wagmi";

export default function Signnature(props) {
  const {
    data,
    signMessage,
    signMessageAsync: signAuth,
  } = useSignMessage({
    message: `Mint Arjaverse NFT , Question=${props.ans}`,
  });
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
              message: `Mint Arjaverse NFT , Question=${question}`,
              signature: sig,
            },
          })
            .then((res) => {
              if (res.data.msg === "Minted successfully") {
                alert("成功領取，請等候發放");
              }
            })
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              props.reload();
            });
        }
      } catch (error) {
        alert("簽署失敗");
        props.errorLoad();
      }
    }
  }, [isConnected, signAuth]);

  return (
    <>
    </>
  );
}
