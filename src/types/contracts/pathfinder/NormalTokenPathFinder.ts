/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export type BalanceStruct = { token: string; balance: BigNumberish };

export type BalanceStructOutput = [string, BigNumber] & {
  token: string;
  balance: BigNumber;
};

export type ClosePathTaskStruct = {
  creditAccount: string;
  balances: BalanceStruct[];
  underlying: string;
  connectors: string[];
  adapters: string[];
  gasPriceUnderlyingRAY: BigNumberish;
  slippage: BigNumberish;
};

export type ClosePathTaskStructOutput = [
  string,
  BalanceStructOutput[],
  string,
  string[],
  string[],
  BigNumber,
  BigNumber
] & {
  creditAccount: string;
  balances: BalanceStructOutput[];
  underlying: string;
  connectors: string[];
  adapters: string[];
  gasPriceUnderlyingRAY: BigNumber;
  slippage: BigNumber;
};

export type MultiCallStruct = { target: string; callData: BytesLike };

export type MultiCallStructOutput = [string, string] & {
  target: string;
  callData: string;
};

export type PathFinderResultStruct = {
  amount: BigNumberish;
  gasUsage: BigNumberish;
  calls: MultiCallStruct[];
};

export type PathFinderResultStructOutput = [
  BigNumber,
  BigNumber,
  MultiCallStructOutput[]
] & { amount: BigNumber; gasUsage: BigNumber; calls: MultiCallStructOutput[] };

export type SwapQuoteStruct = {
  multiCall: MultiCallStruct;
  amount: BigNumberish;
  found: boolean;
  gasUsage: BigNumberish;
};

export type SwapQuoteStructOutput = [
  MultiCallStructOutput,
  BigNumber,
  boolean,
  BigNumber
] & {
  multiCall: MultiCallStructOutput;
  amount: BigNumber;
  found: boolean;
  gasUsage: BigNumber;
};

export type SwapTaskStruct = {
  swapOperation: BigNumberish;
  creditAccount: string;
  tokenIn: string;
  tokenOut: string;
  connectors: string[];
  amount: BigNumberish;
  slippage: BigNumberish;
  externalSlippage: boolean;
};

export type SwapTaskStructOutput = [
  number,
  string,
  string,
  string,
  string[],
  BigNumber,
  BigNumber,
  boolean
] & {
  swapOperation: number;
  creditAccount: string;
  tokenIn: string;
  tokenOut: string;
  connectors: string[];
  amount: BigNumber;
  slippage: BigNumber;
  externalSlippage: boolean;
};

export interface NormalTokenPathFinderInterface extends utils.Interface {
  functions: {
    "findNormalTokenBestPath((address,(address,uint256)[],address,address[],address[],uint256,uint256))": FunctionFragment;
    "findSwapQuote((address,(address,uint256)[],address,address[],address[],uint256,uint256),uint256,bool)": FunctionFragment;
    "getComplexPairSwap((uint8,address,address,address,address[],uint256,uint256,bool),uint256,uint256,address[])": FunctionFragment;
    "getGasPriceTokenOutRAY(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "priceOracle()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "swapPathFinder()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "version()": FunctionFragment;
    "wethToken()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "findNormalTokenBestPath"
      | "findSwapQuote"
      | "getComplexPairSwap"
      | "getGasPriceTokenOutRAY"
      | "owner"
      | "priceOracle"
      | "renounceOwnership"
      | "swapPathFinder"
      | "transferOwnership"
      | "version"
      | "wethToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "findNormalTokenBestPath",
    values: [ClosePathTaskStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "findSwapQuote",
    values: [ClosePathTaskStruct, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getComplexPairSwap",
    values: [SwapTaskStruct, BigNumberish, BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasPriceTokenOutRAY",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapPathFinder",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "wethToken", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "findNormalTokenBestPath",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "findSwapQuote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getComplexPairSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasPriceTokenOutRAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapPathFinder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wethToken", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface NormalTokenPathFinder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NormalTokenPathFinderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    findNormalTokenBestPath(
      task: ClosePathTaskStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    findSwapQuote(
      task: ClosePathTaskStruct,
      tokenIndex: BigNumberish,
      isConnector: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getComplexPairSwap(
      swapTask: SwapTaskStruct,
      connectorIndex: BigNumberish,
      connectorCumulativeBalance: BigNumberish,
      adapters: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getGasPriceTokenOutRAY(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { gasPrice: BigNumber }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    priceOracle(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapPathFinder(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;

    wethToken(overrides?: CallOverrides): Promise<[string]>;
  };

  findNormalTokenBestPath(
    task: ClosePathTaskStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  findSwapQuote(
    task: ClosePathTaskStruct,
    tokenIndex: BigNumberish,
    isConnector: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getComplexPairSwap(
    swapTask: SwapTaskStruct,
    connectorIndex: BigNumberish,
    connectorCumulativeBalance: BigNumberish,
    adapters: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getGasPriceTokenOutRAY(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  priceOracle(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapPathFinder(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  wethToken(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    findNormalTokenBestPath(
      task: ClosePathTaskStruct,
      overrides?: CallOverrides
    ): Promise<PathFinderResultStructOutput>;

    findSwapQuote(
      task: ClosePathTaskStruct,
      tokenIndex: BigNumberish,
      isConnector: boolean,
      overrides?: CallOverrides
    ): Promise<
      [SwapQuoteStructOutput, string] & {
        quote: SwapQuoteStructOutput;
        tokenOut: string;
      }
    >;

    getComplexPairSwap(
      swapTask: SwapTaskStruct,
      connectorIndex: BigNumberish,
      connectorCumulativeBalance: BigNumberish,
      adapters: string[],
      overrides?: CallOverrides
    ): Promise<
      [SwapQuoteStructOutput, SwapQuoteStructOutput] & {
        connectorTokenInQuote: SwapQuoteStructOutput;
        connectorTokenOutQuote: SwapQuoteStructOutput;
      }
    >;

    getGasPriceTokenOutRAY(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    priceOracle(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    swapPathFinder(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    wethToken(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    findNormalTokenBestPath(
      task: ClosePathTaskStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    findSwapQuote(
      task: ClosePathTaskStruct,
      tokenIndex: BigNumberish,
      isConnector: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getComplexPairSwap(
      swapTask: SwapTaskStruct,
      connectorIndex: BigNumberish,
      connectorCumulativeBalance: BigNumberish,
      adapters: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getGasPriceTokenOutRAY(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    priceOracle(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapPathFinder(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    wethToken(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    findNormalTokenBestPath(
      task: ClosePathTaskStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    findSwapQuote(
      task: ClosePathTaskStruct,
      tokenIndex: BigNumberish,
      isConnector: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getComplexPairSwap(
      swapTask: SwapTaskStruct,
      connectorIndex: BigNumberish,
      connectorCumulativeBalance: BigNumberish,
      adapters: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getGasPriceTokenOutRAY(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapPathFinder(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
