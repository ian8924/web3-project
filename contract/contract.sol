// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.2;

contract ChatRoom {
    string public announcement;
    uint256 public announcementLastPaidVal;


    string[] public allComment;

    mapping(address => string[]) public userToMsgs;

    event newMessage(address user, string message);

    event newNotice();


    // 新增留言
    function newMsg(string memory input) public {
        allComment.push(input);
        userToMsgs[msg.sender].push(input);
        emit newMessage(msg.sender, input);
    }

    function showLastestMsg(uint256 len, address user) public view returns (string[] memory) {
        require(len != 0 && user != address(0), "Input not valid");

        uint256 totalLen = userToMsgs[user].length;
        uint256 finalLen = totalLen > len ? len : totalLen;
        string[] memory retMsgs = new string[](finalLen); 
        if(finalLen == 0) return retMsgs;

        uint256 index = totalLen - 1;
        uint256 k = 0;
        while(index >= 0){
            retMsgs[k] = userToMsgs[user][index];
            if(index > 0) index--;
            k++;
            if(k == finalLen) break;
        }
        return retMsgs;
    }

    // 顯示所有留言
    function showAllComment() public view returns (string[] memory) {
        return allComment;
    }


    // 公告
    function showMainCement() public view returns (string memory) {
        return announcement;
    }

    // 最後公告金額
    function showLastPaidVal() public view returns (uint256) {
        return announcementLastPaidVal;
    }


    // 覆蓋最後一筆公告
    function newAnnouncement(string memory str) public payable {
        require(msg.value > announcementLastPaidVal, "Not enough fund");
        announcementLastPaidVal = msg.value;
        announcement = str;
        emit newNotice();
    }

 
}