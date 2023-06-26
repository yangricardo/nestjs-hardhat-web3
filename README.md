# PUC-Rio EVM Gateway Template

Monorepo that to be the base implementation for EVM based projects

- [packages/smart-contracts](./packages/smart-contracts/): internal package based on [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started) that auto generates Ethers clients for Smart Contracts for TDD development, but can also be used for actual Backend project implementation
- [apps/web3gateway](./apps/web3gateway/): backend api based on [NestJS](https://docs.nestjs.com/) that runs integration with EVM networks. Also could be used to implement main backend using NestJS recipes:
  - [Prisma ORM](https://docs.nestjs.com/recipes/prisma#set-up-prisma), that self generates operations to interact with databases like PostgreSQL or MongoDB
  - [Swagger](https://docs.nestjs.com/openapi/introduction), that self generates OpenAPI documentation from Controllers layers that servers API routes

## Getting Started

1. run `yarn install` to install packages
2. open another terminal and run `yarn test-network` to run a Hardhat test network node
3. on first terminal run `yarn lock-contract-localhost-deploy` to deploy the contract to localhost
4. run `yarn dev` to run in development mode the api
5. open on your browser the url [http://localhost:3000](http://localhost:3000)
6. interact with swagger page

  > if necessary, update the addresses on contructor of[LockSmartContractService]([label](apps/web3gateway/src/lock-smart-contract/lock-smart-contract.service.ts))
