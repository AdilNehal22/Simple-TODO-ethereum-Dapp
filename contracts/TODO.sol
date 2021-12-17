// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.10;

contract TODO {

    address User; 
    string[] public listOfTasks; 

    constructor(){
        User = msg.sender;
    }

    function addTasks(string memory task) public {
        listOfTasks.push(task);
    }

    function showTasks() public view returns(string[] memory){
        return listOfTasks;
    }

}
