# PUC-Rio EVM Gateway Template

Monorepo that to be the base implementation for EVM based projects

- [packages/smart-contracts](./packages/smart-contracts/): internal package based on [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started) that auto generates Ethers clients for Smart Contracts for TDD development, but can also be used for actual Backend project implementation
- [apps/web3gateway](./apps/web3gateway/): backend api based on [NestJS](https://docs.nestjs.com/) that runs integration with EVM networks. Also could be used to implement main backend using NestJS recipes:
  - [Prisma ORM](https://docs.nestjs.com/recipes/prisma#set-up-prisma), that self generates operations to interact with databases like PostgreSQL or MongoDB
  - [Swagger](https://docs.nestjs.com/openapi/introduction), that self generates OpenAPI documentation from Controllers layers that servers API routes
