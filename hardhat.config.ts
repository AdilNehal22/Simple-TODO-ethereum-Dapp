require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require('@typechain/hardhat');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const RINKEBY_PRIVATE_KEY = 'cd092112a556a2debb7de717d6ae346b9e03fba7bb766ed65f9d4def9026fb5b'
 
module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/_5QVXV_ygFJeaurW7DOS91fvJa64ufY-',
      accounts: [`${RINKEBY_PRIVATE_KEY}`]
    }
  }
};

