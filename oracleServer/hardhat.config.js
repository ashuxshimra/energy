require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/vDBQKpjZ4PYRxo6oDtsPVuahfWiosx0F",
      chainId: 11155111,
      accounts: [
        "c0b9115a31e570cc2d6936efcd44f76af8efbbec1a1415b070f65804fa03af95",
      ],
    },
  },
};
