/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICreditConfiguratorEvents,
  ICreditConfiguratorEventsInterface,
} from "../../../../contracts/interfaces/ICreditConfigurator.sol/ICreditConfiguratorEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "AddedToUpgradeable",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "protocol",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "adapter",
        type: "address",
      },
    ],
    name: "ContractAllowed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "protocol",
        type: "address",
      },
    ],
    name: "ContractForbidden",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newCreditConfigurator",
        type: "address",
      },
    ],
    name: "CreditConfiguratorUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newCreditFacade",
        type: "address",
      },
    ],
    name: "CreditFacadeUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "DegenModeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    name: "ExpirationDateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "feeInterest",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "feeLiquidation",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "liquidationPremium",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "feeLiquidationExpired",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "liquidationPremiumExpired",
        type: "uint16",
      },
    ],
    name: "FeesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    name: "IncreaseDebtModeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    name: "LimitPerBlockUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "minBorrowedAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxBorrowedAmount",
        type: "uint256",
      },
    ],
    name: "LimitsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "MaxEnabledTokensUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newPriceOracle",
        type: "address",
      },
    ],
    name: "PriceOracleUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "RemovedFromUpgradeable",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "TokenAllowed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "TokenForbidden",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "liquidityThreshold",
        type: "uint16",
      },
    ],
    name: "TokenLiquidationThresholdUpdated",
    type: "event",
  },
];

export class ICreditConfiguratorEvents__factory {
  static readonly abi = _abi;
  static createInterface(): ICreditConfiguratorEventsInterface {
    return new utils.Interface(_abi) as ICreditConfiguratorEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICreditConfiguratorEvents {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ICreditConfiguratorEvents;
  }
}
