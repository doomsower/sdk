/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPriceFeedType,
  IPriceFeedTypeInterface,
} from "../../../contracts/interfaces/IPriceFeedType";

const _abi = [
  {
    inputs: [],
    name: "priceFeedType",
    outputs: [
      {
        internalType: "enum PriceFeedType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "skipPriceCheck",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPriceFeedType__factory {
  static readonly abi = _abi;
  static createInterface(): IPriceFeedTypeInterface {
    return new utils.Interface(_abi) as IPriceFeedTypeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPriceFeedType {
    return new Contract(address, _abi, signerOrProvider) as IPriceFeedType;
  }
}
