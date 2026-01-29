import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();
app.use(cors());

const data = JSON.parse(
  fs.readFileSync("./data/whitelist.json","utf8")
);

app.get("/proof/:address",(req,res)=>{
  const addr = req.params.address;

  const proof = data.proofs[addr];

  if(!proof){
    return res.status(404).json({error:"Not whitelisted"});
  }

  res.json({
    root: data.root,
    proof
  });
});

app.listen(3001,()=>{
  console.log("Backend running on http//:localhost:3001");
});