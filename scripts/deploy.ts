const { ethers } = require('hardhat');

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const TODO = await ethers.getContractFactory('TODO');
    const todo = await TODO.deploy();
    console.log(`TODO deployed to ${todo.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


