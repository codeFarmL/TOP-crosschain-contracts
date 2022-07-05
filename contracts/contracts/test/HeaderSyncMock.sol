// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HeaderSyncMock{
    constructor() {
    }
    
    function is_confirmed(bytes32 blockHash) public pure returns (bool success) {
        return true;
    }
}