import type { BigNumber, ethers } from 'ethers';
import type { Address, ChainID } from './chain';
import type { Message, MessageStatus } from './message';

export type BridgeTransaction = {
  hash: string;
  from: Address;
  receipt?: ethers.providers.TransactionReceipt;
  status: MessageStatus;
  msgHash?: string;
  message?: Message;
  interval?: NodeJS.Timer;
  amountInWei?: BigNumber;
  symbol?: string;
  fromChainId: ChainID;
  toChainId: ChainID;
};
export interface Transactioner {
  GetAllByAddress(
    address: string,
    chainID?: number,
  ): Promise<BridgeTransaction[]>;

  GetTransactionByHash(
    address: string,
    hash: string,
  ): Promise<BridgeTransaction>;

  UpdateStorageByAddress(address: string, txs: BridgeTransaction[]): void;
}
