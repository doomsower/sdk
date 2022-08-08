import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface AddressProviderACLMockInterface extends utils.Interface {
    functions: {
        "getACL()": FunctionFragment;
        "getPriceOracle()": FunctionFragment;
        "isConfigurator(address)": FunctionFragment;
        "priceFeeds(address)": FunctionFragment;
        "setPriceFeed(address,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getACL" | "getPriceOracle" | "isConfigurator" | "priceFeeds" | "setPriceFeed"): FunctionFragment;
    encodeFunctionData(functionFragment: "getACL", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPriceOracle", values?: undefined): string;
    encodeFunctionData(functionFragment: "isConfigurator", values: [string]): string;
    encodeFunctionData(functionFragment: "priceFeeds", values: [string]): string;
    encodeFunctionData(functionFragment: "setPriceFeed", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "getACL", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPriceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isConfigurator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeeds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPriceFeed", data: BytesLike): Result;
    events: {};
}
export interface AddressProviderACLMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AddressProviderACLMockInterface;
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
        getACL(overrides?: CallOverrides): Promise<[string]>;
        getPriceOracle(overrides?: CallOverrides): Promise<[string]>;
        isConfigurator(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        priceFeeds(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        setPriceFeed(token: string, feed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getACL(overrides?: CallOverrides): Promise<string>;
    getPriceOracle(overrides?: CallOverrides): Promise<string>;
    isConfigurator(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    priceFeeds(arg0: string, overrides?: CallOverrides): Promise<string>;
    setPriceFeed(token: string, feed: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getACL(overrides?: CallOverrides): Promise<string>;
        getPriceOracle(overrides?: CallOverrides): Promise<string>;
        isConfigurator(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        priceFeeds(arg0: string, overrides?: CallOverrides): Promise<string>;
        setPriceFeed(token: string, feed: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        getACL(overrides?: CallOverrides): Promise<BigNumber>;
        getPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;
        isConfigurator(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        priceFeeds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        setPriceFeed(token: string, feed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getACL(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isConfigurator(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceFeeds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setPriceFeed(token: string, feed: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
