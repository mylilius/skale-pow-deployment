import { ethers } from "hardhat";

async function main() {

  const factory = await ethers.getContractFactory("PoWPayer");
  const contract = await factory.deploy({
    value: ethers.utils.parseEther("1000")
  });

  await contract.deployed();

  console.log("PoWPayer deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
