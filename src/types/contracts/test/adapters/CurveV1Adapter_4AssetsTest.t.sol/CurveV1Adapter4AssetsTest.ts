/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../../../../common";

export interface CurveV1Adapter4AssetsTestInterface extends utils.Interface {
  functions: {
    "IS_TEST()": FunctionFragment;
    "adapter()": FunctionFragment;
    "cft()": FunctionFragment;
    "creditConfigurator()": FunctionFragment;
    "creditFacade()": FunctionFragment;
    "creditManager()": FunctionFragment;
    "curveV1Mock()": FunctionFragment;
    "failed()": FunctionFragment;
    "setUp()": FunctionFragment;
    "test_ACV1_4_01_constructor_sets_correct_values()": FunctionFragment;
    "test_ACV1_4_02A_constructor_reverts_for_unknown_addresses()": FunctionFragment;
    "test_ACV1_4_02_constructor_reverts_for_zero_addresses()": FunctionFragment;
    "test_ACV1_4_03_liquidity_functions_revert_if_user_has_no_account()": FunctionFragment;
    "test_ACV1_4_04A_add_all_liquidity_one_coin_works_as_expected()": FunctionFragment;
    "test_ACV1_4_04_add_liquidity_works_as_expected()": FunctionFragment;
    "test_ACV1_4_05_remove_liquidity_works_as_expected()": FunctionFragment;
    "test_ACV1_4_06_remove_liquidity_imbalance_works_as_expected()": FunctionFragment;
    "underlying()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IS_TEST"
      | "adapter"
      | "cft"
      | "creditConfigurator"
      | "creditFacade"
      | "creditManager"
      | "curveV1Mock"
      | "failed"
      | "setUp"
      | "test_ACV1_4_01_constructor_sets_correct_values"
      | "test_ACV1_4_02A_constructor_reverts_for_unknown_addresses"
      | "test_ACV1_4_02_constructor_reverts_for_zero_addresses"
      | "test_ACV1_4_03_liquidity_functions_revert_if_user_has_no_account"
      | "test_ACV1_4_04A_add_all_liquidity_one_coin_works_as_expected"
      | "test_ACV1_4_04_add_liquidity_works_as_expected"
      | "test_ACV1_4_05_remove_liquidity_works_as_expected"
      | "test_ACV1_4_06_remove_liquidity_imbalance_works_as_expected"
      | "underlying"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(functionFragment: "adapter", values?: undefined): string;
  encodeFunctionData(functionFragment: "cft", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "creditConfigurator",
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
    functionFragment: "curveV1Mock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "test_ACV1_4_01_constructor_sets_correct_values",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_ACV1_4_02A_constructor_reverts_for_unknown_addresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_ACV1_4_02_constructor_reverts_for_zero_addresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_ACV1_4_03_liquidity_functions_revert_if_user_has_no_account",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_ACV1_4_04A_add_all_liquidity_one_coin_works_as_expected",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_ACV1_4_04_add_liquidity_works_as_expected",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_ACV1_4_05_remove_liquidity_works_as_expected",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_ACV1_4_06_remove_liquidity_imbalance_works_as_expected",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "adapter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cft", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "creditConfigurator",
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
    functionFragment: "curveV1Mock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "test_ACV1_4_01_constructor_sets_correct_values",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_ACV1_4_02A_constructor_reverts_for_unknown_addresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_ACV1_4_02_constructor_reverts_for_zero_addresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_ACV1_4_03_liquidity_functions_revert_if_user_has_no_account",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_ACV1_4_04A_add_all_liquidity_one_coin_works_as_expected",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_ACV1_4_04_add_liquidity_works_as_expected",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_ACV1_4_05_remove_liquidity_works_as_expected",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_ACV1_4_06_remove_liquidity_imbalance_works_as_expected",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;

  events: {
    "AddCollateral(address,address,uint256)": EventFragment;
    "CloseCreditAccount(address,address)": EventFragment;
    "DecreaseBorrowedAmount(address,uint256)": EventFragment;
    "ExecuteOrder(address,address)": EventFragment;
    "IncreaseBorrowedAmount(address,uint256)": EventFragment;
    "LiquidateCreditAccount(address,address,address,uint256)": EventFragment;
    "LiquidateExpiredCreditAccount(address,address,address,uint256)": EventFragment;
    "MultiCallFinished()": EventFragment;
    "MultiCallStarted(address)": EventFragment;
    "NewConfigurator(address)": EventFragment;
    "OpenCreditAccount(address,address,uint256,uint16)": EventFragment;
    "TokenDisabled(address,address)": EventFragment;
    "TokenEnabled(address,address)": EventFragment;
    "TransferAccount(address,address)": EventFragment;
    "TransferAccountAllowed(address,address,bool)": EventFragment;
    "log(string)": EventFragment;
    "log_address(address)": EventFragment;
    "log_bytes(bytes)": EventFragment;
    "log_bytes32(bytes32)": EventFragment;
    "log_int(int256)": EventFragment;
    "log_named_address(string,address)": EventFragment;
    "log_named_bytes(string,bytes)": EventFragment;
    "log_named_bytes32(string,bytes32)": EventFragment;
    "log_named_decimal_int(string,int256,uint256)": EventFragment;
    "log_named_decimal_uint(string,uint256,uint256)": EventFragment;
    "log_named_int(string,int256)": EventFragment;
    "log_named_string(string,string)": EventFragment;
    "log_named_uint(string,uint256)": EventFragment;
    "log_string(string)": EventFragment;
    "log_uint(uint256)": EventFragment;
    "logs(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddCollateral"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CloseCreditAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DecreaseBorrowedAmount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteOrder"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "IncreaseBorrowedAmount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidateCreditAccount"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "LiquidateExpiredCreditAccount"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MultiCallFinished"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MultiCallStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewConfigurator"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OpenCreditAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenDisabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenEnabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferAccount"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferAccountAllowed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_address"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_bytes32"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_decimal_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_int"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_named_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_string"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "log_uint"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "logs"): EventFragment;
}

export interface AddCollateralEventObject {
  onBehalfOf: string;
  token: string;
  value: BigNumber;
}
export type AddCollateralEvent = TypedEvent<
  [string, string, BigNumber],
  AddCollateralEventObject
>;

export type AddCollateralEventFilter = TypedEventFilter<AddCollateralEvent>;

export interface CloseCreditAccountEventObject {
  owner: string;
  to: string;
}
export type CloseCreditAccountEvent = TypedEvent<
  [string, string],
  CloseCreditAccountEventObject
>;

export type CloseCreditAccountEventFilter =
  TypedEventFilter<CloseCreditAccountEvent>;

export interface DecreaseBorrowedAmountEventObject {
  borrower: string;
  amount: BigNumber;
}
export type DecreaseBorrowedAmountEvent = TypedEvent<
  [string, BigNumber],
  DecreaseBorrowedAmountEventObject
>;

export type DecreaseBorrowedAmountEventFilter =
  TypedEventFilter<DecreaseBorrowedAmountEvent>;

export interface ExecuteOrderEventObject {
  borrower: string;
  target: string;
}
export type ExecuteOrderEvent = TypedEvent<
  [string, string],
  ExecuteOrderEventObject
>;

export type ExecuteOrderEventFilter = TypedEventFilter<ExecuteOrderEvent>;

export interface IncreaseBorrowedAmountEventObject {
  borrower: string;
  amount: BigNumber;
}
export type IncreaseBorrowedAmountEvent = TypedEvent<
  [string, BigNumber],
  IncreaseBorrowedAmountEventObject
>;

export type IncreaseBorrowedAmountEventFilter =
  TypedEventFilter<IncreaseBorrowedAmountEvent>;

export interface LiquidateCreditAccountEventObject {
  owner: string;
  liquidator: string;
  to: string;
  remainingFunds: BigNumber;
}
export type LiquidateCreditAccountEvent = TypedEvent<
  [string, string, string, BigNumber],
  LiquidateCreditAccountEventObject
>;

export type LiquidateCreditAccountEventFilter =
  TypedEventFilter<LiquidateCreditAccountEvent>;

export interface LiquidateExpiredCreditAccountEventObject {
  owner: string;
  liquidator: string;
  to: string;
  remainingFunds: BigNumber;
}
export type LiquidateExpiredCreditAccountEvent = TypedEvent<
  [string, string, string, BigNumber],
  LiquidateExpiredCreditAccountEventObject
>;

export type LiquidateExpiredCreditAccountEventFilter =
  TypedEventFilter<LiquidateExpiredCreditAccountEvent>;

export interface MultiCallFinishedEventObject {}
export type MultiCallFinishedEvent = TypedEvent<
  [],
  MultiCallFinishedEventObject
>;

export type MultiCallFinishedEventFilter =
  TypedEventFilter<MultiCallFinishedEvent>;

export interface MultiCallStartedEventObject {
  borrower: string;
}
export type MultiCallStartedEvent = TypedEvent<
  [string],
  MultiCallStartedEventObject
>;

export type MultiCallStartedEventFilter =
  TypedEventFilter<MultiCallStartedEvent>;

export interface NewConfiguratorEventObject {
  newConfigurator: string;
}
export type NewConfiguratorEvent = TypedEvent<
  [string],
  NewConfiguratorEventObject
>;

export type NewConfiguratorEventFilter = TypedEventFilter<NewConfiguratorEvent>;

export interface OpenCreditAccountEventObject {
  onBehalfOf: string;
  creditAccount: string;
  borrowAmount: BigNumber;
  referralCode: number;
}
export type OpenCreditAccountEvent = TypedEvent<
  [string, string, BigNumber, number],
  OpenCreditAccountEventObject
>;

export type OpenCreditAccountEventFilter =
  TypedEventFilter<OpenCreditAccountEvent>;

export interface TokenDisabledEventObject {
  creditAccount: string;
  token: string;
}
export type TokenDisabledEvent = TypedEvent<
  [string, string],
  TokenDisabledEventObject
>;

export type TokenDisabledEventFilter = TypedEventFilter<TokenDisabledEvent>;

export interface TokenEnabledEventObject {
  creditAccount: string;
  token: string;
}
export type TokenEnabledEvent = TypedEvent<
  [string, string],
  TokenEnabledEventObject
>;

export type TokenEnabledEventFilter = TypedEventFilter<TokenEnabledEvent>;

export interface TransferAccountEventObject {
  oldOwner: string;
  newOwner: string;
}
export type TransferAccountEvent = TypedEvent<
  [string, string],
  TransferAccountEventObject
>;

export type TransferAccountEventFilter = TypedEventFilter<TransferAccountEvent>;

export interface TransferAccountAllowedEventObject {
  from: string;
  to: string;
  state: boolean;
}
export type TransferAccountAllowedEvent = TypedEvent<
  [string, string, boolean],
  TransferAccountAllowedEventObject
>;

export type TransferAccountAllowedEventFilter =
  TypedEventFilter<TransferAccountAllowedEvent>;

export interface logEventObject {
  arg0: string;
}
export type logEvent = TypedEvent<[string], logEventObject>;

export type logEventFilter = TypedEventFilter<logEvent>;

export interface log_addressEventObject {
  arg0: string;
}
export type log_addressEvent = TypedEvent<[string], log_addressEventObject>;

export type log_addressEventFilter = TypedEventFilter<log_addressEvent>;

export interface log_bytesEventObject {
  arg0: string;
}
export type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;

export type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;

export interface log_bytes32EventObject {
  arg0: string;
}
export type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;

export type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;

export interface log_intEventObject {
  arg0: BigNumber;
}
export type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;

export type log_intEventFilter = TypedEventFilter<log_intEvent>;

export interface log_named_addressEventObject {
  key: string;
  val: string;
}
export type log_named_addressEvent = TypedEvent<
  [string, string],
  log_named_addressEventObject
>;

export type log_named_addressEventFilter =
  TypedEventFilter<log_named_addressEvent>;

export interface log_named_bytesEventObject {
  key: string;
  val: string;
}
export type log_named_bytesEvent = TypedEvent<
  [string, string],
  log_named_bytesEventObject
>;

export type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;

export interface log_named_bytes32EventObject {
  key: string;
  val: string;
}
export type log_named_bytes32Event = TypedEvent<
  [string, string],
  log_named_bytes32EventObject
>;

export type log_named_bytes32EventFilter =
  TypedEventFilter<log_named_bytes32Event>;

export interface log_named_decimal_intEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_intEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_intEventObject
>;

export type log_named_decimal_intEventFilter =
  TypedEventFilter<log_named_decimal_intEvent>;

export interface log_named_decimal_uintEventObject {
  key: string;
  val: BigNumber;
  decimals: BigNumber;
}
export type log_named_decimal_uintEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  log_named_decimal_uintEventObject
>;

export type log_named_decimal_uintEventFilter =
  TypedEventFilter<log_named_decimal_uintEvent>;

export interface log_named_intEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_intEvent = TypedEvent<
  [string, BigNumber],
  log_named_intEventObject
>;

export type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;

export interface log_named_stringEventObject {
  key: string;
  val: string;
}
export type log_named_stringEvent = TypedEvent<
  [string, string],
  log_named_stringEventObject
>;

export type log_named_stringEventFilter =
  TypedEventFilter<log_named_stringEvent>;

export interface log_named_uintEventObject {
  key: string;
  val: BigNumber;
}
export type log_named_uintEvent = TypedEvent<
  [string, BigNumber],
  log_named_uintEventObject
>;

export type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;

export interface log_stringEventObject {
  arg0: string;
}
export type log_stringEvent = TypedEvent<[string], log_stringEventObject>;

export type log_stringEventFilter = TypedEventFilter<log_stringEvent>;

export interface log_uintEventObject {
  arg0: BigNumber;
}
export type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;

export type log_uintEventFilter = TypedEventFilter<log_uintEvent>;

export interface logsEventObject {
  arg0: string;
}
export type logsEvent = TypedEvent<[string], logsEventObject>;

export type logsEventFilter = TypedEventFilter<logsEvent>;

export interface CurveV1Adapter4AssetsTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CurveV1Adapter4AssetsTestInterface;

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
    IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;

    adapter(overrides?: CallOverrides): Promise<[string]>;

    cft(overrides?: CallOverrides): Promise<[string]>;

    creditConfigurator(overrides?: CallOverrides): Promise<[string]>;

    creditFacade(overrides?: CallOverrides): Promise<[string]>;

    creditManager(overrides?: CallOverrides): Promise<[string]>;

    curveV1Mock(overrides?: CallOverrides): Promise<[string]>;

    failed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACV1_4_01_constructor_sets_correct_values(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACV1_4_02A_constructor_reverts_for_unknown_addresses(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACV1_4_02_constructor_reverts_for_zero_addresses(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACV1_4_03_liquidity_functions_revert_if_user_has_no_account(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACV1_4_04A_add_all_liquidity_one_coin_works_as_expected(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACV1_4_04_add_liquidity_works_as_expected(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACV1_4_05_remove_liquidity_works_as_expected(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACV1_4_06_remove_liquidity_imbalance_works_as_expected(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlying(overrides?: CallOverrides): Promise<[string]>;
  };

  IS_TEST(overrides?: CallOverrides): Promise<boolean>;

  adapter(overrides?: CallOverrides): Promise<string>;

  cft(overrides?: CallOverrides): Promise<string>;

  creditConfigurator(overrides?: CallOverrides): Promise<string>;

  creditFacade(overrides?: CallOverrides): Promise<string>;

  creditManager(overrides?: CallOverrides): Promise<string>;

  curveV1Mock(overrides?: CallOverrides): Promise<string>;

  failed(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUp(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACV1_4_01_constructor_sets_correct_values(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACV1_4_02A_constructor_reverts_for_unknown_addresses(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACV1_4_02_constructor_reverts_for_zero_addresses(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACV1_4_03_liquidity_functions_revert_if_user_has_no_account(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACV1_4_04A_add_all_liquidity_one_coin_works_as_expected(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACV1_4_04_add_liquidity_works_as_expected(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACV1_4_05_remove_liquidity_works_as_expected(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACV1_4_06_remove_liquidity_imbalance_works_as_expected(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlying(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;

    adapter(overrides?: CallOverrides): Promise<string>;

    cft(overrides?: CallOverrides): Promise<string>;

    creditConfigurator(overrides?: CallOverrides): Promise<string>;

    creditFacade(overrides?: CallOverrides): Promise<string>;

    creditManager(overrides?: CallOverrides): Promise<string>;

    curveV1Mock(overrides?: CallOverrides): Promise<string>;

    failed(overrides?: CallOverrides): Promise<boolean>;

    setUp(overrides?: CallOverrides): Promise<void>;

    test_ACV1_4_01_constructor_sets_correct_values(
      overrides?: CallOverrides
    ): Promise<void>;

    test_ACV1_4_02A_constructor_reverts_for_unknown_addresses(
      overrides?: CallOverrides
    ): Promise<void>;

    test_ACV1_4_02_constructor_reverts_for_zero_addresses(
      overrides?: CallOverrides
    ): Promise<void>;

    test_ACV1_4_03_liquidity_functions_revert_if_user_has_no_account(
      overrides?: CallOverrides
    ): Promise<void>;

    test_ACV1_4_04A_add_all_liquidity_one_coin_works_as_expected(
      overrides?: CallOverrides
    ): Promise<void>;

    test_ACV1_4_04_add_liquidity_works_as_expected(
      overrides?: CallOverrides
    ): Promise<void>;

    test_ACV1_4_05_remove_liquidity_works_as_expected(
      overrides?: CallOverrides
    ): Promise<void>;

    test_ACV1_4_06_remove_liquidity_imbalance_works_as_expected(
      overrides?: CallOverrides
    ): Promise<void>;

    underlying(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AddCollateral(address,address,uint256)"(
      onBehalfOf?: string | null,
      token?: string | null,
      value?: null
    ): AddCollateralEventFilter;
    AddCollateral(
      onBehalfOf?: string | null,
      token?: string | null,
      value?: null
    ): AddCollateralEventFilter;

    "CloseCreditAccount(address,address)"(
      owner?: string | null,
      to?: string | null
    ): CloseCreditAccountEventFilter;
    CloseCreditAccount(
      owner?: string | null,
      to?: string | null
    ): CloseCreditAccountEventFilter;

    "DecreaseBorrowedAmount(address,uint256)"(
      borrower?: string | null,
      amount?: null
    ): DecreaseBorrowedAmountEventFilter;
    DecreaseBorrowedAmount(
      borrower?: string | null,
      amount?: null
    ): DecreaseBorrowedAmountEventFilter;

    "ExecuteOrder(address,address)"(
      borrower?: string | null,
      target?: string | null
    ): ExecuteOrderEventFilter;
    ExecuteOrder(
      borrower?: string | null,
      target?: string | null
    ): ExecuteOrderEventFilter;

    "IncreaseBorrowedAmount(address,uint256)"(
      borrower?: string | null,
      amount?: null
    ): IncreaseBorrowedAmountEventFilter;
    IncreaseBorrowedAmount(
      borrower?: string | null,
      amount?: null
    ): IncreaseBorrowedAmountEventFilter;

    "LiquidateCreditAccount(address,address,address,uint256)"(
      owner?: string | null,
      liquidator?: string | null,
      to?: string | null,
      remainingFunds?: null
    ): LiquidateCreditAccountEventFilter;
    LiquidateCreditAccount(
      owner?: string | null,
      liquidator?: string | null,
      to?: string | null,
      remainingFunds?: null
    ): LiquidateCreditAccountEventFilter;

    "LiquidateExpiredCreditAccount(address,address,address,uint256)"(
      owner?: string | null,
      liquidator?: string | null,
      to?: string | null,
      remainingFunds?: null
    ): LiquidateExpiredCreditAccountEventFilter;
    LiquidateExpiredCreditAccount(
      owner?: string | null,
      liquidator?: string | null,
      to?: string | null,
      remainingFunds?: null
    ): LiquidateExpiredCreditAccountEventFilter;

    "MultiCallFinished()"(): MultiCallFinishedEventFilter;
    MultiCallFinished(): MultiCallFinishedEventFilter;

    "MultiCallStarted(address)"(
      borrower?: string | null
    ): MultiCallStartedEventFilter;
    MultiCallStarted(borrower?: string | null): MultiCallStartedEventFilter;

    "NewConfigurator(address)"(
      newConfigurator?: string | null
    ): NewConfiguratorEventFilter;
    NewConfigurator(
      newConfigurator?: string | null
    ): NewConfiguratorEventFilter;

    "OpenCreditAccount(address,address,uint256,uint16)"(
      onBehalfOf?: string | null,
      creditAccount?: string | null,
      borrowAmount?: null,
      referralCode?: null
    ): OpenCreditAccountEventFilter;
    OpenCreditAccount(
      onBehalfOf?: string | null,
      creditAccount?: string | null,
      borrowAmount?: null,
      referralCode?: null
    ): OpenCreditAccountEventFilter;

    "TokenDisabled(address,address)"(
      creditAccount?: null,
      token?: null
    ): TokenDisabledEventFilter;
    TokenDisabled(creditAccount?: null, token?: null): TokenDisabledEventFilter;

    "TokenEnabled(address,address)"(
      creditAccount?: null,
      token?: null
    ): TokenEnabledEventFilter;
    TokenEnabled(creditAccount?: null, token?: null): TokenEnabledEventFilter;

    "TransferAccount(address,address)"(
      oldOwner?: string | null,
      newOwner?: string | null
    ): TransferAccountEventFilter;
    TransferAccount(
      oldOwner?: string | null,
      newOwner?: string | null
    ): TransferAccountEventFilter;

    "TransferAccountAllowed(address,address,bool)"(
      from?: string | null,
      to?: string | null,
      state?: null
    ): TransferAccountAllowedEventFilter;
    TransferAccountAllowed(
      from?: string | null,
      to?: string | null,
      state?: null
    ): TransferAccountAllowedEventFilter;

    "log(string)"(arg0?: null): logEventFilter;
    log(arg0?: null): logEventFilter;

    "log_address(address)"(arg0?: null): log_addressEventFilter;
    log_address(arg0?: null): log_addressEventFilter;

    "log_bytes(bytes)"(arg0?: null): log_bytesEventFilter;
    log_bytes(arg0?: null): log_bytesEventFilter;

    "log_bytes32(bytes32)"(arg0?: null): log_bytes32EventFilter;
    log_bytes32(arg0?: null): log_bytes32EventFilter;

    "log_int(int256)"(arg0?: null): log_intEventFilter;
    log_int(arg0?: null): log_intEventFilter;

    "log_named_address(string,address)"(
      key?: null,
      val?: null
    ): log_named_addressEventFilter;
    log_named_address(key?: null, val?: null): log_named_addressEventFilter;

    "log_named_bytes(string,bytes)"(
      key?: null,
      val?: null
    ): log_named_bytesEventFilter;
    log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;

    "log_named_bytes32(string,bytes32)"(
      key?: null,
      val?: null
    ): log_named_bytes32EventFilter;
    log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;

    "log_named_decimal_int(string,int256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;
    log_named_decimal_int(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_intEventFilter;

    "log_named_decimal_uint(string,uint256,uint256)"(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;
    log_named_decimal_uint(
      key?: null,
      val?: null,
      decimals?: null
    ): log_named_decimal_uintEventFilter;

    "log_named_int(string,int256)"(
      key?: null,
      val?: null
    ): log_named_intEventFilter;
    log_named_int(key?: null, val?: null): log_named_intEventFilter;

    "log_named_string(string,string)"(
      key?: null,
      val?: null
    ): log_named_stringEventFilter;
    log_named_string(key?: null, val?: null): log_named_stringEventFilter;

    "log_named_uint(string,uint256)"(
      key?: null,
      val?: null
    ): log_named_uintEventFilter;
    log_named_uint(key?: null, val?: null): log_named_uintEventFilter;

    "log_string(string)"(arg0?: null): log_stringEventFilter;
    log_string(arg0?: null): log_stringEventFilter;

    "log_uint(uint256)"(arg0?: null): log_uintEventFilter;
    log_uint(arg0?: null): log_uintEventFilter;

    "logs(bytes)"(arg0?: null): logsEventFilter;
    logs(arg0?: null): logsEventFilter;
  };

  estimateGas: {
    IS_TEST(overrides?: CallOverrides): Promise<BigNumber>;

    adapter(overrides?: CallOverrides): Promise<BigNumber>;

    cft(overrides?: CallOverrides): Promise<BigNumber>;

    creditConfigurator(overrides?: CallOverrides): Promise<BigNumber>;

    creditFacade(overrides?: CallOverrides): Promise<BigNumber>;

    creditManager(overrides?: CallOverrides): Promise<BigNumber>;

    curveV1Mock(overrides?: CallOverrides): Promise<BigNumber>;

    failed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACV1_4_01_constructor_sets_correct_values(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACV1_4_02A_constructor_reverts_for_unknown_addresses(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACV1_4_02_constructor_reverts_for_zero_addresses(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACV1_4_03_liquidity_functions_revert_if_user_has_no_account(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACV1_4_04A_add_all_liquidity_one_coin_works_as_expected(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACV1_4_04_add_liquidity_works_as_expected(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACV1_4_05_remove_liquidity_works_as_expected(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACV1_4_06_remove_liquidity_imbalance_works_as_expected(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creditConfigurator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    curveV1Mock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    failed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACV1_4_01_constructor_sets_correct_values(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACV1_4_02A_constructor_reverts_for_unknown_addresses(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACV1_4_02_constructor_reverts_for_zero_addresses(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACV1_4_03_liquidity_functions_revert_if_user_has_no_account(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACV1_4_04A_add_all_liquidity_one_coin_works_as_expected(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACV1_4_04_add_liquidity_works_as_expected(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACV1_4_05_remove_liquidity_works_as_expected(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACV1_4_06_remove_liquidity_imbalance_works_as_expected(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
