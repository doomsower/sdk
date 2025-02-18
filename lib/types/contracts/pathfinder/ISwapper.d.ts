import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
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
export interface ISwapperInterface extends utils.Interface {
    functions: {
        "getBestConnectorSwap((uint8,address,address,address,address[],uint256,uint256,bool),address)": FunctionFragment;
        "getBestDirectPairSwap((uint8,address,address,address,address[],uint256,uint256,bool),address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getBestConnectorSwap" | "getBestDirectPairSwap"): FunctionFragment;
    encodeFunctionData(functionFragment: "getBestConnectorSwap", values: [SwapTaskStruct, string]): string;
    encodeFunctionData(functionFragment: "getBestDirectPairSwap", values: [SwapTaskStruct, string]): string;
    decodeFunctionResult(functionFragment: "getBestConnectorSwap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBestDirectPairSwap", data: BytesLike): Result;
    events: {};
}
export interface ISwapper extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISwapperInterface;
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
        getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: CallOverrides): Promise<SwapQuoteStructOutput>;
        getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: CallOverrides): Promise<SwapQuoteStructOutput>;
    };
    filters: {};
    estimateGas: {
        getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getBestConnectorSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getBestDirectPairSwap(swapTask: SwapTaskStruct, adapter: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
