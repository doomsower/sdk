import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface AdapterMockInterface extends utils.Interface {
    functions: {
        "_gearboxAdapterType()": FunctionFragment;
        "_gearboxAdapterVersion()": FunctionFragment;
        "creditFacade()": FunctionFragment;
        "creditManager()": FunctionFragment;
        "execute(bytes)": FunctionFragment;
        "executeMaxAllowanceFastCheck(address,address,address,bytes,bool,bool)": FunctionFragment;
        "executeMaxAllowanceFastCheck(address,address,bytes,bool,bool)": FunctionFragment;
        "fullCheck(address)": FunctionFragment;
        "safeExecuteFastCheck(address,address,bytes,bool,bool)": FunctionFragment;
        "safeExecuteFastCheck(address,address,address,bytes,bool,bool)": FunctionFragment;
        "targetContract()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_gearboxAdapterType" | "_gearboxAdapterVersion" | "creditFacade" | "creditManager" | "execute" | "executeMaxAllowanceFastCheck(address,address,address,bytes,bool,bool)" | "executeMaxAllowanceFastCheck(address,address,bytes,bool,bool)" | "fullCheck" | "safeExecuteFastCheck(address,address,bytes,bool,bool)" | "safeExecuteFastCheck(address,address,address,bytes,bool,bool)" | "targetContract"): FunctionFragment;
    encodeFunctionData(functionFragment: "_gearboxAdapterType", values?: undefined): string;
    encodeFunctionData(functionFragment: "_gearboxAdapterVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditFacade", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "executeMaxAllowanceFastCheck(address,address,address,bytes,bool,bool)", values: [string, string, string, BytesLike, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "executeMaxAllowanceFastCheck(address,address,bytes,bool,bool)", values: [string, string, BytesLike, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "fullCheck", values: [string]): string;
    encodeFunctionData(functionFragment: "safeExecuteFastCheck(address,address,bytes,bool,bool)", values: [string, string, BytesLike, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "safeExecuteFastCheck(address,address,address,bytes,bool,bool)", values: [string, string, string, BytesLike, boolean, boolean]): string;
    encodeFunctionData(functionFragment: "targetContract", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_gearboxAdapterType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_gearboxAdapterVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditFacade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMaxAllowanceFastCheck(address,address,address,bytes,bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeMaxAllowanceFastCheck(address,address,bytes,bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fullCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeExecuteFastCheck(address,address,bytes,bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeExecuteFastCheck(address,address,address,bytes,bool,bool)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetContract", data: BytesLike): Result;
    events: {};
}
export interface AdapterMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AdapterMockInterface;
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
        _gearboxAdapterType(overrides?: CallOverrides): Promise<[number]>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<[number]>;
        creditFacade(overrides?: CallOverrides): Promise<[string]>;
        creditManager(overrides?: CallOverrides): Promise<[string]>;
        execute(callData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "executeMaxAllowanceFastCheck(address,address,address,bytes,bool,bool)"(creditAccount: string, tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "executeMaxAllowanceFastCheck(address,address,bytes,bool,bool)"(tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fullCheck(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeExecuteFastCheck(address,address,bytes,bool,bool)"(tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeExecuteFastCheck(address,address,address,bytes,bool,bool)"(creditAccount: string, tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        targetContract(overrides?: CallOverrides): Promise<[string]>;
    };
    _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;
    _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;
    creditFacade(overrides?: CallOverrides): Promise<string>;
    creditManager(overrides?: CallOverrides): Promise<string>;
    execute(callData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "executeMaxAllowanceFastCheck(address,address,address,bytes,bool,bool)"(creditAccount: string, tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "executeMaxAllowanceFastCheck(address,address,bytes,bool,bool)"(tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fullCheck(creditAccount: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeExecuteFastCheck(address,address,bytes,bool,bool)"(tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeExecuteFastCheck(address,address,address,bytes,bool,bool)"(creditAccount: string, tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    targetContract(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;
        creditFacade(overrides?: CallOverrides): Promise<string>;
        creditManager(overrides?: CallOverrides): Promise<string>;
        execute(callData: BytesLike, overrides?: CallOverrides): Promise<string>;
        "executeMaxAllowanceFastCheck(address,address,address,bytes,bool,bool)"(creditAccount: string, tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: CallOverrides): Promise<string>;
        "executeMaxAllowanceFastCheck(address,address,bytes,bool,bool)"(tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: CallOverrides): Promise<string>;
        fullCheck(creditAccount: string, overrides?: CallOverrides): Promise<void>;
        "safeExecuteFastCheck(address,address,bytes,bool,bool)"(tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: CallOverrides): Promise<string>;
        "safeExecuteFastCheck(address,address,address,bytes,bool,bool)"(creditAccount: string, tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: CallOverrides): Promise<string>;
        targetContract(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        _gearboxAdapterType(overrides?: CallOverrides): Promise<BigNumber>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<BigNumber>;
        creditManager(overrides?: CallOverrides): Promise<BigNumber>;
        execute(callData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "executeMaxAllowanceFastCheck(address,address,address,bytes,bool,bool)"(creditAccount: string, tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "executeMaxAllowanceFastCheck(address,address,bytes,bool,bool)"(tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fullCheck(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeExecuteFastCheck(address,address,bytes,bool,bool)"(tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeExecuteFastCheck(address,address,address,bytes,bool,bool)"(creditAccount: string, tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        targetContract(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _gearboxAdapterType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(callData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "executeMaxAllowanceFastCheck(address,address,address,bytes,bool,bool)"(creditAccount: string, tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "executeMaxAllowanceFastCheck(address,address,bytes,bool,bool)"(tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fullCheck(creditAccount: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeExecuteFastCheck(address,address,bytes,bool,bool)"(tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeExecuteFastCheck(address,address,address,bytes,bool,bool)"(creditAccount: string, tokenIn: string, tokenOut: string, callData: BytesLike, allowTokenIn: boolean, disableTokenIn: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        targetContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
