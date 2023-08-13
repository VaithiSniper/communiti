require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: __dirname + "/.env.local" });
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
      },
      {
        version: "0.8.17",
      },
    ],
  },
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: "https://gateway.tenderly.co/public/polygon-mumbai",
      accounts: [process.env.NEXT_PUBLIC_PRIVATEKEY],
    },
    gnosis: {
      url: "https://rpc.chiadochain.net",
      accounts: [process.env.NEXT_PUBLIC_PRIVATEKEY],
    },
    optimism: {
      url: "https://endpoints.omniatech.io/v1/op/goerli/public",
      accounts: [process.env.NEXT_PUBLIC_PRIVATEKEY],
    },
    base: {
      url: "https://base-goerli.public.blastapi.io/",
      accounts: [process.env.NEXT_PUBLIC_PRIVATEKEY],
    },
    mode: {
      url: "https://sepolia.mode.network/",
      accounts: [process.env.NEXT_PUBLIC_PRIVATEKEY],
    }
  },
};