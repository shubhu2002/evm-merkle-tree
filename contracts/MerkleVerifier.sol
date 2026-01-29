// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MerkleVerifier is Ownable {
    bytes32 public merkleRoot;

    constructor(bytes32 _root) Ownable(msg.sender) {
        merkleRoot = _root;
    }

    function updateRoot(bytes32 _root) external onlyOwner {
        merkleRoot = _root;
    }

    function verify(
        string calldata key,
        string calldata value,
        bytes32[] calldata proof
    ) external view returns (bool) {
         bytes32 leaf = keccak256(
            abi.encodePacked(key, ":", value)
        );
        return MerkleProof.verify(
            proof,
            merkleRoot,
            leaf
        );
    }
}