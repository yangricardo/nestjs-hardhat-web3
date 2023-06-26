import { Controller, Get,HttpException,HttpStatus,Post } from '@nestjs/common';
import { LockSmartContractService } from './lock-smart-contract.service';
import * as ethers from 'ethers/lib';
import { ApiTags } from '@nestjs/swagger';
import { EthersError } from 'src/shared/ethers/types/EthersError';

@Controller('lock-smart-contract')
@ApiTags('lock-smart-contract')
export class LockSmartContractController {

  constructor(
    private readonly lockSmartContractService: LockSmartContractService,
  ) {}

  @Get('/owner')
  async getLockContractOwner(): Promise< string> {
    try {
      return await this.lockSmartContractService.getLockContractOwner();      
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  
  @Get('/address')
  async getLockContractAddress(): Promise< string> {
    try {
      return await this.lockSmartContractService.getLockContractAddress()      
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('/unlock-time')
  async getLockContractUnlockTime(): Promise< ethers.BigNumber> {
    try {
      return await this.lockSmartContractService.getLockContractUnlockTime();      
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('/withdraw')
  async submitWithdrawTransaction(): Promise<ethers.ContractTransaction> {
    try {
      return await this.lockSmartContractService.submitWithdrawTransaction();      
    } catch (error) { 
      const ethersErros = error as unknown as EthersError;      
      console.error(ethersErros.reason);
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

}
