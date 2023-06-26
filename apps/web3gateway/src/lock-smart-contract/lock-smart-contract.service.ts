import { Injectable } from '@nestjs/common';
import { Lock__factory, Lock } from '@/smart-contracts';
import {providers, Wallet, ContractTransaction, BigNumber} from 'ethers/lib';

@Injectable()
export class LockSmartContractService {

  private provider: providers.JsonRpcProvider;
  private signer: Wallet;
  private lockContractFactory: Lock__factory;
  private lockContract: Lock;

  constructor() {
    this.provider = new providers.JsonRpcProvider({
      url: process.env.EVM_URL || 'http://127.0.0.1:8545/',
      
    });
    this.signer = new Wallet(process.env.EVM_PRIVATE_KEY || '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', this.provider);
    this.lockContractFactory = new Lock__factory(this.signer);
    this.lockContract = this.lockContractFactory.attach(process.env.LOCK_CONTRACT_ADDRESS || '0x5FbDB2315678afecb367f032d93F642f64180aa3');
  }

  async getLockContractAddress(): Promise<string> {
    return this.lockContract.address;
  }

  async getLockContractOwner(): Promise<string> {
    return this.lockContract.owner();
  }

  async submitWithdrawTransaction(): Promise<ContractTransaction> {   
    return this.lockContract.withdraw();
  }

  async getLockContractUnlockTime(): Promise<BigNumber>{
    return this.lockContract.unlockTime();
  }
}
