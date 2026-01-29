import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
import fs from "fs";

// const addresses = [
//   "0x1111111111111111111111111111111111111111",
//   "0x2222222222222222222222222222222222222222",
//   "0x3333333333333333333333333333333333333333"
// ];

// const leaves = addresses.map(a => keccak256(a));
// const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });

// const root = tree.getHexRoot();

// const proofs: Record<string,string[]> = {};

// addresses.forEach(addr => {
//   proofs[addr] = tree.getHexProof(keccak256(addr));
// });

// fs.writeFileSync(
//   "./data/whitelist.json",
//   JSON.stringify({ root, addresses, proofs }, null, 2)
// );

// console.log("Merkle Root:", root);

// ✅ Key-value addresses
const addresses = {
  "user1":"0x1111111111111111111111111111111111111111",
  "user2":"0x2222222222222222222222222222222222222222",
  "user3":"0x3333333333333333333333333333333333333333"
}

// Convert to entries
const entries = Object.entries(addresses);

// Create leaves from BOTH key + value
const leaves = entries.map(([key, value]) =>
  keccak256(key + ":" + value)
);

// Build tree
const tree = new MerkleTree(leaves, keccak256, {
  sortPairs: true
});

const root = tree.getHexRoot();

// Build output JSON
const output:any = {};

entries.forEach(([key, value]) => {
  const leaf = keccak256(key + ":" + value);

  output[key] = {
    value,
    leaf: "0x" + leaf.toString("hex"),
    proof: tree.getHexProof(leaf)
  };
});

// Save JSON
fs.writeFileSync(
  "./addresses-merkle-tree.json",
  JSON.stringify(
    {
      root: root,
      addresses: output
    },
    null,
    2
  )
);

console.log("✅ Merkle Root:", root);
console.log("✅ JSON saved to items-merkle.json");