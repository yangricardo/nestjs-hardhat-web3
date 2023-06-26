import { Module } from '@nestjs/common';
import { LockSmartContractService } from './lock-smart-contract.service';

@Module({
  providers: [LockSmartContractService]
})
export class LockSmartContractModule {}
