import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as rpcList from "./configs/rpc-list";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: rpcList.goerli.nodeUrl,
      accounts: rpcList.goerli.accounts
    },
  },
};

export default config;
