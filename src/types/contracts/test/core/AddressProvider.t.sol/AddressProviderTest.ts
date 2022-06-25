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

export interface AddressProviderTestInterface extends utils.Interface {
  functions: {
    "IS_TEST()": FunctionFragment;
    "failed()": FunctionFragment;
    "setUp()": FunctionFragment;
    "test_AP_01_getAddress_reverts_if_contact_not_found()": FunctionFragment;
    "test_AP_02_setAddress_emits_event_correctly()": FunctionFragment;
    "test_AP_03_setACL_correctly_sets_ACL()": FunctionFragment;
    "test_AP_04_setContractsRegister_correctly_sets_ContractsRegister()": FunctionFragment;
    "test_AP_05_setPriceOracle_correctly_sets_PriceOracle()": FunctionFragment;
    "test_AP_06_setAccountFactory_correctly_sets_AccountFactory()": FunctionFragment;
    "test_AP_07_setDataCompressor_correctly_sets_DataCompressor()": FunctionFragment;
    "test_AP_08_setTreasuryContract_correctly_sets_TreasuryContract()": FunctionFragment;
    "test_AP_09_setGearToken_correctly_sets_GearToken()": FunctionFragment;
    "test_AP_10_setWethToken_correctly_sets_WethToken()": FunctionFragment;
    "test_AP_11_setWETHGateway_correctly_sets_WethGateway()": FunctionFragment;
    "test_AP_12_set_functions_revert_if_called_by_non_owner()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IS_TEST"
      | "failed"
      | "setUp"
      | "test_AP_01_getAddress_reverts_if_contact_not_found"
      | "test_AP_02_setAddress_emits_event_correctly"
      | "test_AP_03_setACL_correctly_sets_ACL"
      | "test_AP_04_setContractsRegister_correctly_sets_ContractsRegister"
      | "test_AP_05_setPriceOracle_correctly_sets_PriceOracle"
      | "test_AP_06_setAccountFactory_correctly_sets_AccountFactory"
      | "test_AP_07_setDataCompressor_correctly_sets_DataCompressor"
      | "test_AP_08_setTreasuryContract_correctly_sets_TreasuryContract"
      | "test_AP_09_setGearToken_correctly_sets_GearToken"
      | "test_AP_10_setWethToken_correctly_sets_WethToken"
      | "test_AP_11_setWETHGateway_correctly_sets_WethGateway"
      | "test_AP_12_set_functions_revert_if_called_by_non_owner"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "test_AP_01_getAddress_reverts_if_contact_not_found",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_AP_02_setAddress_emits_event_correctly",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_AP_03_setACL_correctly_sets_ACL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_AP_04_setContractsRegister_correctly_sets_ContractsRegister",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_AP_05_setPriceOracle_correctly_sets_PriceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_AP_06_setAccountFactory_correctly_sets_AccountFactory",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_AP_07_setDataCompressor_correctly_sets_DataCompressor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_AP_08_setTreasuryContract_correctly_sets_TreasuryContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_AP_09_setGearToken_correctly_sets_GearToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_AP_10_setWethToken_correctly_sets_WethToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_AP_11_setWETHGateway_correctly_sets_WethGateway",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_AP_12_set_functions_revert_if_called_by_non_owner",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "test_AP_01_getAddress_reverts_if_contact_not_found",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_AP_02_setAddress_emits_event_correctly",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_AP_03_setACL_correctly_sets_ACL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_AP_04_setContractsRegister_correctly_sets_ContractsRegister",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_AP_05_setPriceOracle_correctly_sets_PriceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_AP_06_setAccountFactory_correctly_sets_AccountFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_AP_07_setDataCompressor_correctly_sets_DataCompressor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_AP_08_setTreasuryContract_correctly_sets_TreasuryContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_AP_09_setGearToken_correctly_sets_GearToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_AP_10_setWethToken_correctly_sets_WethToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_AP_11_setWETHGateway_correctly_sets_WethGateway",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_AP_12_set_functions_revert_if_called_by_non_owner",
    data: BytesLike
  ): Result;

