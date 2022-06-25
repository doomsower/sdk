/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IClaimZap,
  IClaimZapInterface,
} from "../../../../contracts/integrations/convex/IClaimZap";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "rewardContracts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "extraRewardContracts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "tokenRewardContracts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "tokenRewardTokens",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "depositCrvMaxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "depositCvxMaxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "spendCvxAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "options",
        type: "uint256",
      },
    ],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "crv",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cvx",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IClaimZap__factory {
  static readonly abi = _abi;
  static createInterface(): IClaimZapInterface {
    return new utils.Interface(_abi) as IClaimZapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IClaimZap {
    return new Contract(address, _abi, signerOrProvider) as IClaimZap;
  }
}
