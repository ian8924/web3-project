import {
  useContractWrite,
  useContractRead,
  useAccount,
  useContractEvent
} from "wagmi";
import { useState } from "react";
import moment from "moment";

export function Contract() {
  const [input, setInput] = useState("");
  const { address } = useAccount();
  const { write, status } = useContractWrite({
    addressOrName: "0xAf53559B48463e6d66A18611Ae5FA9621259c421",
    contractInterface: ["function newMsg(string memory input) public"],
    functionName: "newMsg",
    args:  [  JSON.stringify({ address, input, time: moment().format() }) ],
    chainId: 5
  });

  const { data , refetch } =  useContractRead({
    addressOrName: "0xAf53559B48463e6d66A18611Ae5FA9621259c421",
    contractInterface: [
      "function showAllComment() public view returns (string[] memory)"
    ],
    functionName: "showAllComment",
    chainId: 5
  });

  useContractEvent({
    addressOrName: "0xAf53559B48463e6d66A18611Ae5FA9621259c421",
    contractInterface: ["event newMessage(address user, string message)"],
    eventName: "newMessage",
    listener: (event) => {
      refetch();
    }
  });

  return (
    <>
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></input>
        <button onClick={() => write()}>Send</button>
        <br />
        <span style={{ color: "grey" }}>Tx Status: {status}</span>
      </div>
      <h3>My messages:</h3>
      {data && <pre>&gt; {data.join("\r\n> ")}</pre>}
    </>
  );
}
