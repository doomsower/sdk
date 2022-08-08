import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ICreditManagerV2Interface extends utils.Interface {
    functions: {
        "adapterToContract(address)": FunctionFragment;
        "addCollateral(address,address,address,uint256)": FunctionFragment;
        "addToken(address)": FunctionFragment;
        "approveCreditAccount(address,address,address,uint256)": FunctionFragment;
        "calcClosePayments(uint256,uint8,uint256,uint256)": FunctionFragment;
        "calcCreditAccountAccruedInterest(address)": FunctionFragment;
        "changeContractAllowance(address,address)": FunctionFragment;
        "checkAndEnableToken(address,address)": FunctionFragment;
        "checkAndOptimizeEnabledTokens(address)": FunctionFragment;
        "closeCreditAccount(address,uint8,uint256,address,address,uint256,bool)": FunctionFragment;
        "collateralTokens(uint256)": FunctionFragment;
        "collateralTokensByMask(uint256)": FunctionFragment;
        "collateralTokensCount()": FunctionFragment;
        "contractToAdapter(address)": FunctionFragment;
        "creditAccounts(address)": FunctionFragment;
        "creditConfigurator()": FunctionFragment;
        "creditFacade()": FunctionFragment;
        "disableToken(address,address)": FunctionFragment;
        "enabledTokensMap(address)": FunctionFragment;
        "executeOrder(address,address,bytes)": FunctionFragment;
        "fastCollateralCheck(address,address,address,uint256,uint256)": FunctionFragment;
        "fees()": FunctionFragment;
        "forbiddenTokenMask()": FunctionFragment;
        "fullCollateralCheck(address)": FunctionFragment;
        "getCreditAccountOrRevert(address)": FunctionFragment;
        "liquidationThresholds(address)": FunctionFragment;
        "manageDebt(address,uint256,bool)": FunctionFragment;
        "maxAllowedEnabledTokenLength()": FunctionFragment;
        "openCreditAccount(uint256,address)": FunctionFragment;
        "pool()": FunctionFragment;
        "poolService()": FunctionFragment;
        "priceOracle()": FunctionFragment;
        "setForbidMask(uint256)": FunctionFragment;
        "setLiquidationThreshold(address,uint16)": FunctionFragment;
        "setMaxEnabledTokens(uint8)": FunctionFragment;
        "tokenMasksMap(address)": FunctionFragment;
        "transferAccountOwnership(address,address)": FunctionFragment;
        "underlying()": FunctionFragment;
        "version()": FunctionFragment;
        "wethAddress()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "adapterToContract" | "addCollateral" | "addToken" | "approveCreditAccount" | "calcClosePayments" | "calcCreditAccountAccruedInterest" | "changeContractAllowance" | "checkAndEnableToken" | "checkAndOptimizeEnabledTokens" | "closeCreditAccount" | "collateralTokens" | "collateralTokensByMask" | "collateralTokensCount" | "contractToAdapter" | "creditAccounts" | "creditConfigurator" | "creditFacade" | "disableToken" | "enabledTokensMap" | "executeOrder" | "fastCollateralCheck" | "fees" | "forbiddenTokenMask" | "fullCollateralCheck" | "getCreditAccountOrRevert" | "liquidationThresholds" | "manageDebt" | "maxAllowedEnabledTokenLength" | "openCreditAccount" | "pool" | "poolService" | "priceOracle" | "setForbidMask" | "setLiquidationThreshold" | "setMaxEnabledTokens" | "tokenMasksMap" | "transferAccountOwnership" | "underlying" | "version" | "wethAddress"): FunctionFragment;
    encodeFunctionData(functionFragment: "adapterToContract", values: [string]): string;
    encodeFunctionData(functionFragment: "addCollateral", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "addToken", values: [string]): string;
    encodeFunctionData(functionFragment: "approveCreditAccount", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calcClosePayments", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calcCreditAccountAccruedInterest", values: [string]): string;
    encodeFunctionData(functionFragment: "changeContractAllowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "checkAndEnableToken", values: [string, string]): string;
    encodeFunctionData(functionFragment: "checkAndOptimizeEnabledTokens", values: [string]): string;
    encodeFunctionData(functionFragment: "closeCreditAccount", values: [
        string,
        BigNumberish,
        BigNumberish,
        string,
        string,
        BigNumberish,
        boolean
    ]): string;
    encodeFunctionData(functionFragment: "collateralTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "collateralTokensByMask", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "collateralTokensCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractToAdapter", values: [string]): string;
    encodeFunctionData(functionFragment: "creditAccounts", values: [string]): string;
    encodeFunctionData(functionFragment: "creditConfigurator", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditFacade", values?: undefined): string;
    encodeFunctionData(functionFragment: "disableToken", values: [string, string]): string;
    encodeFunctionData(functionFragment: "enabledTokensMap", values: [string]): string;
    encodeFunctionData(functionFragment: "executeOrder", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "fastCollateralCheck", values: [string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fees", values?: undefined): string;
    encodeFunctionData(functionFragment: "forbiddenTokenMask", values?: undefined): string;
    encodeFunctionData(functionFragment: "fullCollateralCheck", values: [string]): string;
    encodeFunctionData(functionFragment: "getCreditAccountOrRevert", values: [string]): string;
    encodeFunctionData(functionFragment: "liquidationThresholds", values: [string]): string;
    encodeFunctionData(functionFragment: "manageDebt", values: [string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "maxAllowedEnabledTokenLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "openCreditAccount", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "pool", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolService", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "setForbidMask", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLiquidationThreshold", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxEnabledTokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tokenMasksMap", values: [string]): string;
    encodeFunctionData(functionFragment: "transferAccountOwnership", values: [string, string]): string;
    encodeFunctionData(functionFragment: "underlying", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "wethAddress", values?: undefined): string;
    decodeFunctionResult(functionFragment: "adapterToContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approveCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcClosePayments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcCreditAccountAccruedInterest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeContractAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkAndEnableToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkAndOptimizeEnabledTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralTokensByMask", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collateralTokensCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractToAdapter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditAccounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditFacade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enabledTokensMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fastCollateralCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "forbiddenTokenMask", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fullCollateralCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCreditAccountOrRevert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidationThresholds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manageDebt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxAllowedEnabledTokenLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openCreditAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolService", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setForbidMask", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidationThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxEnabledTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenMasksMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferAccountOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "wethAddress", data: BytesLike): Result;
    events: {
        "ExecuteOrder(address,address)": EventFragment;
        "NewConfigurator(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ExecuteOrder"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewConfigurator"): EventFragment;
}
export interface ExecuteOrderEventObject {
    borrower: string;
    target: string;
}
export declare type ExecuteOrderEvent = TypedEvent<[
    string,
    string
], ExecuteOrderEventObject>;
export declare type ExecuteOrderEventFilter = TypedEventFilter<ExecuteOrderEvent>;
export interface NewConfiguratorEventObject {
    newConfigurator: string;
}
export declare type NewConfiguratorEvent = TypedEvent<[
    string
], NewConfiguratorEventObject>;
export declare type NewConfiguratorEventFilter = TypedEventFilter<NewConfiguratorEvent>;
export interface ICreditManagerV2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICreditManagerV2Interface;
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
        adapterToContract(adapter: string, overrides?: CallOverrides): Promise<[string]>;
        addCollateral(payer: string, onBehalfOf: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        approveCreditAccount(borrower: string, targetContract: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        calcClosePayments(totalValue: BigNumberish, closureActionType: BigNumberish, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountToPool: BigNumber;
            remainingFunds: BigNumber;
            profit: BigNumber;
            loss: BigNumber;
        }>;
        calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            borrowedAmount: BigNumber;
            borrowedAmountWithInterest: BigNumber;
        }>;
        changeContractAllowance(adapter: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        checkAndEnableToken(creditAccount: string, tokenOut: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        checkAndOptimizeEnabledTokens(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        closeCreditAccount(borrower: string, closureActionType: BigNumberish, totalValue: BigNumberish, caller: string, to: string, skipTokenMask: BigNumberish, convertWETH: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        collateralTokens(id: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            number
        ] & {
            token: string;
            liquidationThreshold: number;
        }>;
        collateralTokensByMask(tokenMask: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            number
        ] & {
            token: string;
            liquidationThreshold: number;
        }>;
        collateralTokensCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        contractToAdapter(adapter: string, overrides?: CallOverrides): Promise<[string]>;
        creditAccounts(borrower: string, overrides?: CallOverrides): Promise<[string]>;
        creditConfigurator(overrides?: CallOverrides): Promise<[string]>;
        creditFacade(overrides?: CallOverrides): Promise<[string]>;
        disableToken(creditAccount: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        enabledTokensMap(creditAccount: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        executeOrder(borrower: string, target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fastCollateralCheck(creditAccount: string, tokenIn: string, tokenOut: string, balanceInBefore: BigNumberish, balanceOutBefore: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fees(overrides?: CallOverrides): Promise<[
            number,
            number,
            number,
            number,
            number
        ] & {
            feeInterest: number;
            feeLiquidation: number;
            liquidationDiscount: number;
            feeLiquidationExpired: number;
            liquidationDiscountExpired: number;
        }>;
        forbiddenTokenMask(overrides?: CallOverrides): Promise<[BigNumber]>;
        fullCollateralCheck(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<[string]>;
        liquidationThresholds(arg0: string, overrides?: CallOverrides): Promise<[number]>;
        manageDebt(borrower: string, amount: BigNumberish, increase: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        maxAllowedEnabledTokenLength(overrides?: CallOverrides): Promise<[number]>;
        openCreditAccount(borrowedAmount: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        pool(overrides?: CallOverrides): Promise<[string]>;
        poolService(overrides?: CallOverrides): Promise<[string]>;
        priceOracle(overrides?: CallOverrides): Promise<[string]>;
        setForbidMask(_forbidMask: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxEnabledTokens(_maxEnabledTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        tokenMasksMap(token: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferAccountOwnership(from: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        underlying(overrides?: CallOverrides): Promise<[string]>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
        wethAddress(overrides?: CallOverrides): Promise<[string]>;
    };
    adapterToContract(adapter: string, overrides?: CallOverrides): Promise<string>;
    addCollateral(payer: string, onBehalfOf: string, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addToken(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    approveCreditAccount(borrower: string, targetContract: string, token: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    calcClosePayments(totalValue: BigNumberish, closureActionType: BigNumberish, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        amountToPool: BigNumber;
        remainingFunds: BigNumber;
        profit: BigNumber;
        loss: BigNumber;
    }>;
    calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        borrowedAmount: BigNumber;
        borrowedAmountWithInterest: BigNumber;
    }>;
    changeContractAllowance(adapter: string, targetContract: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    checkAndEnableToken(creditAccount: string, tokenOut: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    checkAndOptimizeEnabledTokens(creditAccount: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    closeCreditAccount(borrower: string, closureActionType: BigNumberish, totalValue: BigNumberish, caller: string, to: string, skipTokenMask: BigNumberish, convertWETH: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    collateralTokens(id: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        number
    ] & {
        token: string;
        liquidationThreshold: number;
    }>;
    collateralTokensByMask(tokenMask: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        number
    ] & {
        token: string;
        liquidationThreshold: number;
    }>;
    collateralTokensCount(overrides?: CallOverrides): Promise<BigNumber>;
    contractToAdapter(adapter: string, overrides?: CallOverrides): Promise<string>;
    creditAccounts(borrower: string, overrides?: CallOverrides): Promise<string>;
    creditConfigurator(overrides?: CallOverrides): Promise<string>;
    creditFacade(overrides?: CallOverrides): Promise<string>;
    disableToken(creditAccount: string, token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    enabledTokensMap(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
    executeOrder(borrower: string, target: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fastCollateralCheck(creditAccount: string, tokenIn: string, tokenOut: string, balanceInBefore: BigNumberish, balanceOutBefore: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fees(overrides?: CallOverrides): Promise<[
        number,
        number,
        number,
        number,
        number
    ] & {
        feeInterest: number;
        feeLiquidation: number;
        liquidationDiscount: number;
        feeLiquidationExpired: number;
        liquidationDiscountExpired: number;
    }>;
    forbiddenTokenMask(overrides?: CallOverrides): Promise<BigNumber>;
    fullCollateralCheck(creditAccount: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<string>;
    liquidationThresholds(arg0: string, overrides?: CallOverrides): Promise<number>;
    manageDebt(borrower: string, amount: BigNumberish, increase: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    maxAllowedEnabledTokenLength(overrides?: CallOverrides): Promise<number>;
    openCreditAccount(borrowedAmount: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    pool(overrides?: CallOverrides): Promise<string>;
    poolService(overrides?: CallOverrides): Promise<string>;
    priceOracle(overrides?: CallOverrides): Promise<string>;
    setForbidMask(_forbidMask: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxEnabledTokens(_maxEnabledTokens: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    tokenMasksMap(token: string, overrides?: CallOverrides): Promise<BigNumber>;
    transferAccountOwnership(from: string, to: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    underlying(overrides?: CallOverrides): Promise<string>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    wethAddress(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        adapterToContract(adapter: string, overrides?: CallOverrides): Promise<string>;
        addCollateral(payer: string, onBehalfOf: string, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        addToken(token: string, overrides?: CallOverrides): Promise<void>;
        approveCreditAccount(borrower: string, targetContract: string, token: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        calcClosePayments(totalValue: BigNumberish, closureActionType: BigNumberish, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            amountToPool: BigNumber;
            remainingFunds: BigNumber;
            profit: BigNumber;
            loss: BigNumber;
        }>;
        calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            borrowedAmount: BigNumber;
            borrowedAmountWithInterest: BigNumber;
        }>;
        changeContractAllowance(adapter: string, targetContract: string, overrides?: CallOverrides): Promise<void>;
        checkAndEnableToken(creditAccount: string, tokenOut: string, overrides?: CallOverrides): Promise<void>;
        checkAndOptimizeEnabledTokens(creditAccount: string, overrides?: CallOverrides): Promise<void>;
        closeCreditAccount(borrower: string, closureActionType: BigNumberish, totalValue: BigNumberish, caller: string, to: string, skipTokenMask: BigNumberish, convertWETH: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        collateralTokens(id: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            number
        ] & {
            token: string;
            liquidationThreshold: number;
        }>;
        collateralTokensByMask(tokenMask: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            number
        ] & {
            token: string;
            liquidationThreshold: number;
        }>;
        collateralTokensCount(overrides?: CallOverrides): Promise<BigNumber>;
        contractToAdapter(adapter: string, overrides?: CallOverrides): Promise<string>;
        creditAccounts(borrower: string, overrides?: CallOverrides): Promise<string>;
        creditConfigurator(overrides?: CallOverrides): Promise<string>;
        creditFacade(overrides?: CallOverrides): Promise<string>;
        disableToken(creditAccount: string, token: string, overrides?: CallOverrides): Promise<void>;
        enabledTokensMap(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        executeOrder(borrower: string, target: string, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        fastCollateralCheck(creditAccount: string, tokenIn: string, tokenOut: string, balanceInBefore: BigNumberish, balanceOutBefore: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fees(overrides?: CallOverrides): Promise<[
            number,
            number,
            number,
            number,
            number
        ] & {
            feeInterest: number;
            feeLiquidation: number;
            liquidationDiscount: number;
            feeLiquidationExpired: number;
            liquidationDiscountExpired: number;
        }>;
        forbiddenTokenMask(overrides?: CallOverrides): Promise<BigNumber>;
        fullCollateralCheck(creditAccount: string, overrides?: CallOverrides): Promise<void>;
        getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<string>;
        liquidationThresholds(arg0: string, overrides?: CallOverrides): Promise<number>;
        manageDebt(borrower: string, amount: BigNumberish, increase: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        maxAllowedEnabledTokenLength(overrides?: CallOverrides): Promise<number>;
        openCreditAccount(borrowedAmount: BigNumberish, onBehalfOf: string, overrides?: CallOverrides): Promise<string>;
        pool(overrides?: CallOverrides): Promise<string>;
        poolService(overrides?: CallOverrides): Promise<string>;
        priceOracle(overrides?: CallOverrides): Promise<string>;
        setForbidMask(_forbidMask: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxEnabledTokens(_maxEnabledTokens: BigNumberish, overrides?: CallOverrides): Promise<void>;
        tokenMasksMap(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferAccountOwnership(from: string, to: string, overrides?: CallOverrides): Promise<void>;
        underlying(overrides?: CallOverrides): Promise<string>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        wethAddress(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ExecuteOrder(address,address)"(borrower?: string | null, target?: string | null): ExecuteOrderEventFilter;
        ExecuteOrder(borrower?: string | null, target?: string | null): ExecuteOrderEventFilter;
        "NewConfigurator(address)"(newConfigurator?: string | null): NewConfiguratorEventFilter;
        NewConfigurator(newConfigurator?: string | null): NewConfiguratorEventFilter;
    };
    estimateGas: {
        adapterToContract(adapter: string, overrides?: CallOverrides): Promise<BigNumber>;
        addCollateral(payer: string, onBehalfOf: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        approveCreditAccount(borrower: string, targetContract: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        calcClosePayments(totalValue: BigNumberish, closureActionType: BigNumberish, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        changeContractAllowance(adapter: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        checkAndEnableToken(creditAccount: string, tokenOut: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        checkAndOptimizeEnabledTokens(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        closeCreditAccount(borrower: string, closureActionType: BigNumberish, totalValue: BigNumberish, caller: string, to: string, skipTokenMask: BigNumberish, convertWETH: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        collateralTokens(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        collateralTokensByMask(tokenMask: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        collateralTokensCount(overrides?: CallOverrides): Promise<BigNumber>;
        contractToAdapter(adapter: string, overrides?: CallOverrides): Promise<BigNumber>;
        creditAccounts(borrower: string, overrides?: CallOverrides): Promise<BigNumber>;
        creditConfigurator(overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<BigNumber>;
        disableToken(creditAccount: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        enabledTokensMap(creditAccount: string, overrides?: CallOverrides): Promise<BigNumber>;
        executeOrder(borrower: string, target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fastCollateralCheck(creditAccount: string, tokenIn: string, tokenOut: string, balanceInBefore: BigNumberish, balanceOutBefore: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fees(overrides?: CallOverrides): Promise<BigNumber>;
        forbiddenTokenMask(overrides?: CallOverrides): Promise<BigNumber>;
        fullCollateralCheck(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<BigNumber>;
        liquidationThresholds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        manageDebt(borrower: string, amount: BigNumberish, increase: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        maxAllowedEnabledTokenLength(overrides?: CallOverrides): Promise<BigNumber>;
        openCreditAccount(borrowedAmount: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        pool(overrides?: CallOverrides): Promise<BigNumber>;
        poolService(overrides?: CallOverrides): Promise<BigNumber>;
        priceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        setForbidMask(_forbidMask: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxEnabledTokens(_maxEnabledTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        tokenMasksMap(token: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferAccountOwnership(from: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        underlying(overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        wethAddress(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        adapterToContract(adapter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addCollateral(payer: string, onBehalfOf: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        approveCreditAccount(borrower: string, targetContract: string, token: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        calcClosePayments(totalValue: BigNumberish, closureActionType: BigNumberish, borrowedAmount: BigNumberish, borrowedAmountWithInterest: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calcCreditAccountAccruedInterest(creditAccount: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        changeContractAllowance(adapter: string, targetContract: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        checkAndEnableToken(creditAccount: string, tokenOut: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        checkAndOptimizeEnabledTokens(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        closeCreditAccount(borrower: string, closureActionType: BigNumberish, totalValue: BigNumberish, caller: string, to: string, skipTokenMask: BigNumberish, convertWETH: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        collateralTokens(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralTokensByMask(tokenMask: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        collateralTokensCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractToAdapter(adapter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditAccounts(borrower: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditConfigurator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableToken(creditAccount: string, token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        enabledTokensMap(creditAccount: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeOrder(borrower: string, target: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fastCollateralCheck(creditAccount: string, tokenIn: string, tokenOut: string, balanceInBefore: BigNumberish, balanceOutBefore: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        forbiddenTokenMask(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        fullCollateralCheck(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getCreditAccountOrRevert(borrower: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidationThresholds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        manageDebt(borrower: string, amount: BigNumberish, increase: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        maxAllowedEnabledTokenLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        openCreditAccount(borrowedAmount: BigNumberish, onBehalfOf: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolService(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setForbidMask(_forbidMask: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidationThreshold(token: string, liquidationThreshold: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxEnabledTokens(_maxEnabledTokens: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        tokenMasksMap(token: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferAccountOwnership(from: string, to: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wethAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
