import { ethers } from "hardhat";

async function main() {

  
  const TayNinhLottery = await ethers.getContractFactory("TayNinhLotteryConsumer");
  // const lottery = await TayNinhLottery.deploy(10597);
  // await lottery.deployed();
  const lottery =  TayNinhLottery.attach("0xf23AF86B85321ADbc3F4f7c8dC3f34d6103CA4dE");
  // const req = await lottery.requestRandomWords();
  // console.log("🚀 ~ file: 1_VRF-Random.ts:11 ~ main ~ req:", req.hash);
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
