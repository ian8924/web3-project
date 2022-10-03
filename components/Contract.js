import {
  useContractWrite,
  useContractRead,
  useAccount,
  useContractEvent
} from "wagmi";
import { useState } from "react";
import moment from "moment";

import styled from 'styled-components';
const List = styled.div`
  width: 100%;
  min-height: 500px;
  padding: 10px;
  background: black;
  box-sizing: border-box;
`

const RightMsg = styled.div`
  color: white;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const LeftMsg = styled.div`
  color: white;
  margin-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

`

export function Contract() {
  let comments = []
  const [input, setInput] = useState("");
  const { address } = useAccount();
  const { write, status ,isLoading } = useContractWrite({
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


  const sendMsg = () => {
    if(!address){
      alert('請先連結錢包！')
      return
    }
    write();
    setInput("")
  }

  comments = data.map(i=> JSON.parse(i))

  useContractEvent({
    addressOrName: "0xAf53559B48463e6d66A18611Ae5FA9621259c421",
    contractInterface: ["event newMessage(address user, string message)"],
    eventName: "newMessage",
    listener: (event) => {
      refetch();
    }
  });

  return (
    <div    
    style={{
      width: "500px",
    }}>
      <h3>ALL COMMENTS</h3>
      <List>
        {
          comments.map((i, index)=>{
                return(
                   i.address === address ?
                    (<RightMsg 
                      key={index}
                      style={{
                        width: "100%",
                      }}
                    >  
                      <div
                       style={{
                        marginBottom: "5PX",
                        color: 'red'
                      }}>
                        { ` ${i.address.slice(0,4)}...${i.address.slice(-5)}` } :
                      </div> 
                      <div 
                        style={{
                          width: "auto",
                          padding: "10px",
                          border: "1px solid #fff",
                          display: "inline-block",
                          borderRadius: "5px",
                          marginBottom: "5PX"
                        }}
                      >
                        {i.input}
                      </div> 
                      <div>{moment(i.time).format('MM/DD h:mm:ss a')}</div> 
                     </RightMsg>)
                    :
                    (<LeftMsg 
                      key={index}
                      style={{
                        width: "100%",
                      }}
                    >  
                      <div
                       style={{
                        marginBottom: "5PX",
                        color: 'red'
                      }}>
                        { ` ${i.address.slice(0,4)}...${i.address.slice(-5)}` } :
                      </div> 
                      <div 
                        style={{
                          width: "auto",
                          padding: "10px",
                          border: "1px solid #fff",
                          display: "inline-block",
                          borderRadius: "5px",
                          marginBottom: "5PX"
                        }}
                      >
                        {i.input}
                      </div> 
                      <div>{moment(i.time).format('MM/DD h:mm:ss a')}</div> 
                     </LeftMsg>)
                )
          })
        }
      </List>
      <div style={{
              width: "100%",
              display: "flex",
              marginTop: "10px"
            }}>
          <input
            value={input}
            style={{
              width: "100%",
              boxSizing: "border-box",
              height: "30px"
            }}
            onChange={(event) => setInput(event.target.value)}
          ></input>
          <button  style={{
              width: "200px",
              color: '#fff',
              background: "#ccc",
              boxSizing: "border-box",
              height: "30px"
            }} disabled={isLoading} onClick={() => sendMsg()}>{ isLoading ? 'Loading ...' : 'Send' }</button>
          <br />
      </div>
    </div>
  );
}
