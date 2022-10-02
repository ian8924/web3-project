import {
  useContractWrite,
  useContractRead,
  useAccount,
  useContractEvent
} from "wagmi";
import { useState } from "react";

export function Contract() {
  const [input, setInput] = useState("");
  const { address } = useAccount();
  const { write, status } = useContractWrite({
    addressOrName: "0x46708Db9eee8735991CC5F6EA0d610161D59D77E",
    contractInterface: ["function newMsg(string memory str)"],
    functionName: "newMsg",
    args: [input],
    chainId: 5
  });
  const { data, refetch } = useContractRead({
    addressOrName: "0x46708Db9eee8735991CC5F6EA0d610161D59D77E",
    contractInterface: [
      "function showLastestMsg(uint256 len, address user) public view returns (string[] memory)"
    ],
    functionName: "showLastestMsg",
    args: ["5", address],
    chainId: 5
  });
  // console.log(data);
  useContractEvent({
    addressOrName: "0x46708Db9eee8735991CC5F6EA0d610161D59D77E",
    contractInterface: ["event newMessage(address user, string message)"],
    eventName: "newMessage",
    listener: (event) => {
      // console.log(event);
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

  // <div>{JSON.stringify(data)}</div>;
}
