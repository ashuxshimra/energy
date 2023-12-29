require('@nomiclabs/hardhat-waffle')
module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/PAO3fHb_GVylAPnOI8IgpIMuckE1PDkg',
      accounts: [
        '98db0fda5e3c0637e4bbf795440d2716f965edea18a495424862423529b9e5b6',
      ],
    },
    sepolia: {
      url: 'https://eth-mainnet.g.alchemy.com/v2/PAO3fHb_GVylAPnOI8IgpIMuckE1PDkg',
      accounts: [
        '98db0fda5e3c0637e4bbf795440d2716f965edea18a495424862423529b9e5b6',
      ],
    },
  },
}

// TODO: Create Metamask wallets and insert private key in accounts array