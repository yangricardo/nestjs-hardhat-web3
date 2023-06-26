import { Test, TestingModule } from '@nestjs/testing';
import { LockSmartContractService } from './lock-smart-contract.service';

describe('LockSmartContractService', () => {
  let service: LockSmartContractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LockSmartContractService],
    }).compile();

    service = module.get<LockSmartContractService>(LockSmartContractService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
