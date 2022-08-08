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
} from "../../../common";

export type CollateralTokenStruct = {
  token: string;
  liquidationThreshold: BigNumberish;
};

export type CollateralTokenStructOutput = [string, number] & {
  token: string;
  liquidationThreshold: number;
};

export type CreditManagerOptsStruct = {
  minBorrowedAmount: BigNumberish;
  maxBorrowedAmount: BigNumberish;
  collateralTokens: CollateralTokenStruct[];
  degenNFT: string;
  expirable: boolean;
};

export type CreditManagerOptsStructOutput = [
  BigNumber,
  BigNumber,
  CollateralTokenStructOutput[],
  string,
  boolean
] & {
  minBorrowedAmount: BigNumber;
  maxBorrowedAmount: BigNumber;
  collateralTokens: CollateralTokenStructOutput[];
  degenNFT: string;
  expirable: boolean;
};

export interface NewCreditConfiguratorInterface extends utils.Interface {
  functions: {
    "_acl()": FunctionFragment;
    "addCollateralToken(address,uint16)": FunctionFragment;
    "addContractToUpgradeable(address)": FunctionFragment;
    "addressProvider()": FunctionFragment;
    "allowContract(address,address)": FunctionFragment;
    "allowToken(address)": FunctionFragment;
    "allowedContracts(uint256)": FunctionFragment;
    "allowedContractsCount()": FunctionFragment;
    "creditFacade()": FunctionFragment;
    "creditManager()": FunctionFragment;
    "forbidContract(address)": FunctionFragment;
    "forbidToken(address)": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "removeContractFromUpgradeable(address)": FunctionFragment;
    "setExpirationDate(uint40)": FunctionFragment;
    "setFees(uint16,uint16,uint16,uint16,uint16)": FunctionFragment;
    "setIncreaseDebtForbidden(bool)": FunctionFragment;
    "setLimitPerBlock(uint128)": FunctionFragment;
    "setLimits(uint128,uint128)": FunctionFragment;
    "setLiquidationThreshold(address,uint16)": FunctionFragment;
    "underlying()": FunctionFragment;
    "unpause()": FunctionFragment;
    "upgradeCreditConfigurator(address)": FunctionFragment;
    "upgradeCreditFacade(address,bool)": FunctionFragment;
    "upgradePriceOracle()": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_acl"
      | "addCollateralToken"
      | "addContractToUpgradeable"
      | "addressProvider"
      | "allowContract"
      | "allowToken"
      | "allowedContracts"
      | "allowedContractsCount"
      | "creditFacade"
      | "creditManager"
      | "forbidContract"
      | "forbidToken"
      | "pause"
      | "paused"
      | "removeContractFromUpgradeable"
      | "setExpirationDate"
      | "setFees"
      | "setIncreaseDebtForbidden"
      | "setLimitPerBlock"
      | "setLimits"
      | "setLiquidationThreshold"
      | "underlying"
      | "unpause"
      | "upgradeCreditConfigurator"
      | "upgradeCreditFacade"
      | "upgradePriceOracle"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "_acl", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "addCollateralToken",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addContractToUpgradeable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addressProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowContract",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "allowToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "allowedContracts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "allowedContractsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditFacade",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creditManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "forbidContract",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "forbidToken", values: [string]): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeContractFromUpgradeable",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setExpirationDate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFees",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setIncreaseDebtForbidden",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setLimitPerBlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLimits",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLiquidationThreshold",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "upgradeCreditConfigurator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeCreditFacade",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradePriceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "_acl", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addCollateralToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addContractToUpgradeable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allowedContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allowedContractsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditFacade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forbidContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forbidToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeContractFromUpgradeable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExpirationDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setIncreaseDebtForbidden",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLimitPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setLimits", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLiquidationThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeCreditConfigurator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeCreditFacade",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradePriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "AddedToUpgradeable(address)": EventFragment;
    "ContractAllowed(address,address)": EventFragment;
    "ContractForbidden(address)": EventFragment;
    "CreditConfiguratorUpgraded(address)": EventFragment;
    "CreditFacadeUpgraded(address)": EventFragment;
    "DegenModeUpdated(bool)": EventFragment;
    "ExpirationDateUpdated(uint40)": EventFragment;
    "FeesUpdated(uint16,uint16,uint16,uint16,uint16)": EventFragment;
    "IncreaseDebtModeUpdated(bool)": EventFragment;
    "LimitPerBlockUpdated(uint128)": EventFragment;
    "LimitsUpdated(uint256,uint256)": EventFragment;
    "MaxEnabledTokensUpdated(uint8)": EventFragment;
    "Paused(address)": EventFragment;
    "PriceOracleUpgraded(address)": EventFragment;
    "RemovedFromUpgradeable(address)": EventFragment;
    "TokenAllowed(address)": EventFragment;
    "TokenForbidden(address)": EventFragment;
    "TokenLiquidationThresholdUpdated(address,uint16)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddedToUpgradeable"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractAllowed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ContractForbidden"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreditConfiguratorUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreditFacadeUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DegenModeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExpirationDateUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeesUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncreaseDebtModeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LimitPerBlockUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LimitsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MaxEnabledTokensUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceOracleUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemovedFromUpgradeable"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenAllowed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenForbidden"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "TokenLiquidationThresholdUpdated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export interface AddedToUpgradeableEventObject {
  arg0: string;
}
export type AddedToUpgradeableEvent = TypedEvent<
  [string],
  AddedToUpgradeableEventObject
>;

export type AddedToUpgradeableEventFilter =
  TypedEventFilter<AddedToUpgradeableEvent>;

export interface ContractAllowedEventObject {
  protocol: string;
  adapter: string;
}
export type ContractAllowedEvent = TypedEvent<
  [string, string],
  ContractAllowedEventObject
>;

export type ContractAllowedEventFilter = TypedEventFilter<ContractAllowedEvent>;

export interface ContractForbiddenEventObject {
  protocol: string;
}
export type ContractForbiddenEvent = TypedEvent<
  [string],
  ContractForbiddenEventObject
>;

export type ContractForbiddenEventFilter =
  TypedEventFilter<ContractForbiddenEvent>;

export interface CreditConfiguratorUpgradedEventObject {
  newCreditConfigurator: string;
}
export type CreditConfiguratorUpgradedEvent = TypedEvent<
  [string],
  CreditConfiguratorUpgradedEventObject
>;

export type CreditConfiguratorUpgradedEventFilter =
  TypedEventFilter<CreditConfiguratorUpgradedEvent>;

export interface CreditFacadeUpgradedEventObject {
  newCreditFacade: string;
}
export type CreditFacadeUpgradedEvent = TypedEvent<
  [string],
  CreditFacadeUpgradedEventObject
>;

export type CreditFacadeUpgradedEventFilter =
  TypedEventFilter<CreditFacadeUpgradedEvent>;

export interface DegenModeUpdatedEventObject {
  arg0: boolean;
}
export type DegenModeUpdatedEvent = TypedEvent<
  [boolean],
  DegenModeUpdatedEventObject
>;

export type DegenModeUpdatedEventFilter =
  TypedEventFilter<DegenModeUpdatedEvent>;

export interface ExpirationDateUpdatedEventObject {
  arg0: number;
}
export type ExpirationDateUpdatedEvent = TypedEvent<
  [number],
  ExpirationDateUpdatedEventObject
>;

export type ExpirationDateUpdatedEventFilter =
  TypedEventFilter<ExpirationDateUpdatedEvent>;

export interface FeesUpdatedEventObject {
  feeInterest: number;
  feeLiquidation: number;
  liquidationPremium: number;
  feeLiquidationExpired: number;
  liquidationPremiumExpired: number;
}
export type FeesUpdatedEvent = TypedEvent<
  [number, number, number, number, number],
  FeesUpdatedEventObject
>;

export type FeesUpdatedEventFilter = TypedEventFilter<FeesUpdatedEvent>;

export interface IncreaseDebtModeUpdatedEventObject {
  arg0: boolean;
}
export type IncreaseDebtModeUpdatedEvent = TypedEvent<
  [boolean],
  IncreaseDebtModeUpdatedEventObject
>;

export type IncreaseDebtModeUpdatedEventFilter =
  TypedEventFilter<IncreaseDebtModeUpdatedEvent>;

export interface LimitPerBlockUpdatedEventObject {
  arg0: BigNumber;
}
export type LimitPerBlockUpdatedEvent = TypedEvent<
  [BigNumber],
  LimitPerBlockUpdatedEventObject
>;

export type LimitPerBlockUpdatedEventFilter =
  TypedEventFilter<LimitPerBlockUpdatedEvent>;

export interface LimitsUpdatedEventObject {
  minBorrowedAmount: BigNumber;
  maxBorrowedAmount: BigNumber;
}
export type LimitsUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  LimitsUpdatedEventObject
>;

export type LimitsUpdatedEventFilter = TypedEventFilter<LimitsUpdatedEvent>;

export interface MaxEnabledTokensUpdatedEventObject {
  arg0: number;
}
export type MaxEnabledTokensUpdatedEvent = TypedEvent<
  [number],
  MaxEnabledTokensUpdatedEventObject
>;

export type MaxEnabledTokensUpdatedEventFilter =
  TypedEventFilter<MaxEnabledTokensUpdatedEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface PriceOracleUpgradedEventObject {
  newPriceOracle: string;
}
export type PriceOracleUpgradedEvent = TypedEvent<
  [string],
  PriceOracleUpgradedEventObject
>;

export type PriceOracleUpgradedEventFilter =
  TypedEventFilter<PriceOracleUpgradedEvent>;

export interface RemovedFromUpgradeableEventObject {
  arg0: string;
}
export type RemovedFromUpgradeableEvent = TypedEvent<
  [string],
  RemovedFromUpgradeableEventObject
>;

export type RemovedFromUpgradeableEventFilter =
  TypedEventFilter<RemovedFromUpgradeableEvent>;

export interface TokenAllowedEventObject {
  token: string;
}
export type TokenAllowedEvent = TypedEvent<[string], TokenAllowedEventObject>;

export type TokenAllowedEventFilter = TypedEventFilter<TokenAllowedEvent>;

export interface TokenForbiddenEventObject {
  token: string;
}
export type TokenForbiddenEvent = TypedEvent<
  [string],
  TokenForbiddenEventObject
>;

export type TokenForbiddenEventFilter = TypedEventFilter<TokenForbiddenEvent>;

export interface TokenLiquidationThresholdUpdatedEventObject {
  token: string;
  liquidityThreshold: number;
}
export type TokenLiquidationThresholdUpdatedEvent = TypedEvent<
  [string, number],
  TokenLiquidationThresholdUpdatedEventObject
>;

export type TokenLiquidationThresholdUpdatedEventFilter =
  TypedEventFilter<TokenLiquidationThresholdUpdatedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface NewCreditConfigurator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NewCreditConfiguratorInterface;

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
    _acl(overrides?: CallOverrides): Promise<[string]>;

    addCollateralToken(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addContractToUpgradeable(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addressProvider(overrides?: CallOverrides): Promise<[string]>;

    allowContract(
      targetContract: string,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allowedContracts(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    allowedContractsCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    creditFacade(overrides?: CallOverrides): Promise<[string]>;

    creditManager(overrides?: CallOverrides): Promise<[string]>;

    forbidContract(
      targetContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    forbidToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    removeContractFromUpgradeable(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setExpirationDate(
      newExpirationDate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFees(
      _feeInterest: BigNumberish,
      _feeLiquidation: BigNumberish,
      _liquidationPremium: BigNumberish,
      _feeLiquidationExpired: BigNumberish,
      _liquidationPremiumExpired: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setIncreaseDebtForbidden(
      _mode: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLimitPerBlock(
      newLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLimits(
      _minBorrowedAmount: BigNumberish,
      _maxBorrowedAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLiquidationThreshold(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlying(overrides?: CallOverrides): Promise<[string]>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeCreditConfigurator(
      _creditConfigurator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeCreditFacade(
      _creditFacade: string,
      migrateParams: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradePriceOracle(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  _acl(overrides?: CallOverrides): Promise<string>;

  addCollateralToken(
    token: string,
    liquidationThreshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addContractToUpgradeable(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addressProvider(overrides?: CallOverrides): Promise<string>;

  allowContract(
    targetContract: string,
    adapter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowToken(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allowedContracts(i: BigNumberish, overrides?: CallOverrides): Promise<string>;

  allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

  creditFacade(overrides?: CallOverrides): Promise<string>;

  creditManager(overrides?: CallOverrides): Promise<string>;

  forbidContract(
    targetContract: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  forbidToken(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  removeContractFromUpgradeable(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setExpirationDate(
    newExpirationDate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFees(
    _feeInterest: BigNumberish,
    _feeLiquidation: BigNumberish,
    _liquidationPremium: BigNumberish,
    _feeLiquidationExpired: BigNumberish,
    _liquidationPremiumExpired: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setIncreaseDebtForbidden(
    _mode: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLimitPerBlock(
    newLimit: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLimits(
    _minBorrowedAmount: BigNumberish,
    _maxBorrowedAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLiquidationThreshold(
    token: string,
    liquidationThreshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlying(overrides?: CallOverrides): Promise<string>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeCreditConfigurator(
    _creditConfigurator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeCreditFacade(
    _creditFacade: string,
    migrateParams: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradePriceOracle(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    _acl(overrides?: CallOverrides): Promise<string>;

    addCollateralToken(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    addContractToUpgradeable(
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addressProvider(overrides?: CallOverrides): Promise<string>;

    allowContract(
      targetContract: string,
      adapter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    allowToken(token: string, overrides?: CallOverrides): Promise<void>;

    allowedContracts(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

    creditFacade(overrides?: CallOverrides): Promise<string>;

    creditManager(overrides?: CallOverrides): Promise<string>;

    forbidContract(
      targetContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    forbidToken(token: string, overrides?: CallOverrides): Promise<void>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    removeContractFromUpgradeable(
      addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setExpirationDate(
      newExpirationDate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setFees(
      _feeInterest: BigNumberish,
      _feeLiquidation: BigNumberish,
      _liquidationPremium: BigNumberish,
      _feeLiquidationExpired: BigNumberish,
      _liquidationPremiumExpired: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setIncreaseDebtForbidden(
      _mode: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setLimitPerBlock(
      newLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setLimits(
      _minBorrowedAmount: BigNumberish,
      _maxBorrowedAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setLiquidationThreshold(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    underlying(overrides?: CallOverrides): Promise<string>;

    unpause(overrides?: CallOverrides): Promise<void>;

    upgradeCreditConfigurator(
      _creditConfigurator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeCreditFacade(
      _creditFacade: string,
      migrateParams: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradePriceOracle(overrides?: CallOverrides): Promise<void>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "AddedToUpgradeable(address)"(arg0?: null): AddedToUpgradeableEventFilter;
    AddedToUpgradeable(arg0?: null): AddedToUpgradeableEventFilter;

    "ContractAllowed(address,address)"(
      protocol?: string | null,
      adapter?: string | null
    ): ContractAllowedEventFilter;
    ContractAllowed(
      protocol?: string | null,
      adapter?: string | null
    ): ContractAllowedEventFilter;

    "ContractForbidden(address)"(
      protocol?: string | null
    ): ContractForbiddenEventFilter;
    ContractForbidden(protocol?: string | null): ContractForbiddenEventFilter;

    "CreditConfiguratorUpgraded(address)"(
      newCreditConfigurator?: string | null
    ): CreditConfiguratorUpgradedEventFilter;
    CreditConfiguratorUpgraded(
      newCreditConfigurator?: string | null
    ): CreditConfiguratorUpgradedEventFilter;

    "CreditFacadeUpgraded(address)"(
      newCreditFacade?: string | null
    ): CreditFacadeUpgradedEventFilter;
    CreditFacadeUpgraded(
      newCreditFacade?: string | null
    ): CreditFacadeUpgradedEventFilter;

    "DegenModeUpdated(bool)"(arg0?: null): DegenModeUpdatedEventFilter;
    DegenModeUpdated(arg0?: null): DegenModeUpdatedEventFilter;

    "ExpirationDateUpdated(uint40)"(
      arg0?: null
    ): ExpirationDateUpdatedEventFilter;
    ExpirationDateUpdated(arg0?: null): ExpirationDateUpdatedEventFilter;

    "FeesUpdated(uint16,uint16,uint16,uint16,uint16)"(
      feeInterest?: null,
      feeLiquidation?: null,
      liquidationPremium?: null,
      feeLiquidationExpired?: null,
      liquidationPremiumExpired?: null
    ): FeesUpdatedEventFilter;
    FeesUpdated(
      feeInterest?: null,
      feeLiquidation?: null,
      liquidationPremium?: null,
      feeLiquidationExpired?: null,
      liquidationPremiumExpired?: null
    ): FeesUpdatedEventFilter;

    "IncreaseDebtModeUpdated(bool)"(
      arg0?: null
    ): IncreaseDebtModeUpdatedEventFilter;
    IncreaseDebtModeUpdated(arg0?: null): IncreaseDebtModeUpdatedEventFilter;

    "LimitPerBlockUpdated(uint128)"(
      arg0?: null
    ): LimitPerBlockUpdatedEventFilter;
    LimitPerBlockUpdated(arg0?: null): LimitPerBlockUpdatedEventFilter;

    "LimitsUpdated(uint256,uint256)"(
      minBorrowedAmount?: null,
      maxBorrowedAmount?: null
    ): LimitsUpdatedEventFilter;
    LimitsUpdated(
      minBorrowedAmount?: null,
      maxBorrowedAmount?: null
    ): LimitsUpdatedEventFilter;

    "MaxEnabledTokensUpdated(uint8)"(
      arg0?: null
    ): MaxEnabledTokensUpdatedEventFilter;
    MaxEnabledTokensUpdated(arg0?: null): MaxEnabledTokensUpdatedEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "PriceOracleUpgraded(address)"(
      newPriceOracle?: string | null
    ): PriceOracleUpgradedEventFilter;
    PriceOracleUpgraded(
      newPriceOracle?: string | null
    ): PriceOracleUpgradedEventFilter;

    "RemovedFromUpgradeable(address)"(
      arg0?: null
    ): RemovedFromUpgradeableEventFilter;
    RemovedFromUpgradeable(arg0?: null): RemovedFromUpgradeableEventFilter;

    "TokenAllowed(address)"(token?: string | null): TokenAllowedEventFilter;
    TokenAllowed(token?: string | null): TokenAllowedEventFilter;

    "TokenForbidden(address)"(token?: string | null): TokenForbiddenEventFilter;
    TokenForbidden(token?: string | null): TokenForbiddenEventFilter;

    "TokenLiquidationThresholdUpdated(address,uint16)"(
      token?: string | null,
      liquidityThreshold?: null
    ): TokenLiquidationThresholdUpdatedEventFilter;
    TokenLiquidationThresholdUpdated(
      token?: string | null,
      liquidityThreshold?: null
    ): TokenLiquidationThresholdUpdatedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    _acl(overrides?: CallOverrides): Promise<BigNumber>;

    addCollateralToken(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addContractToUpgradeable(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addressProvider(overrides?: CallOverrides): Promise<BigNumber>;

    allowContract(
      targetContract: string,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allowedContracts(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowedContractsCount(overrides?: CallOverrides): Promise<BigNumber>;

    creditFacade(overrides?: CallOverrides): Promise<BigNumber>;

    creditManager(overrides?: CallOverrides): Promise<BigNumber>;

    forbidContract(
      targetContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    forbidToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    removeContractFromUpgradeable(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setExpirationDate(
      newExpirationDate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFees(
      _feeInterest: BigNumberish,
      _feeLiquidation: BigNumberish,
      _liquidationPremium: BigNumberish,
      _feeLiquidationExpired: BigNumberish,
      _liquidationPremiumExpired: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setIncreaseDebtForbidden(
      _mode: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLimitPerBlock(
      newLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLimits(
      _minBorrowedAmount: BigNumberish,
      _maxBorrowedAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLiquidationThreshold(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeCreditConfigurator(
      _creditConfigurator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeCreditFacade(
      _creditFacade: string,
      migrateParams: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradePriceOracle(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _acl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addCollateralToken(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addContractToUpgradeable(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addressProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowContract(
      targetContract: string,
      adapter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allowedContracts(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowedContractsCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    forbidContract(
      targetContract: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    forbidToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeContractFromUpgradeable(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setExpirationDate(
      newExpirationDate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFees(
      _feeInterest: BigNumberish,
      _feeLiquidation: BigNumberish,
      _liquidationPremium: BigNumberish,
      _feeLiquidationExpired: BigNumberish,
      _liquidationPremiumExpired: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setIncreaseDebtForbidden(
      _mode: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLimitPerBlock(
      newLimit: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLimits(
      _minBorrowedAmount: BigNumberish,
      _maxBorrowedAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidationThreshold(
      token: string,
      liquidationThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeCreditConfigurator(
      _creditConfigurator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeCreditFacade(
      _creditFacade: string,
      migrateParams: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradePriceOracle(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
