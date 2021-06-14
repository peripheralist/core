import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { Bytes } from '@ethersproject/bytes';

export type DecimalValue = { value: BigNumber };

export type BidShares = {
  owner: DecimalValue;
  prevOwner: DecimalValue;
  creator: DecimalValue;
  beneficiary: DecimalValue;
};

export type Ask = {
  currency: string;
  amount: BigNumberish;
};

export type Bid = {
  currency: string;
  amount: BigNumberish;
  bidder: string;
  recipient: string;
  sellOnShare: { value: BigNumberish };
};

export type MediaData = {
  tokenURI: string;
  metadataURI: string;
  contentHash: Bytes;
  metadataHash: Bytes;
};
