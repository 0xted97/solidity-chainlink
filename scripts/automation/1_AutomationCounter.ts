import { ethers } from "hardhat";

async function main() {

  
  const Counter = await ethers.getContractFactory("Counter");
  // const counter = await Counter.deploy(60);
  // await counter.deployed();
  const counter =  Counter.attach("0x3490D8Cb65660E7D784c610c4FCd8f33083ffbA1");
  const c = await counter.counter();
  console.log("🚀 ~ file: 1_AutomationCounter.ts:11 ~ main ~ test:", c)
  const lastTimeStamp = await counter.lastTimeStamp();
  console.log("🚀 ~ file: 1_AutomationCounter.ts:13 ~ main ~ lastTimeStamp:", lastTimeStamp)
  
  console.log("🚀 ~ file: 1_VRF-Random.ts:8 ~ main ~ price:", counter.address)
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
