import { Controller, Get,Post } from '@nestjs/common';
import { LockSmartContractService } from './lock-smart-contract.service';
import { ContractTransaction , BigNumber} from 'ethers';
import { ApiTags } from '@nestjs/swagger';

@Controller('lock-smart-contract')
@ApiTags('lock-smart-contract')
export class LockSmartContractController {

  constructor(
    private readonly lockSmartContractService: LockSmartContractService,
  ) {}

  @Get('/owner')
  async getLockContractOwner(): Promise< string> {
    return this.lockSmartContractService.getLockContractOwner();
  }
  
  @Get('/address')
  async getLockContractAddress(): Promise< string> {
    return this.lockSmartContractService.getLockContractAddress()
  }

  @Get('/unlock-time')
  async getLockContractUnlockTime(): Promise< BigNumber> {
    return this.lockSmartContractService.getLockContractUnlockTime();
  }

  @Post('/withdraw')
  async submitWithdrawTransaction(): Promise<ContractTransaction> {
    return this.lockSmartContractService.submitWithdrawTransaction();
  }

}
