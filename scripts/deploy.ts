import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  const data = JSON.parse(
    fs.readFileSync("./data/whitelist.json","utf8")
  );

  const Factory = await ethers.getContractFactory("MerkleVerifier");
  const contract = await Factory.deploy(data.root);

  await contract.waitForDeployment();

  console.log("Deployed to:", await contract.getAddress());
}

main();