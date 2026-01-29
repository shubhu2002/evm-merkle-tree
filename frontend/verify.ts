import axios from 'axios';
import { ethers } from 'ethers';

const CONTRACT = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

const ABI = [
	'function verify(string key,string value,bytes32[] proof) view returns(bool)',
];

async function verify(addressKey: string) {
	try {
		const { data } = await axios.get(
			`http://localhost:3001/proof/${addressKey}`,
		);

		if (data.error) {
			console.log('❌ Not in tree');
			return;
		}

		// Connect provider
		const provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545');

		const contract = new ethers.Contract(CONTRACT, ABI, provider);

		const valid = await contract.verify(data.key, data.value, data.proof);

		console.log(data.key + ' : ' + data.value);
		console.log('isValid : ', valid);
	} catch (error: any) {
		console.log(error.response.data);
	}
}

verify('user1');
