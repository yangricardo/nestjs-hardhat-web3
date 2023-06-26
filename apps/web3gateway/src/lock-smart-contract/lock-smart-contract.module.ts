import { Module } from '@nestjs/common';
import { LockSmartContractService } from './lock-smart-contract.service';
import { LockSmartContractController } from './lock-smart-contract.controller';

@Module({
  providers: [LockSmartContractService],
  controllers: [LockSmartContractController],
  exports: [LockSmartContractService]
})
export class LockSmartContractModule {}
