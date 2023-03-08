import * as dotenv from 'dotenv';
dotenv.config();
const PRIVATE_KEY = process.env.PRIVATE_KEY;
export const goerli = {
    nodeUrl: "https://rpc.ankr.com/eth_goerli",
    accounts: [String(PRIVATE_KEY)],
};

