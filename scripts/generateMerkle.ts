import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import fs from "fs";

const addresses = [
  "0x1111111111111111111111111111111111111111",
  "0x2222222222222222222222222222222222222222",
  "0x3333333333333333333333333333333333333333"
];

const leaves = addresses.map(a => keccak256(a));
const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

const root = tree.getHexRoot();

const proofs: Record<string,string[]> = {};

addresses.forEach(addr => {
  proofs[addr] = tree.getHexProof(keccak256(addr));
});

fs.writeFileSync(
  "./data/whitelist.json",
  JSON.stringify({ root, addresses, proofs }, null, 2)
);

console.log("Merkle Root:", root);