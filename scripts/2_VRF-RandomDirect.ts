import { ethers } from "hardhat";

async function main() {

  
  const TayNinhLottery = await ethers.getContractFactory("TayNinhLotteryDirect");
  // const lottery = await TayNinhLottery.deploy();
  // await lottery.deployed();
  const lottery =  TayNinhLottery.attach("0x023De6A0679E67f36a20Db0A7736Ac1147C1a3e1");
  const req = await lottery.requestRandomWords({
    gasLimit: 4000000
  });
  console.log("🚀 ~ file: 1_VRF-Random.ts:11 ~ main ~ req:", req.hash);
  console.log("🚀 ~ file: 2_VRF-RandomDirect.ts:13 ~ main ~ await lottery.lastLottery():", await lottery.lastLottery())
  const res = await lottery.lotteries(await lottery.lastLottery());
  console.log("🚀 ~ file: 1_VRF-Random.ts:13 ~ main ~ res:", res)
  
  console.log("🚀 ~ file: 1_VRF-Random.ts:8 ~ main ~ lottery:", lottery.address)
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