  events: {
    "AddressSet(bytes32,address)": EventFragment;
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

  getEvent(nameOrSignatureOrTopic: "AddressSet"): EventFragment;
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

export interface AddressSetEventObject {
  service: string;
  newAddress: string;
}
export type AddressSetEvent = TypedEvent<
  [string, string],
  AddressSetEventObject
>;

export type AddressSetEventFilter = TypedEventFilter<AddressSetEvent>;

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

export interface AddressProviderTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AddressProviderTestInterface;

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

    failed(overrides?: CallOverrides): Promise<[boolean]>;

    setUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_AP_01_getAddress_reverts_if_contact_not_found(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_AP_02_setAddress_emits_event_correctly(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_AP_03_setACL_correctly_sets_ACL(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_AP_04_setContractsRegister_correctly_sets_ContractsRegister(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_AP_05_setPriceOracle_correctly_sets_PriceOracle(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_AP_06_setAccountFactory_correctly_sets_AccountFactory(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_AP_07_setDataCompressor_correctly_sets_DataCompressor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_AP_08_setTreasuryContract_correctly_sets_TreasuryContract(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_AP_09_setGearToken_correctly_sets_GearToken(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_AP_10_setWethToken_correctly_sets_WethToken(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_AP_11_setWETHGateway_correctly_sets_WethGateway(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_AP_12_set_functions_revert_if_called_by_non_owner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  IS_TEST(overrides?: CallOverrides): Promise<boolean>;

  failed(overrides?: CallOverrides): Promise<boolean>;

  setUp(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_AP_01_getAddress_reverts_if_contact_not_found(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_AP_02_setAddress_emits_event_correctly(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_AP_03_setACL_correctly_sets_ACL(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_AP_04_setContractsRegister_correctly_sets_ContractsRegister(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_AP_05_setPriceOracle_correctly_sets_PriceOracle(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_AP_06_setAccountFactory_correctly_sets_AccountFactory(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_AP_07_setDataCompressor_correctly_sets_DataCompressor(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_AP_08_setTreasuryContract_correctly_sets_TreasuryContract(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_AP_09_setGearToken_correctly_sets_GearToken(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_AP_10_setWethToken_correctly_sets_WethToken(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_AP_11_setWETHGateway_correctly_sets_WethGateway(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_AP_12_set_functions_revert_if_called_by_non_owner(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;

    failed(overrides?: CallOverrides): Promise<boolean>;

    setUp(overrides?: CallOverrides): Promise<void>;

    test_AP_01_getAddress_reverts_if_contact_not_found(
      overrides?: CallOverrides
    ): Promise<void>;

    test_AP_02_setAddress_emits_event_correctly(
      overrides?: CallOverrides
    ): Promise<void>;

    test_AP_03_setACL_correctly_sets_ACL(
      overrides?: CallOverrides
    ): Promise<void>;

    test_AP_04_setContractsRegister_correctly_sets_ContractsRegister(
      overrides?: CallOverrides
    ): Promise<void>;

    test_AP_05_setPriceOracle_correctly_sets_PriceOracle(
      overrides?: CallOverrides
    ): Promise<void>;

    test_AP_06_setAccountFactory_correctly_sets_AccountFactory(
      overrides?: CallOverrides
    ): Promise<void>;

    test_AP_07_setDataCompressor_correctly_sets_DataCompressor(
      overrides?: CallOverrides
    ): Promise<void>;

    test_AP_08_setTreasuryContract_correctly_sets_TreasuryContract(
      overrides?: CallOverrides
    ): Promise<void>;

    test_AP_09_setGearToken_correctly_sets_GearToken(
      overrides?: CallOverrides
    ): Promise<void>;

    test_AP_10_setWethToken_correctly_sets_WethToken(
      overrides?: CallOverrides
    ): Promise<void>;

    test_AP_11_setWETHGateway_correctly_sets_WethGateway(
      overrides?: CallOverrides
    ): Promise<void>;

    test_AP_12_set_functions_revert_if_called_by_non_owner(
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddressSet(bytes32,address)"(
      service?: BytesLike | null,
      newAddress?: string | null
    ): AddressSetEventFilter;
    AddressSet(
      service?: BytesLike | null,
      newAddress?: string | null
    ): AddressSetEventFilter;

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

    failed(overrides?: CallOverrides): Promise<BigNumber>;

    setUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_AP_01_getAddress_reverts_if_contact_not_found(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_AP_02_setAddress_emits_event_correctly(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_AP_03_setACL_correctly_sets_ACL(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_AP_04_setContractsRegister_correctly_sets_ContractsRegister(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_AP_05_setPriceOracle_correctly_sets_PriceOracle(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_AP_06_setAccountFactory_correctly_sets_AccountFactory(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_AP_07_setDataCompressor_correctly_sets_DataCompressor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_AP_08_setTreasuryContract_correctly_sets_TreasuryContract(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_AP_09_setGearToken_correctly_sets_GearToken(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_AP_10_setWethToken_correctly_sets_WethToken(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_AP_11_setWETHGateway_correctly_sets_WethGateway(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_AP_12_set_functions_revert_if_called_by_non_owner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    failed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_AP_01_getAddress_reverts_if_contact_not_found(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_AP_02_setAddress_emits_event_correctly(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_AP_03_setACL_correctly_sets_ACL(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_AP_04_setContractsRegister_correctly_sets_ContractsRegister(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_AP_05_setPriceOracle_correctly_sets_PriceOracle(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_AP_06_setAccountFactory_correctly_sets_AccountFactory(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_AP_07_setDataCompressor_correctly_sets_DataCompressor(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_AP_08_setTreasuryContract_correctly_sets_TreasuryContract(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_AP_09_setGearToken_correctly_sets_GearToken(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_AP_10_setWethToken_correctly_sets_WethToken(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_AP_11_setWETHGateway_correctly_sets_WethGateway(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_AP_12_set_functions_revert_if_called_by_non_owner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
