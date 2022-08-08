import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface IRegistryInterface extends utils.Interface {
    functions: {
        "gauge_controller()": FunctionFragment;
        "get_address(uint256)": FunctionFragment;
        "get_gauges(address)": FunctionFragment;
        "get_lp_token(address)": FunctionFragment;
        "get_registry()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "gauge_controller" | "get_address" | "get_gauges" | "get_lp_token" | "get_registry"): FunctionFragment;
    encodeFunctionData(functionFragment: "gauge_controller", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_address", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_gauges", values: [string]): string;
    encodeFunctionData(functionFragment: "get_lp_token", values: [string]): string;
    encodeFunctionData(functionFragment: "get_registry", values?: undefined): string;
    decodeFunctionResult(functionFragment: "gauge_controller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_address", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_gauges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_lp_token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_registry", data: BytesLike): Result;
    events: {};
}
export interface IRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IRegistryInterface;
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
        gauge_controller(overrides?: CallOverrides): Promise<[string]>;
        get_address(_id: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        get_gauges(arg0: string, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
        get_lp_token(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        get_registry(overrides?: CallOverrides): Promise<[string]>;
    };
    gauge_controller(overrides?: CallOverrides): Promise<string>;
    get_address(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;
    get_gauges(arg0: string, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
    get_lp_token(arg0: string, overrides?: CallOverrides): Promise<string>;
    get_registry(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        gauge_controller(overrides?: CallOverrides): Promise<string>;
        get_address(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;
        get_gauges(arg0: string, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
        get_lp_token(arg0: string, overrides?: CallOverrides): Promise<string>;
        get_registry(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        gauge_controller(overrides?: CallOverrides): Promise<BigNumber>;
        get_address(_id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_gauges(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        get_lp_token(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        get_registry(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        gauge_controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_address(_id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_gauges(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_lp_token(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
