import { Injectable } from '@nestjs/common';
import { Lock__factory, Lock } from '@/smart-contracts';
import ethers from 'ethers';

@Injectable()
export class LockSmartContractService {

  private provider = new ethers.providers.JsonRpcProvider(process.env.EVM_RPC_URL);
  private signer: ethers.Wallet;
  private lockContractFactory: Lock__factory;
  private lockContract: Lock;

  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider(process.env.EVM_RPC_URL);
    this.signer = new ethers.Wallet(process.env.EVM_PRIVATE_KEY, this.provider);
    this.lockContractFactory = new Lock__factory(this.signer);
    this.lockContract = this.lockContractFactory.attach(process.env.LOCK_CONTRACT_ADDRESS);
  }

  async getLockContractAddress(): Promise<string> { 
    return this.lockContract.address;
  }

  async getLockContractOwner(): Promise<string> {
    return this.lockContract.owner();
  }

  async submitWithdrawTransaction(): Promise<ethers.ethers.ContractTransaction> {    
    return this.lockContract.withdraw();
  }

  async getLockContractUnlockTime(): Promise<ethers.ethers.BigNumber>{
    return this.lockContract.unlockTime();
  }
}
