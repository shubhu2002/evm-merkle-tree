# 🌳 Merkle Whitelist – Full Stack Example

A **production-ready Merkle Tree whitelist implementation** demonstrating off-chain generation, on-chain verification, and a complete full-stack flow for Web3 applications.

[![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue)](https://soliditylang.org/)
[![Hardhat](https://img.shields.io/badge/Hardhat-Latest-yellow)](https://hardhat.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

---

## 📖 Overview

This project demonstrates a complete Merkle Tree whitelist system with:

- **Off-chain Merkle tree generation** (TypeScript)
- **On-chain verification** (Solidity smart contract)
- **Backend API** to serve Merkle proofs (Express)
- **Frontend script** to verify eligibility

Perfect for implementing:
- 🎨 NFT whitelist mints
- 🪂 Token airdrops
- 🔐 Access control systems
- ✅ Allowlist verification

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Hardhat** | Ethereum development environment |
| **Solidity** | Smart contract language |
| **TypeScript** | Type-safe JavaScript |
| **ethers.js v6** | Ethereum library |
| **merkletreejs** | Merkle tree implementation |
| **Express** | Backend API server |

---

## 📁 Project Structure

```
evm-merkle-tree/
│
├── backend/
│   └── server.ts                 # Express API to serve Merkle proofs
│
├── contracts/
│   └── MerkleVerifier.sol        # Solidity contract for verification
│
├── data/
│   └── whitelist.json            # List of whitelisted addresses
│
├── frontend/
│   └── verify.js                 # Frontend script to verify eligibility
│
├── scripts/
│   ├── deploy.ts                 # Deploy MerkleVerifier contract
│   └── generateMerkle.ts         # Generate Merkle tree and root
│
├── test/
│   └── MerkleVerifier.test.ts    # Unit tests for contract
│
├── .gitignore                    # Git ignore rules
├── hardhat.config.ts             # Hardhat configuration
├── package.json                  # Project dependencies
├── package-lock.json             # Dependency lock file
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js v16+ 
- npm or yarn
- Basic understanding of Ethereum and smart contracts

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shubhu2002/evm-merkle-tree.git
   cd evm-merkle-tree
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

---

## 📝 Usage

### Step 1: Start Local Hardhat Node

Open a terminal and run:
```bash
npm run node
```
*Keep this terminal running*

### Step 2: Deploy Contract

Open **another terminal** and run:
```bash
npm run deploy
```

This will:
- Generate the Merkle tree from `whitelist.json`
- Deploy the `MerkleVerifier` contract with the root
- Display the contract address

### Step 3: Generate Merkle Tree (Optional)

To regenerate the Merkle tree separately:
```bash
npm run generate
```

### Step 4: Start Backend API (Optional)

To serve Merkle proofs via REST API:
```bash
npm run backend
```

API will be available at `http://localhost:3001`

**Endpoints:**
- `GET /proof/:address` - Get Merkle proof for an address

### Step 5: Verify Address (Optional)

Run the frontend verification script:
```bash
npm run verify
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run node` | Generate Merkle tree && Start local Hardhat blockchain node |
| `npm run compile` | Compile Solidity contracts |
| `npm run deploy` | Deploy MerkleVerifier contract to local network |
| `npm run generate` | Generate Merkle tree from whitelist.json |
| `npm run backend` | Start Express API server for proofs |
| `npm run verify` | Run frontend address verification |

---

## 🐛 Troubleshooting

### Common Issues

**Issue: "Cannot find module" errors**
```bash
npm install
npx hardhat clean
npx hardhat compile
```

**Issue: "Invalid proof" in tests**
- Ensure addresses in whitelist.json are checksummed
- Verify sortPairs is set to true in MerkleTree options

**Issue: Deploy script fails**
```bash
# Restart Hardhat node
npm run node

# In new terminal
npm run deploy
```

**Issue: Backend server won't start**
- Check if port 3000 is already in use
- Ensure whitelist.json exists and is valid JSON

---

## 📚 Learn More

### Merkle Trees
- [Merkle Tree Wikipedia](https://en.wikipedia.org/wiki/Merkle_tree)
- [Understanding Merkle Trees](https://brilliant.org/wiki/merkle-tree/)

### Smart Contract Development
- [Hardhat Documentation](https://hardhat.org/docs)
- [Solidity Documentation](https://docs.soliditylang.org/)
- [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)

### Web3 Integration
- [ethers.js Documentation](https://docs.ethers.org/)
- [Web3 Provider Guide](https://docs.metamask.io/guide/ethereum-provider.html)

---