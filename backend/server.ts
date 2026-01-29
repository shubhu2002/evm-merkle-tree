import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
app.use(cors());

const data = JSON.parse(fs.readFileSync('./addresses-merkle-tree.json', 'utf8'));

app.get('/proof/:addressKey', (req, res) => {
	const addressKey = req.params.addressKey;

	const address = data.addresses[addressKey];
  console.log(address);

	if (!address) {
		return res.status(404).json({
			error: 'Item not present',
		});
	}

	res.json({
		merkleRoot: data.merkleRoot,
		key: addressKey,
		value: address.value,
		proof: address.proof,
	});
});

app.listen(3001, () => {
	console.log('Backend running on http//:localhost:3001');
});
