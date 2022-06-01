// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import "../../common/codec/EthProofDecoder.sol";
import "../../../lib/lib/EthereumDecoder.sol";
interface IEthProver {
    function verify(EthProofDecoder.Proof calldata proof, EthereumDecoder.TransactionReceiptTrie calldata receipt, bytes32 receiptsRoot) external returns(bool valid, string memory reason);
}