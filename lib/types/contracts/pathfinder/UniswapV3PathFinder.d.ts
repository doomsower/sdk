import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare type SwapTaskStruct = {
    swapOperation: BigNumberish;
    creditAccount: string;
    tokenIn: string;
    tokenOut: string;
    connectors: string[];
    amount: BigNumberish;
    slippage: BigNumberish;
    externalSlippage: boolean;
};
export declare type SwapTaskStructOutput = [
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
export declare type MultiCallStruct = {
    target: string;
    callData: BytesLike;
};
export declare type MultiCallStructOutput = [string, string] & {
    target: string;
    callData: string;
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
export interface UniswapV3PathFinderInterface extends utils.Interface {
    functions: {
        "addQuoter(address,address)": FunctionFragment;
        "fees(uint256)": FunctionFragment;
        "gasUsage(address,address,address)": FunctionFragment;
        "generatePathV3(uint8,address,uint256,address,uint256,address)": FunctionFragment;
        "getBestConnectorSwap((uint8,address,address,address,address[],uint256,uint256,bool),address)": FunctionFragment;
        "getBestDirectPairSwap((uint8,address,address,address,address[],uint256,uint256,bool),address)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "routerToQuoter(address)": FunctionFragment;
        "setGasUsage(address,address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addQuoter" | "fees" | "gasUsage" | "generatePathV3" | "getBestConnectorSwap" | "getBestDirectPairSwap" | "owner" | "renounceOwnership" | "routerToQuoter" | "setGasUsage" | "transferOwnership" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "addQuoter", values: [string, string]): string;
    encodeFunctionData(functionFragment: "fees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "gasUsage", values: [string, string, string]): string;
    encodeFunctionData(functionFragment: "generatePathV3", values: [BigNumberish, string, BigNumberish, string, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getBestConnectorSwap", values: [SwapTaskStruct, string]): string;
    encodeFunctionData(functionFragment: "getBestDirectPairSwap", values: [SwapTaskStruct, string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "routerToQuoter", values: [string]): string;
    encodeFunctionData(functionFragment: "setGasUsage", values: [string, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "addQuoter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasUsage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "generatePathV3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBestConnectorSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBestDirectPairSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "routerToQuoter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGasUsage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
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
export interface UniswapV3PathFinder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: UniswapV3PathFinderInterface;
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
        addQuoter(router: string, quoter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fees(index: BigNumberish, overrides?: CallOverrides): Promise<[number]>;
        gasUsage(arg0: string, arg1: string, arg2: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        generatePathV3(swapOperation: BigNumberish, tokenIn: string, feeIndex0: BigNumberish, connector: string, feeIndex1: BigNumberish, tokenOut: string, overrides?: CallOverrides): Promise<[string] & {
            result: string;
        }>;
        getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        routerToQuoter(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        setGasUsage(router: string, token0: string, token1: string, usage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    addQuoter(router: string, quoter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fees(index: BigNumberish, overrides?: CallOverrides): Promise<number>;
    gasUsage(arg0: string, arg1: string, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
    generatePathV3(swapOperation: BigNumberish, tokenIn: string, feeIndex0: BigNumberish, connector: string, feeIndex1: BigNumberish, tokenOut: string, overrides?: CallOverrides): Promise<string>;
    getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    routerToQuoter(arg0: string, overrides?: CallOverrides): Promise<string>;
    setGasUsage(router: string, token0: string, token1: string, usage: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        addQuoter(router: string, quoter: string, overrides?: CallOverrides): Promise<void>;
        fees(index: BigNumberish, overrides?: CallOverrides): Promise<number>;
        gasUsage(arg0: string, arg1: string, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
        generatePathV3(swapOperation: BigNumberish, tokenIn: string, feeIndex0: BigNumberish, connector: string, feeIndex1: BigNumberish, tokenOut: string, overrides?: CallOverrides): Promise<string>;
        getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: CallOverrides): Promise<SwapQuoteStructOutput>;
        getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: CallOverrides): Promise<SwapQuoteStructOutput>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        routerToQuoter(arg0: string, overrides?: CallOverrides): Promise<string>;
        setGasUsage(router: string, token0: string, token1: string, usage: BigNumberish, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        addQuoter(router: string, quoter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fees(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        gasUsage(arg0: string, arg1: string, arg2: string, overrides?: CallOverrides): Promise<BigNumber>;
        generatePathV3(swapOperation: BigNumberish, tokenIn: string, feeIndex0: BigNumberish, connector: string, feeIndex1: BigNumberish, tokenOut: string, overrides?: CallOverrides): Promise<BigNumber>;
        getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        routerToQuoter(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setGasUsage(router: string, token0: string, token1: string, usage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        addQuoter(router: string, quoter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fees(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gasUsage(arg0: string, arg1: string, arg2: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        generatePathV3(swapOperation: BigNumberish, tokenIn: string, feeIndex0: BigNumberish, connector: string, feeIndex1: BigNumberish, tokenOut: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        routerToQuoter(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setGasUsage(router: string, token0: string, token1: string, usage: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
