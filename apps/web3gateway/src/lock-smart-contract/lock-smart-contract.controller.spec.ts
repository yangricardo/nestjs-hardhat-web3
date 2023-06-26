import { Test, TestingModule } from '@nestjs/testing';
import { LockSmartContractController } from './lock-smart-contract.controller';

describe('LockSmartContractController', () => {
  let controller: LockSmartContractController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LockSmartContractController],
    }).compile();

    controller = module.get<LockSmartContractController>(LockSmartContractController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
