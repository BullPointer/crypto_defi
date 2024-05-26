const hre = require("hardhat");

async function main() {
  const CryptoDefi = await hre.ethers.getContractFactory("LendDefi");
  const cryptodefi = await CryptoDefi.deploy();

  await cryptodefi.deployed();

  console.log(`contract address ${cryptodefi.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode(1);
});
