import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import "@openzeppelin/hardhat-upgrades";
import "@openzeppelin/test-helpers";
import "@nomiclabs/hardhat-web3";
import "@nomiclabs/hardhat-ethers";
const config: HardhatUserConfig = {
  solidity: "0.8.18",
};

export default config;
