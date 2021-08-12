/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface MockPoolServiceInterface extends ethers.utils.Interface {
  functions: {
    "_timestampLU()": FunctionFragment;
    "addLiquidity(uint256,address,uint256)": FunctionFragment;
    "availableLiquidity()": FunctionFragment;
    "borrowAPY_RAY()": FunctionFragment;
    "calcLinearCumulative_RAY()": FunctionFragment;
    "connectCreditManager(address)": FunctionFragment;
    "creditManagers(uint256)": FunctionFragment;
    "creditManagersCanBorrow(address)": FunctionFragment;
    "creditManagersCount()": FunctionFragment;
    "dieselToken()": FunctionFragment;
    "expectedLiquidity()": FunctionFragment;
    "expectedLiquidityLimit()": FunctionFragment;
    "forbidCreditManagerToBorrow(address)": FunctionFragment;
    "fromDiesel(uint256)": FunctionFragment;
    "getDieselRate_RAY()": FunctionFragment;
    "lendAccount()": FunctionFragment;
    "lendAmount()": FunctionFragment;
    "lendCreditAccount(uint256,address)": FunctionFragment;
    "newInterestRateModel(address)": FunctionFragment;
    "removeLiquidity(uint256,address)": FunctionFragment;
    "repayAmount()": FunctionFragment;
    "repayCreditAccount(uint256,uint256,uint256)": FunctionFragment;
    "repayLoss()": FunctionFragment;
    "repayProfit()": FunctionFragment;
    "setCumulative_RAY(uint256)": FunctionFragment;
    "toDiesel(uint256)": FunctionFragment;
    "totalBorrowed()": FunctionFragment;
    "underlyingToken()": FunctionFragment;
    "withdrawFee()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_timestampLU",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "availableLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowAPY_RAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "calcLinearCumulative_RAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "connectCreditManager",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "creditManagers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "creditManagersCanBorrow",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "creditManagersCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "dieselToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "expectedLiquidity",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "expectedLiquidityLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "forbidCreditManagerToBorrow",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "fromDiesel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getDieselRate_RAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lendAccount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lendAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lendCreditAccount",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "newInterestRateModel",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "repayAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repayCreditAccount",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "repayLoss", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "repayProfit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCumulative_RAY",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toDiesel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalBorrowed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFee",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "_timestampLU",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "availableLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowAPY_RAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcLinearCumulative_RAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "connectCreditManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManagers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManagersCanBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creditManagersCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "dieselToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expectedLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expectedLiquidityLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forbidCreditManagerToBorrow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fromDiesel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getDieselRate_RAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lendAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lendAmount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lendCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "newInterestRateModel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayCreditAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repayLoss", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "repayProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCumulative_RAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "toDiesel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalBorrowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFee",
    data: BytesLike
  ): Result;

  events: {
    "AddLiquidity(address,address,uint256,uint256)": EventFragment;
    "Borrow(address,address,uint256)": EventFragment;
    "BorrowForbidden(address)": EventFragment;
    "NewCreditManagerConnected(address)": EventFragment;
    "NewExpectedLiquidityLimit(uint256)": EventFragment;
    "NewInterestRateModel(address)": EventFragment;
    "RemoveLiquidity(address,address,uint256)": EventFragment;
    "Repay(address,uint256,uint256,uint256)": EventFragment;
    "UncoveredLoss(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Borrow"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BorrowForbidden"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewCreditManagerConnected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewExpectedLiquidityLimit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewInterestRateModel"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Repay"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UncoveredLoss"): EventFragment;
}

