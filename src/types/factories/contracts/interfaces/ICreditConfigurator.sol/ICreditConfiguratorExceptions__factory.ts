/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICreditConfiguratorExceptions,
  ICreditConfiguratorExceptionsInterface,
} from "../../../../contracts/interfaces/ICreditConfigurator.sol/ICreditConfiguratorExceptions";

const _abi = [
  {
    inputs: [],
    name: "AdapterUsedTwiceException",
    type: "error",
  },
  {
    inputs: [],
    name: "ChiThresholdMoreOneException",
    type: "error",
  },
  {
    inputs: [],
    name: "ContractNotInAllowedList",
    type: "error",
  },
  {
    inputs: [],
    name: "CreditManagerOrFacadeUsedAsAllowContractsException",
    type: "error",
  },
  {
    inputs: [],
    name: "DegenNFTnotSetException",
    type: "error",
  },
  {
    inputs: [],
    name: "FastCheckNotCoverCollateralDropException",
    type: "error",
  },
  {
    inputs: [],
    name: "IncompatibleContractException",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectExpirationDateException",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectFeesException",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectLimitsException",
    type: "error",
  },
  {
    inputs: [],
    name: "IncorrectLiquidationThresholdException",
    type: "error",
  },
  {
    inputs: [],
    name: "SetLTForUnderlyingException",
    type: "error",
  },
];

export class ICreditConfiguratorExceptions__factory {
  static readonly abi = _abi;
  static createInterface(): ICreditConfiguratorExceptionsInterface {
    return new utils.Interface(_abi) as ICreditConfiguratorExceptionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICreditConfiguratorExceptions {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ICreditConfiguratorExceptions;
  }
}
