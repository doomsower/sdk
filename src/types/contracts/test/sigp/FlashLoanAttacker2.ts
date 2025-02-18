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
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface FlashLoanAttacker2Interface extends utils.Interface {
  functions: {
    "closeCreditAccount(address)": FunctionFragment;
    "fundAndCloseAttack(address,address,uint256)": FunctionFragment;
    "openAndCloseAttack(uint256,address,uint16)": FunctionFragment;
    "openCreditAccount(uint256,address,uint16)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "closeCreditAccount"
      | "fundAndCloseAttack"
      | "openAndCloseAttack"
      | "openCreditAccount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "closeCreditAccount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "fundAndCloseAttack",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "openAndCloseAttack",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "openCreditAccount",
    values: [BigNumberish, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "closeCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundAndCloseAttack",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openAndCloseAttack",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "openCreditAccount",
    data: BytesLike
  ): Result;

  events: {};
}

export interface FlashLoanAttacker2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FlashLoanAttacker2Interface;

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
    closeCreditAccount(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fundAndCloseAttack(
      onBehalfOf: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openAndCloseAttack(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    openCreditAccount(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  closeCreditAccount(
    to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fundAndCloseAttack(
    onBehalfOf: string,
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openAndCloseAttack(
    amount: BigNumberish,
    onBehalfOf: string,
    leverageFactor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  openCreditAccount(
    amount: BigNumberish,
    onBehalfOf: string,
    leverageFactor: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    closeCreditAccount(to: string, overrides?: CallOverrides): Promise<void>;

    fundAndCloseAttack(
      onBehalfOf: string,
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    openAndCloseAttack(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    openCreditAccount(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    closeCreditAccount(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fundAndCloseAttack(
      onBehalfOf: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openAndCloseAttack(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    openCreditAccount(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    closeCreditAccount(
      to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fundAndCloseAttack(
      onBehalfOf: string,
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openAndCloseAttack(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    openCreditAccount(
      amount: BigNumberish,
      onBehalfOf: string,
      leverageFactor: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
