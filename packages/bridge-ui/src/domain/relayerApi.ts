import type { BigNumber } from 'ethers';
import type { MessageStatus } from './message';
import type { BridgeTransaction } from './transactions';

export interface RelayerAPI {
  GetAllByAddress(
    address: string,
    chainID?: number,
  ): Promise<BridgeTransaction[]>;

  GetBlockInfo(): Promise<Map<number, RelayerBlockInfo>>;
}

export type RelayerBlockInfo = {
  chainId: number;
  latestProcessedBlock: number;
  latestBlock: number;
};

interface RelayerEventsItemTxData {
  // TODO: do we want to be more specific here?
  Message: Record<string, any>;
  Raw: {
    transactionHash: string;
  };
}

interface RelayerEventItemTx {
  status: MessageStatus;
  data: RelayerEventsItemTxData;
  amount: BigNumber;
  canonicalTokenSymbol: string;
}

export type RelayerEventsData = {
  items: RelayerEventItemTx[];
};
