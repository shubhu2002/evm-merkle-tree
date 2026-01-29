import { ethers } from "ethers";

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // deployed contract address 
const abi = [
  "function verify(address account, bytes32[] calldata proof) view returns (bool)"
];

async function verify(address:string){
  const res = await fetch(`http://localhost:3001/proof/${address}`);

  const { proof } = await res.json();
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

  const contract = new ethers.Contract(
    contractAddress,
    abi,
    provider
  );

  const valid = await contract.verify(address, proof);

  console.log("Valid:", valid);
}

verify("0x1111111111111111111111111111111111111111");