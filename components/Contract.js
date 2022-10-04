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
  const [inputNotice, setInputNotice] = useState("");

  const [inputValue, setInputValue] = useState(0);

  const { address } = useAccount();

  const [pending,setPending] = useState(false);

  // 訊息
  const { write, status ,isLoading } = useContractWrite({
    addressOrName: "0xA3cB525d8F7a9F3c267DC241f7C8148B71d7d5c4",
    contractInterface: ["function newMsg(string memory input) public"],
    functionName: "newMsg",
    args:  [  JSON.stringify({ address, input, time: moment().format() }) ],
    chainId: 5
  });

  const { data , refetch } =  useContractRead({
    addressOrName: "0xA3cB525d8F7a9F3c267DC241f7C8148B71d7d5c4",
    contractInterface: [
      "function showAllComment() public view returns (string[] memory)"
    ],
    functionName: "showAllComment",
    chainId: 5
  });


  //  新增公告
  const { write: writeMain , isLoading: isLoading2 , isSuccess } = useContractWrite({
    addressOrName: "0xA3cB525d8F7a9F3c267DC241f7C8148B71d7d5c4",
    contractInterface: ["function newAnnouncement(string memory str) public payable"],
    functionName: "newAnnouncement",
    args:  [ inputNotice ],
    overrides: {
      from: address,
      value: inputValue,
    },
    chainId: 5
  });


  // 取得公告
  const { data: mainNotice ,refetch : refetchShowMainCement} =  useContractRead({
    addressOrName: "0xA3cB525d8F7a9F3c267DC241f7C8148B71d7d5c4",
    contractInterface: [
      "function showMainCement() public view returns (string memory)"
    ],
    functionName: "showMainCement",
    chainId: 5
  });


   // 取得最後公告花費
   const { data: lastPaidVal, refetch : refetchShowLastPaidVal } =  useContractRead({
    addressOrName: "0xA3cB525d8F7a9F3c267DC241f7C8148B71d7d5c4",
    contractInterface: [
      "function showLastPaidVal() public view returns (uint256)"
    ],
    functionName: "showLastPaidVal",
    chainId: 5
  });


  const sendMsg = () => {
    if(!address){
      alert('請先連結錢包！')
      return
    }
    setPending(true);
    write();
    setInput("")
  }

  const sendNotice =()=> {
    if(inputValue <= parseInt(lastPaidVal.toString())){
      alert('金額不夠')
      return
    }
    setPending(true);
    writeMain();
    setInputNotice("");
  }

  if(data && data.length>0) {
    comments = data.map(i=> JSON.parse(i))
  } else {
    comments =[]
  }

  useContractEvent({
    addressOrName: "0xA3cB525d8F7a9F3c267DC241f7C8148B71d7d5c4",
    contractInterface: ["event newMessage(address user, string message)"],
    eventName: "newMessage",
    listener: (event) => {
      refetch();
      setPending(false);
    }
  });

  useContractEvent({
    addressOrName: "0xA3cB525d8F7a9F3c267DC241f7C8148B71d7d5c4",
    contractInterface: ["event newNotice()"],
    eventName: "newNotice",
    listener: (event) => {
      refetchShowLastPaidVal();
      refetchShowMainCement();
      setPending(false);
    }
  });

  return (
    <div    
    style={{
      width: "500px",
      paddingBottom:"100px"
    }}>
      <h3>ALL COMMENTS</h3>
      <h3>
        公告 ：  { mainNotice }<br/>
      </h3>
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
              marginTop: "10px",
              marginBottom: "10px"
            }}>
          <input
            value={input}
            style={{
              width: "100%",
              boxSizing: "border-box",
              height: "30px"
            }}
            placeholder="輸入訊息"
            onChange={(event) => setInput(event.target.value)}
          ></input>
          <button  style={{
              width: "200px",
              color: '#fff',
              background: "#ccc",
              boxSizing: "border-box",
              height: "30px"
            }} disabled={isLoading} onClick={() => sendMsg()}>{ pending ? 'Loading ...' : 'Send' }
          </button>
          <br />
         
      </div>
      設定金額:
      <input
        value={inputValue}
        type="number"
        style={{
          marginLeft:"10px",
          width: "100px",
          boxSizing: "border-box",
          height: "30px"
        }}
        placeholder="輸入金額"
        onChange={(event) => setInputValue(event.target.value)}
      />  （目前金額：{ lastPaidVal && lastPaidVal.toString() }）

      <input
        value={inputNotice}
        style={{
          width: "90%",
          boxSizing: "border-box",
          height: "30px",
          marginTop: "10px"
        }}
        placeholder="輸入公告"
        onChange={(event) => setInputNotice(event.target.value)}
      />
      <button  style={{
        width: "200px",
        color: '#fff',
        background: "#ccc",
        marginTop: "10px",
        marginRight: "10px",
        boxSizing: "border-box",
        height: "30px"
      }} disabled={isLoading} onClick={() => sendNotice()}>{ pending ? 'Loading ...' : 'Send' }</button>
    </div>
  );
}
