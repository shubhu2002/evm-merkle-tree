import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  const data = JSON.parse(
    fs.readFileSync("./addresses-merkle-tree.json","utf8")
  );
console.log(data.root);
  const Factory = await ethers.getContractFactory("MerkleVerifier");
  const contract = await Factory.deploy(data.root);

  await contract.waitForDeployment();

  console.log("Deployed to:", await contract.getAddress());
}

main();