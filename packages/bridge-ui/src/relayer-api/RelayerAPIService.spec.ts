import { BigNumber, ethers } from 'ethers';
import axios from 'axios';
import { CHAIN_ID_MAINNET, CHAIN_ID_TAIKO } from '../domain/chain';
import { RelayerAPIService } from './RelayerAPIService';
import type { RelayerEventsData } from '../domain/relayerApi';

// TODO
jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    data: {
      items: [
        {
          status: 0, // MessageStatus.New
          data: {
            Message: {
              Id: 1,
              To: '0x01',
              Data: null,
              Memo: 'Memo',
              Owner: '0x02',
              Sender: '0x03',
              GasLimit: 2e4,
              CallValue: '0',
              SrcChainId: CHAIN_ID_MAINNET,
              DestChainId: CHAIN_ID_TAIKO,
              DepositValue: 1e18,
              ProcessingFee: 1e3,
              RefundAddress: '0x04',
            },
            Raw: {
              transactionHash: '0xABC',
            },
          },
          amount: BigNumber.from('100'),
          canonicalTokenSymbol: 'TOK',
        },
      ],
    } as RelayerEventsData,
  }),
}));

const baseUrl = 'https://relayer.internal.taiko.xyz/';

const mockProvider = {
  getTransactionReceipt: jest.fn().mockResolvedValue({}),
} as unknown as ethers.providers.JsonRpcProvider;

const providerMap = new Map([
  [CHAIN_ID_MAINNET, mockProvider],
  [CHAIN_ID_TAIKO, mockProvider],
]);

let relayerApiService = new RelayerAPIService(providerMap, baseUrl);

describe('RelayerAPIService', () => {
  it('should get all the transactions by address', async () => {
    // await relayerApiService.GetAllByAddress('', 1);
  });

  it('should get the block info', async () => {});
});