export class MockPoolService extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: MockPoolServiceInterface;

  functions: {
    _timestampLU(overrides?: CallOverrides): Promise<[BigNumber]>;

    "_timestampLU()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    addLiquidity(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "addLiquidity(uint256,address,uint256)"(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    availableLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    "availableLiquidity()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    borrowAPY_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    "borrowAPY_RAY()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    "calcLinearCumulative_RAY()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    connectCreditManager(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "connectCreditManager(address)"(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    creditManagers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "creditManagers(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    creditManagersCanBorrow(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "creditManagersCanBorrow(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    creditManagersCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "creditManagersCount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    dieselToken(overrides?: CallOverrides): Promise<[string]>;

    "dieselToken()"(overrides?: CallOverrides): Promise<[string]>;

    expectedLiquidity(overrides?: CallOverrides): Promise<[BigNumber]>;

    "expectedLiquidity()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    expectedLiquidityLimit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "expectedLiquidityLimit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    forbidCreditManagerToBorrow(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "forbidCreditManagerToBorrow(address)"(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    fromDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "fromDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getDieselRate_RAY(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getDieselRate_RAY()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    lendAccount(overrides?: CallOverrides): Promise<[string]>;

    "lendAccount()"(overrides?: CallOverrides): Promise<[string]>;

    lendAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "lendAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    lendCreditAccount(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "lendCreditAccount(uint256,address)"(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    newInterestRateModel(
      _interestRateModel: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "newInterestRateModel(address)"(
      _interestRateModel: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "removeLiquidity(uint256,address)"(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    repayAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "repayAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    repayCreditAccount(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "repayCreditAccount(uint256,uint256,uint256)"(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    repayLoss(overrides?: CallOverrides): Promise<[BigNumber]>;

    "repayLoss()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    repayProfit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "repayProfit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    setCumulative_RAY(
      _cumulativeIndex_RAY: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCumulative_RAY(uint256)"(
      _cumulativeIndex_RAY: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    toDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "toDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalBorrowed(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalBorrowed()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    underlyingToken(overrides?: CallOverrides): Promise<[string]>;

    "underlyingToken()"(overrides?: CallOverrides): Promise<[string]>;

    withdrawFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    "withdrawFee()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  _timestampLU(overrides?: CallOverrides): Promise<BigNumber>;

  "_timestampLU()"(overrides?: CallOverrides): Promise<BigNumber>;

  addLiquidity(
    amount: BigNumberish,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "addLiquidity(uint256,address,uint256)"(
    amount: BigNumberish,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  availableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  "availableLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

  borrowAPY_RAY(overrides?: CallOverrides): Promise<BigNumber>;

  "borrowAPY_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

  calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;

  "calcLinearCumulative_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

  connectCreditManager(
    _creditManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "connectCreditManager(address)"(
    _creditManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  creditManagers(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "creditManagers(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  creditManagersCanBorrow(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "creditManagersCanBorrow(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  creditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;

  "creditManagersCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  dieselToken(overrides?: CallOverrides): Promise<string>;

  "dieselToken()"(overrides?: CallOverrides): Promise<string>;

  expectedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

  "expectedLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

  expectedLiquidityLimit(overrides?: CallOverrides): Promise<BigNumber>;

  "expectedLiquidityLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

  forbidCreditManagerToBorrow(
    _creditManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "forbidCreditManagerToBorrow(address)"(
    _creditManager: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  fromDiesel(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "fromDiesel(uint256)"(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getDieselRate_RAY(overrides?: CallOverrides): Promise<BigNumber>;

  "getDieselRate_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

  lendAccount(overrides?: CallOverrides): Promise<string>;

  "lendAccount()"(overrides?: CallOverrides): Promise<string>;

  lendAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "lendAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  lendCreditAccount(
    borrowedAmount: BigNumberish,
    creditAccount: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "lendCreditAccount(uint256,address)"(
    borrowedAmount: BigNumberish,
    creditAccount: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  newInterestRateModel(
    _interestRateModel: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "newInterestRateModel(address)"(
    _interestRateModel: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  removeLiquidity(
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "removeLiquidity(uint256,address)"(
    amount: BigNumberish,
    to: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  repayAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "repayAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  repayCreditAccount(
    borrowedAmount: BigNumberish,
    profit: BigNumberish,
    loss: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "repayCreditAccount(uint256,uint256,uint256)"(
    borrowedAmount: BigNumberish,
    profit: BigNumberish,
    loss: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  repayLoss(overrides?: CallOverrides): Promise<BigNumber>;

  "repayLoss()"(overrides?: CallOverrides): Promise<BigNumber>;

  repayProfit(overrides?: CallOverrides): Promise<BigNumber>;

  "repayProfit()"(overrides?: CallOverrides): Promise<BigNumber>;

  setCumulative_RAY(
    _cumulativeIndex_RAY: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCumulative_RAY(uint256)"(
    _cumulativeIndex_RAY: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  toDiesel(amount: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "toDiesel(uint256)"(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalBorrowed(overrides?: CallOverrides): Promise<BigNumber>;

  "totalBorrowed()"(overrides?: CallOverrides): Promise<BigNumber>;

  underlyingToken(overrides?: CallOverrides): Promise<string>;

  "underlyingToken()"(overrides?: CallOverrides): Promise<string>;

  withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

  "withdrawFee()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    _timestampLU(overrides?: CallOverrides): Promise<BigNumber>;

    "_timestampLU()"(overrides?: CallOverrides): Promise<BigNumber>;

    addLiquidity(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "addLiquidity(uint256,address,uint256)"(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    availableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "availableLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    borrowAPY_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    "borrowAPY_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    "calcLinearCumulative_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    connectCreditManager(
      _creditManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "connectCreditManager(address)"(
      _creditManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    creditManagers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "creditManagers(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    creditManagersCanBorrow(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "creditManagersCanBorrow(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    creditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;

    "creditManagersCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    dieselToken(overrides?: CallOverrides): Promise<string>;

    "dieselToken()"(overrides?: CallOverrides): Promise<string>;

    expectedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "expectedLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    expectedLiquidityLimit(overrides?: CallOverrides): Promise<BigNumber>;

    "expectedLiquidityLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

    forbidCreditManagerToBorrow(
      _creditManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "forbidCreditManagerToBorrow(address)"(
      _creditManager: string,
      overrides?: CallOverrides
    ): Promise<void>;

    fromDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fromDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDieselRate_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    "getDieselRate_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    lendAccount(overrides?: CallOverrides): Promise<string>;

    "lendAccount()"(overrides?: CallOverrides): Promise<string>;

    lendAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "lendAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    lendCreditAccount(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "lendCreditAccount(uint256,address)"(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: CallOverrides
    ): Promise<void>;

    newInterestRateModel(
      _interestRateModel: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "newInterestRateModel(address)"(
      _interestRateModel: string,
      overrides?: CallOverrides
    ): Promise<void>;

    removeLiquidity(
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "removeLiquidity(uint256,address)"(
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    repayAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "repayAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    repayCreditAccount(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "repayCreditAccount(uint256,uint256,uint256)"(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    repayLoss(overrides?: CallOverrides): Promise<BigNumber>;

    "repayLoss()"(overrides?: CallOverrides): Promise<BigNumber>;

    repayProfit(overrides?: CallOverrides): Promise<BigNumber>;

    "repayProfit()"(overrides?: CallOverrides): Promise<BigNumber>;

    setCumulative_RAY(
      _cumulativeIndex_RAY: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCumulative_RAY(uint256)"(
      _cumulativeIndex_RAY: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    toDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalBorrowed(overrides?: CallOverrides): Promise<BigNumber>;

    "totalBorrowed()"(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<string>;

    "underlyingToken()"(overrides?: CallOverrides): Promise<string>;

    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

    "withdrawFee()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    AddLiquidity(
      sender: string | null,
      onBehalfOf: string | null,
      amount: null,
      referralCode: null
    ): EventFilter;

    Borrow(
      creditManager: string | null,
      creditAccount: string | null,
      amount: null
    ): EventFilter;

    BorrowForbidden(creditManager: string | null): EventFilter;

    NewCreditManagerConnected(creditManager: string | null): EventFilter;

    NewExpectedLiquidityLimit(newLimit: null): EventFilter;

    NewInterestRateModel(newInterestRateModel: string | null): EventFilter;

    RemoveLiquidity(
      sender: string | null,
      to: string | null,
      amount: null
    ): EventFilter;

    Repay(
      creditManager: string | null,
      borrowedAmount: null,
      profit: null,
      loss: null
    ): EventFilter;

    UncoveredLoss(creditManager: string | null, loss: null): EventFilter;
  };

  estimateGas: {
    _timestampLU(overrides?: CallOverrides): Promise<BigNumber>;

    "_timestampLU()"(overrides?: CallOverrides): Promise<BigNumber>;

    addLiquidity(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "addLiquidity(uint256,address,uint256)"(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    availableLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "availableLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    borrowAPY_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    "borrowAPY_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    calcLinearCumulative_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    "calcLinearCumulative_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    connectCreditManager(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "connectCreditManager(address)"(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    creditManagers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "creditManagers(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditManagersCanBorrow(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "creditManagersCanBorrow(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    creditManagersCount(overrides?: CallOverrides): Promise<BigNumber>;

    "creditManagersCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    dieselToken(overrides?: CallOverrides): Promise<BigNumber>;

    "dieselToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    expectedLiquidity(overrides?: CallOverrides): Promise<BigNumber>;

    "expectedLiquidity()"(overrides?: CallOverrides): Promise<BigNumber>;

    expectedLiquidityLimit(overrides?: CallOverrides): Promise<BigNumber>;

    "expectedLiquidityLimit()"(overrides?: CallOverrides): Promise<BigNumber>;

    forbidCreditManagerToBorrow(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "forbidCreditManagerToBorrow(address)"(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    fromDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "fromDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDieselRate_RAY(overrides?: CallOverrides): Promise<BigNumber>;

    "getDieselRate_RAY()"(overrides?: CallOverrides): Promise<BigNumber>;

    lendAccount(overrides?: CallOverrides): Promise<BigNumber>;

    "lendAccount()"(overrides?: CallOverrides): Promise<BigNumber>;

    lendAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "lendAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    lendCreditAccount(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "lendCreditAccount(uint256,address)"(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    newInterestRateModel(
      _interestRateModel: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "newInterestRateModel(address)"(
      _interestRateModel: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    removeLiquidity(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "removeLiquidity(uint256,address)"(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    repayAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "repayAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

    repayCreditAccount(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "repayCreditAccount(uint256,uint256,uint256)"(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    repayLoss(overrides?: CallOverrides): Promise<BigNumber>;

    "repayLoss()"(overrides?: CallOverrides): Promise<BigNumber>;

    repayProfit(overrides?: CallOverrides): Promise<BigNumber>;

    "repayProfit()"(overrides?: CallOverrides): Promise<BigNumber>;

    setCumulative_RAY(
      _cumulativeIndex_RAY: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCumulative_RAY(uint256)"(
      _cumulativeIndex_RAY: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    toDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "toDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalBorrowed(overrides?: CallOverrides): Promise<BigNumber>;

    "totalBorrowed()"(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingToken(overrides?: CallOverrides): Promise<BigNumber>;

    "underlyingToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFee(overrides?: CallOverrides): Promise<BigNumber>;

    "withdrawFee()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    _timestampLU(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "_timestampLU()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addLiquidity(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "addLiquidity(uint256,address,uint256)"(
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    availableLiquidity(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "availableLiquidity()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    borrowAPY_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "borrowAPY_RAY()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calcLinearCumulative_RAY(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calcLinearCumulative_RAY()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    connectCreditManager(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "connectCreditManager(address)"(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    creditManagers(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "creditManagers(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditManagersCanBorrow(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "creditManagersCanBorrow(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    creditManagersCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "creditManagersCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dieselToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dieselToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    expectedLiquidity(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "expectedLiquidity()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    expectedLiquidityLimit(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "expectedLiquidityLimit()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    forbidCreditManagerToBorrow(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "forbidCreditManagerToBorrow(address)"(
      _creditManager: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    fromDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "fromDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDieselRate_RAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getDieselRate_RAY()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lendAccount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lendAccount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lendAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lendAmount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lendCreditAccount(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "lendCreditAccount(uint256,address)"(
      borrowedAmount: BigNumberish,
      creditAccount: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    newInterestRateModel(
      _interestRateModel: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "newInterestRateModel(address)"(
      _interestRateModel: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "removeLiquidity(uint256,address)"(
      amount: BigNumberish,
      to: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    repayAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "repayAmount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    repayCreditAccount(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "repayCreditAccount(uint256,uint256,uint256)"(
      borrowedAmount: BigNumberish,
      profit: BigNumberish,
      loss: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    repayLoss(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "repayLoss()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    repayProfit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "repayProfit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCumulative_RAY(
      _cumulativeIndex_RAY: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCumulative_RAY(uint256)"(
      _cumulativeIndex_RAY: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    toDiesel(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "toDiesel(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalBorrowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalBorrowed()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlyingToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "underlyingToken()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "withdrawFee()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
