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

export interface ACLTestInterface extends utils.Interface {
  functions: {
    "IS_TEST()": FunctionFragment;
    "failed()": FunctionFragment;
    "setUp()": FunctionFragment;
    "test_ACL_01_add_remove_reverts_on_non_owner()": FunctionFragment;
    "test_ACL_02_addPausableAdmin_adds_pool()": FunctionFragment;
    "test_ACL_03_removePausableAdmin_removes_admin()": FunctionFragment;
    "test_ACL_04_addUnpausableAdmin_adds_pool()": FunctionFragment;
    "test_ACL_05_removeUnpausableAdmin_removes_admin()": FunctionFragment;
    "test_ACL_06_isConfigurator_correct()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "IS_TEST"
      | "failed"
      | "setUp"
      | "test_ACL_01_add_remove_reverts_on_non_owner"
      | "test_ACL_02_addPausableAdmin_adds_pool"
      | "test_ACL_03_removePausableAdmin_removes_admin"
      | "test_ACL_04_addUnpausableAdmin_adds_pool"
      | "test_ACL_05_removeUnpausableAdmin_removes_admin"
      | "test_ACL_06_isConfigurator_correct"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
  encodeFunctionData(functionFragment: "failed", values?: undefined): string;
  encodeFunctionData(functionFragment: "setUp", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "test_ACL_01_add_remove_reverts_on_non_owner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_ACL_02_addPausableAdmin_adds_pool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_ACL_03_removePausableAdmin_removes_admin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_ACL_04_addUnpausableAdmin_adds_pool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_ACL_05_removeUnpausableAdmin_removes_admin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "test_ACL_06_isConfigurator_correct",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUp", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "test_ACL_01_add_remove_reverts_on_non_owner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_ACL_02_addPausableAdmin_adds_pool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_ACL_03_removePausableAdmin_removes_admin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_ACL_04_addUnpausableAdmin_adds_pool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_ACL_05_removeUnpausableAdmin_removes_admin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "test_ACL_06_isConfigurator_correct",
    data: BytesLike
  ): Result;

  events: {
    "PausableAdminAdded(address)": EventFragment;
    "PausableAdminRemoved(address)": EventFragment;
    "UnpausableAdminAdded(address)": EventFragment;
    "UnpausableAdminRemoved(address)": EventFragment;
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

  getEvent(nameOrSignatureOrTopic: "PausableAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PausableAdminRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnpausableAdminAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnpausableAdminRemoved"): EventFragment;
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

export interface PausableAdminAddedEventObject {
  newAdmin: string;
}
export type PausableAdminAddedEvent = TypedEvent<
  [string],
  PausableAdminAddedEventObject
>;

export type PausableAdminAddedEventFilter =
  TypedEventFilter<PausableAdminAddedEvent>;

export interface PausableAdminRemovedEventObject {
  admin: string;
}
export type PausableAdminRemovedEvent = TypedEvent<
  [string],
  PausableAdminRemovedEventObject
>;

export type PausableAdminRemovedEventFilter =
  TypedEventFilter<PausableAdminRemovedEvent>;

export interface UnpausableAdminAddedEventObject {
  newAdmin: string;
}
export type UnpausableAdminAddedEvent = TypedEvent<
  [string],
  UnpausableAdminAddedEventObject
>;

export type UnpausableAdminAddedEventFilter =
  TypedEventFilter<UnpausableAdminAddedEvent>;

export interface UnpausableAdminRemovedEventObject {
  admin: string;
}
export type UnpausableAdminRemovedEvent = TypedEvent<
  [string],
  UnpausableAdminRemovedEventObject
>;

export type UnpausableAdminRemovedEventFilter =
  TypedEventFilter<UnpausableAdminRemovedEvent>;

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

export interface ACLTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ACLTestInterface;

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

    failed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACL_01_add_remove_reverts_on_non_owner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACL_02_addPausableAdmin_adds_pool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACL_03_removePausableAdmin_removes_admin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACL_04_addUnpausableAdmin_adds_pool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACL_05_removeUnpausableAdmin_removes_admin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    test_ACL_06_isConfigurator_correct(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  IS_TEST(overrides?: CallOverrides): Promise<boolean>;

  failed(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUp(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACL_01_add_remove_reverts_on_non_owner(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACL_02_addPausableAdmin_adds_pool(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACL_03_removePausableAdmin_removes_admin(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACL_04_addUnpausableAdmin_adds_pool(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACL_05_removeUnpausableAdmin_removes_admin(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  test_ACL_06_isConfigurator_correct(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;

    failed(overrides?: CallOverrides): Promise<boolean>;

    setUp(overrides?: CallOverrides): Promise<void>;

    test_ACL_01_add_remove_reverts_on_non_owner(
      overrides?: CallOverrides
    ): Promise<void>;

    test_ACL_02_addPausableAdmin_adds_pool(
      overrides?: CallOverrides
    ): Promise<void>;

    test_ACL_03_removePausableAdmin_removes_admin(
      overrides?: CallOverrides
    ): Promise<void>;

    test_ACL_04_addUnpausableAdmin_adds_pool(
      overrides?: CallOverrides
    ): Promise<void>;

    test_ACL_05_removeUnpausableAdmin_removes_admin(
      overrides?: CallOverrides
    ): Promise<void>;

    test_ACL_06_isConfigurator_correct(
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PausableAdminAdded(address)"(
      newAdmin?: string | null
    ): PausableAdminAddedEventFilter;
    PausableAdminAdded(newAdmin?: string | null): PausableAdminAddedEventFilter;

    "PausableAdminRemoved(address)"(
      admin?: string | null
    ): PausableAdminRemovedEventFilter;
    PausableAdminRemoved(
      admin?: string | null
    ): PausableAdminRemovedEventFilter;

    "UnpausableAdminAdded(address)"(
      newAdmin?: string | null
    ): UnpausableAdminAddedEventFilter;
    UnpausableAdminAdded(
      newAdmin?: string | null
    ): UnpausableAdminAddedEventFilter;

    "UnpausableAdminRemoved(address)"(
      admin?: string | null
    ): UnpausableAdminRemovedEventFilter;
    UnpausableAdminRemoved(
      admin?: string | null
    ): UnpausableAdminRemovedEventFilter;

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

    failed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACL_01_add_remove_reverts_on_non_owner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACL_02_addPausableAdmin_adds_pool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACL_03_removePausableAdmin_removes_admin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACL_04_addUnpausableAdmin_adds_pool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACL_05_removeUnpausableAdmin_removes_admin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    test_ACL_06_isConfigurator_correct(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    failed(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUp(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACL_01_add_remove_reverts_on_non_owner(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACL_02_addPausableAdmin_adds_pool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACL_03_removePausableAdmin_removes_admin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACL_04_addUnpausableAdmin_adds_pool(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACL_05_removeUnpausableAdmin_removes_admin(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    test_ACL_06_isConfigurator_correct(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
