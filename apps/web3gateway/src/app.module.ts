import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LockSmartContractModule } from './lock-smart-contract/lock-smart-contract.module';

@Module({
  imports: [LockSmartContractModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
