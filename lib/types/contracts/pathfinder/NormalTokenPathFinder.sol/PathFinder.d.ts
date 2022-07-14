import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export declare type BalanceStruct = {
    token: string;
    balance: BigNumberish;
};
export declare type BalanceStructOutput = [string, BigNumber] & {
    token: string;
    balance: BigNumber;
};
export declare type ClosePathTaskStruct = {
    balances: BalanceStruct[];
    underlying: string;
    connectors: string[];
    adapters: string[];
    gasPriceUnderlyingRAY: BigNumberish;
    slippageFactor: BigNumberish;
};
export declare type ClosePathTaskStructOutput = [
    BalanceStructOutput[],
    string,
    string[],
    string[],
    BigNumber,
    BigNumber
] & {
    balances: BalanceStructOutput[];
    underlying: string;
    connectors: string[];
    adapters: string[];
    gasPriceUnderlyingRAY: BigNumber;
    slippageFactor: BigNumber;
};
export declare type MultiCallStruct = {
    target: string;
    callData: BytesLike;
};
export declare type MultiCallStructOutput = [string, string] & {
    target: string;
    callData: string;
};
export declare type ClosePathResultStruct = {
    calls: MultiCallStruct[];
    underlyingBalance: BigNumberish;
    gasUsage: BigNumberish;
};
export declare type ClosePathResultStructOutput = [
    MultiCallStructOutput[],
    BigNumber,
    BigNumber
] & {
    calls: MultiCallStructOutput[];
    underlyingBalance: BigNumber;
    gasUsage: BigNumber;
};
export declare type SwapQuoteStruct = {
    multiCall: MultiCallStruct;
    amount: BigNumberish;
    found: boolean;
    gasUsage: BigNumberish;
};
export declare type SwapQuoteStructOutput = [
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
export interface PathFinderInterface extends utils.Interface {
    functions: {
        "curvePathFinder()": FunctionFragment;
        "findBestPath(((address,uint256)[],address,address[],address[],uint256,uint256))": FunctionFragment;
        "findBestPathIndex(tuple[][],address,address[],address[],uint256)": FunctionFragment;
        "getBestPairSwap(address,address,uint256,uint256,address[])": FunctionFragment;
        "getGasPriceUnderlyingRAY(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "priceOracle()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "uniV2PathFinder()": FunctionFragment;
        "uniV3PathFinder()": FunctionFragment;
        "version()": FunctionFragment;
        "wethToken()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "curvePathFinder" | "findBestPath" | "findBestPathIndex" | "getBestPairSwap" | "getGasPriceUnderlyingRAY" | "owner" | "priceOracle" | "renounceOwnership" | "transferOwnership" | "uniV2PathFinder" | "uniV3PathFinder" | "version" | "wethToken"): FunctionFragment;
    encodeFunctionData(functionFragment: "curvePathFinder", values?: undefined): string;
    encodeFunctionData(functionFragment: "findBestPath", values: [ClosePathTaskStruct]): string;
    encodeFunctionData(functionFragment: "findBestPathIndex", values: [BalanceStruct[][], string, string[], string[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBestPairSwap", values: [string, string, BigNumberish, BigNumberish, string[]]): string;
    encodeFunctionData(functionFragment: "getGasPriceUnderlyingRAY", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "uniV2PathFinder", values?: undefined): string;
    encodeFunctionData(functionFragment: "uniV3PathFinder", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "wethToken", values?: undefined): string;
    decodeFunctionResult(functionFragment: "curvePathFinder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "findBestPath", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "findBestPathIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBestPairSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGasPriceUnderlyingRAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniV2PathFinder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniV3PathFinder", data: BytesLike): Result;
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
export declare type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export declare type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface PathFinder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PathFinderInterface;
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
        curvePathFinder(overrides?: CallOverrides): Promise<[string]>;
        findBestPath(task: ClosePathTaskStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        findBestPathIndex(balances: BalanceStruct[][], underlying: string, connectors: string[], adapters: string[], slippageFactor: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getBestPairSwap(tokenIn: string, tokenOut: string, amount: BigNumberish, slippageFactor: BigNumberish, adapters: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getGasPriceUnderlyingRAY(underlying: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        priceOracle(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        uniV2PathFinder(overrides?: CallOverrides): Promise<[string]>;
        uniV3PathFinder(overrides?: CallOverrides): Promise<[string]>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
        wethToken(overrides?: CallOverrides): Promise<[string]>;
    };
    curvePathFinder(overrides?: CallOverrides): Promise<string>;
    findBestPath(task: ClosePathTaskStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    findBestPathIndex(balances: BalanceStruct[][], underlying: string, connectors: string[], adapters: string[], slippageFactor: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getBestPairSwap(tokenIn: string, tokenOut: string, amount: BigNumberish, slippageFactor: BigNumberish, adapters: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getGasPriceUnderlyingRAY(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    priceOracle(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    uniV2PathFinder(overrides?: CallOverrides): Promise<string>;
    uniV3PathFinder(overrides?: CallOverrides): Promise<string>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    wethToken(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        curvePathFinder(overrides?: CallOverrides): Promise<string>;
        findBestPath(task: ClosePathTaskStruct, overrides?: CallOverrides): Promise<ClosePathResultStructOutput>;
        findBestPathIndex(balances: BalanceStruct[][], underlying: string, connectors: string[], adapters: string[], slippageFactor: BigNumberish, overrides?: CallOverrides): Promise<[
            ClosePathResultStructOutput,
            BigNumber
        ] & {
            result: ClosePathResultStructOutput;
            bestIndex: BigNumber;
        }>;
        getBestPairSwap(tokenIn: string, tokenOut: string, amount: BigNumberish, slippageFactor: BigNumberish, adapters: string[], overrides?: CallOverrides): Promise<SwapQuoteStructOutput>;
        getGasPriceUnderlyingRAY(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        priceOracle(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        uniV2PathFinder(overrides?: CallOverrides): Promise<string>;
        uniV3PathFinder(overrides?: CallOverrides): Promise<string>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        wethToken(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        curvePathFinder(overrides?: CallOverrides): Promise<BigNumber>;
        findBestPath(task: ClosePathTaskStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        findBestPathIndex(balances: BalanceStruct[][], underlying: string, connectors: string[], adapters: string[], slippageFactor: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getBestPairSwap(tokenIn: string, tokenOut: string, amount: BigNumberish, slippageFactor: BigNumberish, adapters: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getGasPriceUnderlyingRAY(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        priceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        uniV2PathFinder(overrides?: CallOverrides): Promise<BigNumber>;
        uniV3PathFinder(overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        wethToken(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        curvePathFinder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        findBestPath(task: ClosePathTaskStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        findBestPathIndex(balances: BalanceStruct[][], underlying: string, connectors: string[], adapters: string[], slippageFactor: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getBestPairSwap(tokenIn: string, tokenOut: string, amount: BigNumberish, slippageFactor: BigNumberish, adapters: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getGasPriceUnderlyingRAY(underlying: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        uniV2PathFinder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uniV3PathFinder(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        wethToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
