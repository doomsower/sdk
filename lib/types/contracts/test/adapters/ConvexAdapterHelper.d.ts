import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ConvexAdapterHelperInterface extends utils.Interface {
    functions: {
        "IS_TEST()": FunctionFragment;
        "basePoolAdapter()": FunctionFragment;
        "basePoolMock()": FunctionFragment;
        "boosterAdapter()": FunctionFragment;
        "boosterMock()": FunctionFragment;
        "cft()": FunctionFragment;
        "claimZapAdapter()": FunctionFragment;
        "claimZapMock()": FunctionFragment;
        "convexLPToken()": FunctionFragment;
        "creditConfigurator()": FunctionFragment;
        "creditFacade()": FunctionFragment;
        "creditManager()": FunctionFragment;
        "crv()": FunctionFragment;
        "curveLPToken()": FunctionFragment;
        "cvx()": FunctionFragment;
        "extraPoolMock1()": FunctionFragment;
        "extraPoolMock2()": FunctionFragment;
        "extraRewardToken1()": FunctionFragment;
        "extraRewardToken2()": FunctionFragment;
        "failed()": FunctionFragment;
        "feed()": FunctionFragment;
        "phantomToken()": FunctionFragment;
        "priceOracle()": FunctionFragment;
        "underlying()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "IS_TEST" | "basePoolAdapter" | "basePoolMock" | "boosterAdapter" | "boosterMock" | "cft" | "claimZapAdapter" | "claimZapMock" | "convexLPToken" | "creditConfigurator" | "creditFacade" | "creditManager" | "crv" | "curveLPToken" | "cvx" | "extraPoolMock1" | "extraPoolMock2" | "extraRewardToken1" | "extraRewardToken2" | "failed" | "feed" | "phantomToken" | "priceOracle" | "underlying"): FunctionFragment;
    encodeFunctionData(functionFragment: "IS_TEST", values?: undefined): string;
    encodeFunctionData(functionFragment: "basePoolAdapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "basePoolMock", values?: undefined): string;
    encodeFunctionData(functionFragment: "boosterAdapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "boosterMock", values?: undefined): string;
    encodeFunctionData(functionFragment: "cft", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimZapAdapter", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimZapMock", values?: undefined): string;
    encodeFunctionData(functionFragment: "convexLPToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditConfigurator", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditFacade", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "crv", values?: undefined): string;
    encodeFunctionData(functionFragment: "curveLPToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "cvx", values?: undefined): string;
    encodeFunctionData(functionFragment: "extraPoolMock1", values?: undefined): string;
    encodeFunctionData(functionFragment: "extraPoolMock2", values?: undefined): string;
    encodeFunctionData(functionFragment: "extraRewardToken1", values?: undefined): string;
    encodeFunctionData(functionFragment: "extraRewardToken2", values?: undefined): string;
    encodeFunctionData(functionFragment: "failed", values?: undefined): string;
    encodeFunctionData(functionFragment: "feed", values?: undefined): string;
    encodeFunctionData(functionFragment: "phantomToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    decodeFunctionResult(functionFragment: "IS_TEST", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "basePoolAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "basePoolMock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "boosterAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "boosterMock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimZapAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimZapMock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "convexLPToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditFacade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "curveLPToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cvx", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraPoolMock1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraPoolMock2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraRewardToken1", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "extraRewardToken2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "failed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "phantomToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    events: {
        "AddCollateral(address,address,uint256)": EventFragment;
        "CloseCreditAccount(address,address)": EventFragment;
        "DecreaseBorrowedAmount(address,uint256)": EventFragment;
        "ExecuteOrder(address,address)": EventFragment;
        "IncreaseBorrowedAmount(address,uint256)": EventFragment;
        "LiquidateCreditAccount(address,address,address,uint256)": EventFragment;
        "LiquidateExpiredCreditAccount(address,address,address,uint256)": EventFragment;
        "Mock_BaseRewardPaid(uint256,address,uint256)": EventFragment;
        "Mock_BaseStaked(uint256,address,uint256)": EventFragment;
        "Mock_BaseWithdrawn(uint256,address,uint256)": EventFragment;
        "Mock_Deposited(uint256,address,uint256,uint256,bool)": EventFragment;
        "Mock_ExtraRewardPaid(uint256,address,uint256)": EventFragment;
        "Mock_ExtraStaked(uint256,address,uint256)": EventFragment;
        "Mock_ExtraWithdrawn(uint256,address,uint256)": EventFragment;
        "Mock_Withdrawn(uint256,address,uint256,uint256)": EventFragment;
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
    getEvent(nameOrSignatureOrTopic: "LiquidateExpiredCreditAccount"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mock_BaseRewardPaid"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mock_BaseStaked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mock_BaseWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mock_Deposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mock_ExtraRewardPaid"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mock_ExtraStaked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mock_ExtraWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Mock_Withdrawn"): EventFragment;
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
export declare type AddCollateralEvent = TypedEvent<[
    string,
    string,
    BigNumber
], AddCollateralEventObject>;
export declare type AddCollateralEventFilter = TypedEventFilter<AddCollateralEvent>;
export interface CloseCreditAccountEventObject {
    owner: string;
    to: string;
}
export declare type CloseCreditAccountEvent = TypedEvent<[
    string,
    string
], CloseCreditAccountEventObject>;
export declare type CloseCreditAccountEventFilter = TypedEventFilter<CloseCreditAccountEvent>;
export interface DecreaseBorrowedAmountEventObject {
    borrower: string;
    amount: BigNumber;
}
export declare type DecreaseBorrowedAmountEvent = TypedEvent<[
    string,
    BigNumber
], DecreaseBorrowedAmountEventObject>;
export declare type DecreaseBorrowedAmountEventFilter = TypedEventFilter<DecreaseBorrowedAmountEvent>;
export interface ExecuteOrderEventObject {
    borrower: string;
    target: string;
}
export declare type ExecuteOrderEvent = TypedEvent<[
    string,
    string
], ExecuteOrderEventObject>;
export declare type ExecuteOrderEventFilter = TypedEventFilter<ExecuteOrderEvent>;
export interface IncreaseBorrowedAmountEventObject {
    borrower: string;
    amount: BigNumber;
}
export declare type IncreaseBorrowedAmountEvent = TypedEvent<[
    string,
    BigNumber
], IncreaseBorrowedAmountEventObject>;
export declare type IncreaseBorrowedAmountEventFilter = TypedEventFilter<IncreaseBorrowedAmountEvent>;
export interface LiquidateCreditAccountEventObject {
    owner: string;
    liquidator: string;
    to: string;
    remainingFunds: BigNumber;
}
export declare type LiquidateCreditAccountEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], LiquidateCreditAccountEventObject>;
export declare type LiquidateCreditAccountEventFilter = TypedEventFilter<LiquidateCreditAccountEvent>;
export interface LiquidateExpiredCreditAccountEventObject {
    owner: string;
    liquidator: string;
    to: string;
    remainingFunds: BigNumber;
}
export declare type LiquidateExpiredCreditAccountEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], LiquidateExpiredCreditAccountEventObject>;
export declare type LiquidateExpiredCreditAccountEventFilter = TypedEventFilter<LiquidateExpiredCreditAccountEvent>;
export interface Mock_BaseRewardPaidEventObject {
    index: BigNumber;
    user: string;
    reward: BigNumber;
}
export declare type Mock_BaseRewardPaidEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], Mock_BaseRewardPaidEventObject>;
export declare type Mock_BaseRewardPaidEventFilter = TypedEventFilter<Mock_BaseRewardPaidEvent>;
export interface Mock_BaseStakedEventObject {
    index: BigNumber;
    user: string;
    amount: BigNumber;
}
export declare type Mock_BaseStakedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], Mock_BaseStakedEventObject>;
export declare type Mock_BaseStakedEventFilter = TypedEventFilter<Mock_BaseStakedEvent>;
export interface Mock_BaseWithdrawnEventObject {
    index: BigNumber;
    user: string;
    amount: BigNumber;
}
export declare type Mock_BaseWithdrawnEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], Mock_BaseWithdrawnEventObject>;
export declare type Mock_BaseWithdrawnEventFilter = TypedEventFilter<Mock_BaseWithdrawnEvent>;
export interface Mock_DepositedEventObject {
    index: BigNumber;
    user: string;
    poolid: BigNumber;
    amount: BigNumber;
    _stake: boolean;
}
export declare type Mock_DepositedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    boolean
], Mock_DepositedEventObject>;
export declare type Mock_DepositedEventFilter = TypedEventFilter<Mock_DepositedEvent>;
export interface Mock_ExtraRewardPaidEventObject {
    index: BigNumber;
    user: string;
    reward: BigNumber;
}
export declare type Mock_ExtraRewardPaidEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], Mock_ExtraRewardPaidEventObject>;
export declare type Mock_ExtraRewardPaidEventFilter = TypedEventFilter<Mock_ExtraRewardPaidEvent>;
export interface Mock_ExtraStakedEventObject {
    index: BigNumber;
    user: string;
    amount: BigNumber;
}
export declare type Mock_ExtraStakedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], Mock_ExtraStakedEventObject>;
export declare type Mock_ExtraStakedEventFilter = TypedEventFilter<Mock_ExtraStakedEvent>;
export interface Mock_ExtraWithdrawnEventObject {
    index: BigNumber;
    user: string;
    amount: BigNumber;
}
export declare type Mock_ExtraWithdrawnEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], Mock_ExtraWithdrawnEventObject>;
export declare type Mock_ExtraWithdrawnEventFilter = TypedEventFilter<Mock_ExtraWithdrawnEvent>;
export interface Mock_WithdrawnEventObject {
    index: BigNumber;
    user: string;
    poolid: BigNumber;
    amount: BigNumber;
}
export declare type Mock_WithdrawnEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber
], Mock_WithdrawnEventObject>;
export declare type Mock_WithdrawnEventFilter = TypedEventFilter<Mock_WithdrawnEvent>;
export interface MultiCallFinishedEventObject {
}
export declare type MultiCallFinishedEvent = TypedEvent<[
], MultiCallFinishedEventObject>;
export declare type MultiCallFinishedEventFilter = TypedEventFilter<MultiCallFinishedEvent>;
export interface MultiCallStartedEventObject {
    borrower: string;
}
export declare type MultiCallStartedEvent = TypedEvent<[
    string
], MultiCallStartedEventObject>;
export declare type MultiCallStartedEventFilter = TypedEventFilter<MultiCallStartedEvent>;
export interface NewConfiguratorEventObject {
    newConfigurator: string;
}
export declare type NewConfiguratorEvent = TypedEvent<[
    string
], NewConfiguratorEventObject>;
export declare type NewConfiguratorEventFilter = TypedEventFilter<NewConfiguratorEvent>;
export interface OpenCreditAccountEventObject {
    onBehalfOf: string;
    creditAccount: string;
    borrowAmount: BigNumber;
    referralCode: number;
}
export declare type OpenCreditAccountEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    number
], OpenCreditAccountEventObject>;
export declare type OpenCreditAccountEventFilter = TypedEventFilter<OpenCreditAccountEvent>;
export interface TokenDisabledEventObject {
    creditAccount: string;
    token: string;
}
export declare type TokenDisabledEvent = TypedEvent<[
    string,
    string
], TokenDisabledEventObject>;
export declare type TokenDisabledEventFilter = TypedEventFilter<TokenDisabledEvent>;
export interface TokenEnabledEventObject {
    creditAccount: string;
    token: string;
}
export declare type TokenEnabledEvent = TypedEvent<[
    string,
    string
], TokenEnabledEventObject>;
export declare type TokenEnabledEventFilter = TypedEventFilter<TokenEnabledEvent>;
export interface TransferAccountEventObject {
    oldOwner: string;
    newOwner: string;
}
export declare type TransferAccountEvent = TypedEvent<[
    string,
    string
], TransferAccountEventObject>;
export declare type TransferAccountEventFilter = TypedEventFilter<TransferAccountEvent>;
export interface TransferAccountAllowedEventObject {
    from: string;
    to: string;
    state: boolean;
}
export declare type TransferAccountAllowedEvent = TypedEvent<[
    string,
    string,
    boolean
], TransferAccountAllowedEventObject>;
export declare type TransferAccountAllowedEventFilter = TypedEventFilter<TransferAccountAllowedEvent>;
export interface logEventObject {
    arg0: string;
}
export declare type logEvent = TypedEvent<[string], logEventObject>;
export declare type logEventFilter = TypedEventFilter<logEvent>;
export interface log_addressEventObject {
    arg0: string;
}
export declare type log_addressEvent = TypedEvent<[string], log_addressEventObject>;
export declare type log_addressEventFilter = TypedEventFilter<log_addressEvent>;
export interface log_bytesEventObject {
    arg0: string;
}
export declare type log_bytesEvent = TypedEvent<[string], log_bytesEventObject>;
export declare type log_bytesEventFilter = TypedEventFilter<log_bytesEvent>;
export interface log_bytes32EventObject {
    arg0: string;
}
export declare type log_bytes32Event = TypedEvent<[string], log_bytes32EventObject>;
export declare type log_bytes32EventFilter = TypedEventFilter<log_bytes32Event>;
export interface log_intEventObject {
    arg0: BigNumber;
}
export declare type log_intEvent = TypedEvent<[BigNumber], log_intEventObject>;
export declare type log_intEventFilter = TypedEventFilter<log_intEvent>;
export interface log_named_addressEventObject {
    key: string;
    val: string;
}
export declare type log_named_addressEvent = TypedEvent<[
    string,
    string
], log_named_addressEventObject>;
export declare type log_named_addressEventFilter = TypedEventFilter<log_named_addressEvent>;
export interface log_named_bytesEventObject {
    key: string;
    val: string;
}
export declare type log_named_bytesEvent = TypedEvent<[
    string,
    string
], log_named_bytesEventObject>;
export declare type log_named_bytesEventFilter = TypedEventFilter<log_named_bytesEvent>;
export interface log_named_bytes32EventObject {
    key: string;
    val: string;
}
export declare type log_named_bytes32Event = TypedEvent<[
    string,
    string
], log_named_bytes32EventObject>;
export declare type log_named_bytes32EventFilter = TypedEventFilter<log_named_bytes32Event>;
export interface log_named_decimal_intEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export declare type log_named_decimal_intEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_intEventObject>;
export declare type log_named_decimal_intEventFilter = TypedEventFilter<log_named_decimal_intEvent>;
export interface log_named_decimal_uintEventObject {
    key: string;
    val: BigNumber;
    decimals: BigNumber;
}
export declare type log_named_decimal_uintEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], log_named_decimal_uintEventObject>;
export declare type log_named_decimal_uintEventFilter = TypedEventFilter<log_named_decimal_uintEvent>;
export interface log_named_intEventObject {
    key: string;
    val: BigNumber;
}
export declare type log_named_intEvent = TypedEvent<[
    string,
    BigNumber
], log_named_intEventObject>;
export declare type log_named_intEventFilter = TypedEventFilter<log_named_intEvent>;
export interface log_named_stringEventObject {
    key: string;
    val: string;
}
export declare type log_named_stringEvent = TypedEvent<[
    string,
    string
], log_named_stringEventObject>;
export declare type log_named_stringEventFilter = TypedEventFilter<log_named_stringEvent>;
export interface log_named_uintEventObject {
    key: string;
    val: BigNumber;
}
export declare type log_named_uintEvent = TypedEvent<[
    string,
    BigNumber
], log_named_uintEventObject>;
export declare type log_named_uintEventFilter = TypedEventFilter<log_named_uintEvent>;
export interface log_stringEventObject {
    arg0: string;
}
export declare type log_stringEvent = TypedEvent<[string], log_stringEventObject>;
export declare type log_stringEventFilter = TypedEventFilter<log_stringEvent>;
export interface log_uintEventObject {
    arg0: BigNumber;
}
export declare type log_uintEvent = TypedEvent<[BigNumber], log_uintEventObject>;
export declare type log_uintEventFilter = TypedEventFilter<log_uintEvent>;
export interface logsEventObject {
    arg0: string;
}
export declare type logsEvent = TypedEvent<[string], logsEventObject>;
export declare type logsEventFilter = TypedEventFilter<logsEvent>;
export interface ConvexAdapterHelper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ConvexAdapterHelperInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        IS_TEST(overrides?: CallOverrides): Promise<[boolean]>;
        basePoolAdapter(overrides?: CallOverrides): Promise<[string]>;
        basePoolMock(overrides?: CallOverrides): Promise<[string]>;
        boosterAdapter(overrides?: CallOverrides): Promise<[string]>;
        boosterMock(overrides?: CallOverrides): Promise<[string]>;
        cft(overrides?: CallOverrides): Promise<[string]>;
        claimZapAdapter(overrides?: CallOverrides): Promise<[string]>;
        claimZapMock(overrides?: CallOverrides): Promise<[string]>;
        convexLPToken(overrides?: CallOverrides): Promise<[string]>;
        creditConfigurator(overrides?: CallOverrides): Promise<[string]>;
        creditFacade(overrides?: CallOverrides): Promise<[string]>;
        creditManager(overrides?: CallOverrides): Promise<[string]>;
        crv(overrides?: CallOverrides): Promise<[string]>;
        curveLPToken(overrides?: CallOverrides): Promise<[string]>;
        cvx(overrides?: CallOverrides): Promise<[string]>;
        extraPoolMock1(overrides?: CallOverrides): Promise<[string]>;
        extraPoolMock2(overrides?: CallOverrides): Promise<[string]>;
        extraRewardToken1(overrides?: CallOverrides): Promise<[string]>;
        extraRewardToken2(overrides?: CallOverrides): Promise<[string]>;
        failed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        feed(overrides?: CallOverrides): Promise<[string]>;
        phantomToken(overrides?: CallOverrides): Promise<[string]>;
        priceOracle(overrides?: CallOverrides): Promise<[string]>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
    };
    IS_TEST(overrides?: CallOverrides): Promise<boolean>;
    basePoolAdapter(overrides?: CallOverrides): Promise<string>;
    basePoolMock(overrides?: CallOverrides): Promise<string>;
    boosterAdapter(overrides?: CallOverrides): Promise<string>;
    boosterMock(overrides?: CallOverrides): Promise<string>;
    cft(overrides?: CallOverrides): Promise<string>;
    claimZapAdapter(overrides?: CallOverrides): Promise<string>;
    claimZapMock(overrides?: CallOverrides): Promise<string>;
    convexLPToken(overrides?: CallOverrides): Promise<string>;
    creditConfigurator(overrides?: CallOverrides): Promise<string>;
    creditFacade(overrides?: CallOverrides): Promise<string>;
    creditManager(overrides?: CallOverrides): Promise<string>;
    crv(overrides?: CallOverrides): Promise<string>;
    curveLPToken(overrides?: CallOverrides): Promise<string>;
    cvx(overrides?: CallOverrides): Promise<string>;
    extraPoolMock1(overrides?: CallOverrides): Promise<string>;
    extraPoolMock2(overrides?: CallOverrides): Promise<string>;
    extraRewardToken1(overrides?: CallOverrides): Promise<string>;
    extraRewardToken2(overrides?: CallOverrides): Promise<string>;
    failed(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    feed(overrides?: CallOverrides): Promise<string>;
    phantomToken(overrides?: CallOverrides): Promise<string>;
    priceOracle(overrides?: CallOverrides): Promise<string>;
    underlying(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        IS_TEST(overrides?: CallOverrides): Promise<boolean>;
        basePoolAdapter(overrides?: CallOverrides): Promise<string>;
        basePoolMock(overrides?: CallOverrides): Promise<string>;
        boosterAdapter(overrides?: CallOverrides): Promise<string>;
        boosterMock(overrides?: CallOverrides): Promise<string>;
        cft(overrides?: CallOverrides): Promise<string>;
        claimZapAdapter(overrides?: CallOverrides): Promise<string>;
        claimZapMock(overrides?: CallOverrides): Promise<string>;
        convexLPToken(overrides?: CallOverrides): Promise<string>;
        creditConfigurator(overrides?: CallOverrides): Promise<string>;
        creditFacade(overrides?: CallOverrides): Promise<string>;
        creditManager(overrides?: CallOverrides): Promise<string>;
        crv(overrides?: CallOverrides): Promise<string>;
        curveLPToken(overrides?: CallOverrides): Promise<string>;
        cvx(overrides?: CallOverrides): Promise<string>;
        extraPoolMock1(overrides?: CallOverrides): Promise<string>;
        extraPoolMock2(overrides?: CallOverrides): Promise<string>;
        extraRewardToken1(overrides?: CallOverrides): Promise<string>;
        extraRewardToken2(overrides?: CallOverrides): Promise<string>;
        failed(overrides?: CallOverrides): Promise<boolean>;
        feed(overrides?: CallOverrides): Promise<string>;
        phantomToken(overrides?: CallOverrides): Promise<string>;
        priceOracle(overrides?: CallOverrides): Promise<string>;
        underlying(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "AddCollateral(address,address,uint256)"(onBehalfOf?: string | null, token?: string | null, value?: null): AddCollateralEventFilter;
        AddCollateral(onBehalfOf?: string | null, token?: string | null, value?: null): AddCollateralEventFilter;
        "CloseCreditAccount(address,address)"(owner?: string | null, to?: string | null): CloseCreditAccountEventFilter;
        CloseCreditAccount(owner?: string | null, to?: string | null): CloseCreditAccountEventFilter;
        "DecreaseBorrowedAmount(address,uint256)"(borrower?: string | null, amount?: null): DecreaseBorrowedAmountEventFilter;
        DecreaseBorrowedAmount(borrower?: string | null, amount?: null): DecreaseBorrowedAmountEventFilter;
        "ExecuteOrder(address,address)"(borrower?: string | null, target?: string | null): ExecuteOrderEventFilter;
        ExecuteOrder(borrower?: string | null, target?: string | null): ExecuteOrderEventFilter;
        "IncreaseBorrowedAmount(address,uint256)"(borrower?: string | null, amount?: null): IncreaseBorrowedAmountEventFilter;
        IncreaseBorrowedAmount(borrower?: string | null, amount?: null): IncreaseBorrowedAmountEventFilter;
        "LiquidateCreditAccount(address,address,address,uint256)"(owner?: string | null, liquidator?: string | null, to?: string | null, remainingFunds?: null): LiquidateCreditAccountEventFilter;
        LiquidateCreditAccount(owner?: string | null, liquidator?: string | null, to?: string | null, remainingFunds?: null): LiquidateCreditAccountEventFilter;
        "LiquidateExpiredCreditAccount(address,address,address,uint256)"(owner?: string | null, liquidator?: string | null, to?: string | null, remainingFunds?: null): LiquidateExpiredCreditAccountEventFilter;
        LiquidateExpiredCreditAccount(owner?: string | null, liquidator?: string | null, to?: string | null, remainingFunds?: null): LiquidateExpiredCreditAccountEventFilter;
        "Mock_BaseRewardPaid(uint256,address,uint256)"(index?: BigNumberish | null, user?: string | null, reward?: null): Mock_BaseRewardPaidEventFilter;
        Mock_BaseRewardPaid(index?: BigNumberish | null, user?: string | null, reward?: null): Mock_BaseRewardPaidEventFilter;
        "Mock_BaseStaked(uint256,address,uint256)"(index?: BigNumberish | null, user?: string | null, amount?: null): Mock_BaseStakedEventFilter;
        Mock_BaseStaked(index?: BigNumberish | null, user?: string | null, amount?: null): Mock_BaseStakedEventFilter;
        "Mock_BaseWithdrawn(uint256,address,uint256)"(index?: BigNumberish | null, user?: string | null, amount?: null): Mock_BaseWithdrawnEventFilter;
        Mock_BaseWithdrawn(index?: BigNumberish | null, user?: string | null, amount?: null): Mock_BaseWithdrawnEventFilter;
        "Mock_Deposited(uint256,address,uint256,uint256,bool)"(index?: null, user?: string | null, poolid?: BigNumberish | null, amount?: null, _stake?: null): Mock_DepositedEventFilter;
        Mock_Deposited(index?: null, user?: string | null, poolid?: BigNumberish | null, amount?: null, _stake?: null): Mock_DepositedEventFilter;
        "Mock_ExtraRewardPaid(uint256,address,uint256)"(index?: BigNumberish | null, user?: string | null, reward?: null): Mock_ExtraRewardPaidEventFilter;
        Mock_ExtraRewardPaid(index?: BigNumberish | null, user?: string | null, reward?: null): Mock_ExtraRewardPaidEventFilter;
        "Mock_ExtraStaked(uint256,address,uint256)"(index?: BigNumberish | null, user?: string | null, amount?: null): Mock_ExtraStakedEventFilter;
        Mock_ExtraStaked(index?: BigNumberish | null, user?: string | null, amount?: null): Mock_ExtraStakedEventFilter;
        "Mock_ExtraWithdrawn(uint256,address,uint256)"(index?: BigNumberish | null, user?: string | null, amount?: null): Mock_ExtraWithdrawnEventFilter;
        Mock_ExtraWithdrawn(index?: BigNumberish | null, user?: string | null, amount?: null): Mock_ExtraWithdrawnEventFilter;
        "Mock_Withdrawn(uint256,address,uint256,uint256)"(index?: null, user?: string | null, poolid?: BigNumberish | null, amount?: null): Mock_WithdrawnEventFilter;
        Mock_Withdrawn(index?: null, user?: string | null, poolid?: BigNumberish | null, amount?: null): Mock_WithdrawnEventFilter;
        "MultiCallFinished()"(): MultiCallFinishedEventFilter;
        MultiCallFinished(): MultiCallFinishedEventFilter;
        "MultiCallStarted(address)"(borrower?: string | null): MultiCallStartedEventFilter;
        MultiCallStarted(borrower?: string | null): MultiCallStartedEventFilter;
        "NewConfigurator(address)"(newConfigurator?: string | null): NewConfiguratorEventFilter;
        NewConfigurator(newConfigurator?: string | null): NewConfiguratorEventFilter;
        "OpenCreditAccount(address,address,uint256,uint16)"(onBehalfOf?: string | null, creditAccount?: string | null, borrowAmount?: null, referralCode?: null): OpenCreditAccountEventFilter;
        OpenCreditAccount(onBehalfOf?: string | null, creditAccount?: string | null, borrowAmount?: null, referralCode?: null): OpenCreditAccountEventFilter;
        "TokenDisabled(address,address)"(creditAccount?: null, token?: null): TokenDisabledEventFilter;
        TokenDisabled(creditAccount?: null, token?: null): TokenDisabledEventFilter;
        "TokenEnabled(address,address)"(creditAccount?: null, token?: null): TokenEnabledEventFilter;
        TokenEnabled(creditAccount?: null, token?: null): TokenEnabledEventFilter;
        "TransferAccount(address,address)"(oldOwner?: string | null, newOwner?: string | null): TransferAccountEventFilter;
        TransferAccount(oldOwner?: string | null, newOwner?: string | null): TransferAccountEventFilter;
        "TransferAccountAllowed(address,address,bool)"(from?: string | null, to?: string | null, state?: null): TransferAccountAllowedEventFilter;
        TransferAccountAllowed(from?: string | null, to?: string | null, state?: null): TransferAccountAllowedEventFilter;
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
        "log_named_address(string,address)"(key?: null, val?: null): log_named_addressEventFilter;
        log_named_address(key?: null, val?: null): log_named_addressEventFilter;
        "log_named_bytes(string,bytes)"(key?: null, val?: null): log_named_bytesEventFilter;
        log_named_bytes(key?: null, val?: null): log_named_bytesEventFilter;
        "log_named_bytes32(string,bytes32)"(key?: null, val?: null): log_named_bytes32EventFilter;
        log_named_bytes32(key?: null, val?: null): log_named_bytes32EventFilter;
        "log_named_decimal_int(string,int256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        log_named_decimal_int(key?: null, val?: null, decimals?: null): log_named_decimal_intEventFilter;
        "log_named_decimal_uint(string,uint256,uint256)"(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        log_named_decimal_uint(key?: null, val?: null, decimals?: null): log_named_decimal_uintEventFilter;
        "log_named_int(string,int256)"(key?: null, val?: null): log_named_intEventFilter;
        log_named_int(key?: null, val?: null): log_named_intEventFilter;
        "log_named_string(string,string)"(key?: null, val?: null): log_named_stringEventFilter;
        log_named_string(key?: null, val?: null): log_named_stringEventFilter;
        "log_named_uint(string,uint256)"(key?: null, val?: null): log_named_uintEventFilter;
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
        basePoolAdapter(overrides?: CallOverrides): Promise<BigNumber>;
        basePoolMock(overrides?: CallOverrides): Promise<BigNumber>;
        boosterAdapter(overrides?: CallOverrides): Promise<BigNumber>;
        boosterMock(overrides?: CallOverrides): Promise<BigNumber>;
        cft(overrides?: CallOverrides): Promise<BigNumber>;
        claimZapAdapter(overrides?: CallOverrides): Promise<BigNumber>;
        claimZapMock(overrides?: CallOverrides): Promise<BigNumber>;
        convexLPToken(overrides?: CallOverrides): Promise<BigNumber>;
        creditConfigurator(overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<BigNumber>;
        creditManager(overrides?: CallOverrides): Promise<BigNumber>;
        crv(overrides?: CallOverrides): Promise<BigNumber>;
        curveLPToken(overrides?: CallOverrides): Promise<BigNumber>;
        cvx(overrides?: CallOverrides): Promise<BigNumber>;
        extraPoolMock1(overrides?: CallOverrides): Promise<BigNumber>;
        extraPoolMock2(overrides?: CallOverrides): Promise<BigNumber>;
        extraRewardToken1(overrides?: CallOverrides): Promise<BigNumber>;
        extraRewardToken2(overrides?: CallOverrides): Promise<BigNumber>;
        failed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        feed(overrides?: CallOverrides): Promise<BigNumber>;
        phantomToken(overrides?: CallOverrides): Promise<BigNumber>;
        priceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        IS_TEST(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        basePoolAdapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        basePoolMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        boosterAdapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        boosterMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cft(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimZapAdapter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claimZapMock(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        convexLPToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditConfigurator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        crv(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        curveLPToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cvx(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extraPoolMock1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extraPoolMock2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extraRewardToken1(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        extraRewardToken2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        failed(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        feed(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        phantomToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
