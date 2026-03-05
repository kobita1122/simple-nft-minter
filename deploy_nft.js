const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying NFT with account:", deployer.address);

  const NFT = await hre.ethers.getContractFactory("NFTMinter");
  const nft = await NFT.deploy("DigitalCollectibles", "DCX");

  await nft.waitForDeployment();

  console.log("NFT Contract deployed to:", await nft.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
