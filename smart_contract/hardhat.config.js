// https://eth-goerli.g.alchemy.com/v2/dAVdQcEweK-f4sF_93-L3EkNP4SNtgna

require('@nomiclabs/hardhat-waffle')

module.exports={
  solidity : '0.8.0',
  networks:{
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/dAVdQcEweK-f4sF_93-L3EkNP4SNtgna',
      accounts: ['7b438916a7fe24fd48d79272bc9129121a4daf27f23a013c37380d1d4560e70d']
    }
   
  }
}