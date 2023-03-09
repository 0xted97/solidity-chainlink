import { ethers } from "hardhat";

async function main() {

  
  const PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
  // const priceFeed = await PriceConsumerV3.deploy();
  // await priceFeed.deployed();
  const priceFeed =  PriceConsumerV3.attach("0x081BE04f7933d325cBef02bcc6233981d407462E");


  const priceBTCUSD = await priceFeed["getLatestPrice()"]();
  console.log("🚀 ~ file: 1_PriceFeed.ts:11 ~ main ~ priceBTCUSD:", priceBTCUSD)

  const priceETHUSD = await priceFeed["getLatestPrice(address)"]("0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e");
  console.log("🚀 ~ file: 1_PriceFeed.ts:11 ~ main ~ priceBTCUSD:", priceETHUSD)

  
  console.log("🚀 ~ file: 1_VRF-Random.ts:8 ~ main ~ price:", priceFeed.address)
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
