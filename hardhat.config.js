require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("solidity-coverage")
require("hardhat-deploy")

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

// const GOERLI_RPC_URL =
//     process.env.GOERLI_RPC_URL ||
//     "https://eth-mainnet.alchemyapi.io/v2/nuJf4CPb_hCBIawRZtZCKB4yI3abwZEy"
// const PRIVATE_KEY =
//     process.env.PRIVATE_KEY ||
//     "0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a"
const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL ||
    "https://eth-goerli.g.alchemy.com/v2/nuJf4CPb_hCBIawRZtZCKB4yI3abwZEy"

const PRIVATE_KEY =
    process.env.PRIVATE_KEY ||
    "503184495e471868bcd8eb025e30be10057bf98a5d22d5b4fbe6caab6d95737d"
module.exports = {
    //solidity: "0.8.8",
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
    },
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-reporter.txt",
        noColors: true,
        currency: "USD",
        token: "MATIC",
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
}
