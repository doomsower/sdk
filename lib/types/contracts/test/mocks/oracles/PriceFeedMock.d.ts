import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface PriceFeedMockInterface extends utils.Interface {
    functions: {
        "decimals()": FunctionFragment;
        "description()": FunctionFragment;
        "getRoundData(uint80)": FunctionFragment;
        "latestRoundData()": FunctionFragment;
        "priceFeedType()": FunctionFragment;
        "setParams(uint80,uint256,uint256,uint80)": FunctionFragment;
        "setPrice(int256)": FunctionFragment;
        "setRevertOnLatestRound(bool)": FunctionFragment;
        "setSkipPriceCheck(uint8)": FunctionFragment;
        "skipPriceCheck()": FunctionFragment;
        "version()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "decimals" | "description" | "getRoundData" | "latestRoundData" | "priceFeedType" | "setParams" | "setPrice" | "setRevertOnLatestRound" | "setSkipPriceCheck" | "skipPriceCheck" | "version"): FunctionFragment;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "description", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoundData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "latestRoundData", values?: undefined): string;
    encodeFunctionData(functionFragment: "priceFeedType", values?: undefined): string;
    encodeFunctionData(functionFragment: "setParams", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPrice", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRevertOnLatestRound", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setSkipPriceCheck", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "skipPriceCheck", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "description", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoundData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestRoundData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "priceFeedType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRevertOnLatestRound", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSkipPriceCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skipPriceCheck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    events: {};
}
export interface PriceFeedMock extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PriceFeedMockInterface;
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
        decimals(overrides?: CallOverrides): Promise<[number]>;
        description(overrides?: CallOverrides): Promise<[string]>;
        getRoundData(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        latestRoundData(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        priceFeedType(overrides?: CallOverrides): Promise<[number]>;
        setParams(_roundId: BigNumberish, _startedAt: BigNumberish, _updatedAt: BigNumberish, _answerInRound: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPrice(newPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRevertOnLatestRound(value: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSkipPriceCheck(f: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        skipPriceCheck(overrides?: CallOverrides): Promise<[boolean]>;
        version(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    decimals(overrides?: CallOverrides): Promise<number>;
    description(overrides?: CallOverrides): Promise<string>;
    getRoundData(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    latestRoundData(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
    priceFeedType(overrides?: CallOverrides): Promise<number>;
    setParams(_roundId: BigNumberish, _startedAt: BigNumberish, _updatedAt: BigNumberish, _answerInRound: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPrice(newPrice: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRevertOnLatestRound(value: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSkipPriceCheck(f: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    skipPriceCheck(overrides?: CallOverrides): Promise<boolean>;
    version(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        decimals(overrides?: CallOverrides): Promise<number>;
        description(overrides?: CallOverrides): Promise<string>;
        getRoundData(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        latestRoundData(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
        priceFeedType(overrides?: CallOverrides): Promise<number>;
        setParams(_roundId: BigNumberish, _startedAt: BigNumberish, _updatedAt: BigNumberish, _answerInRound: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPrice(newPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setRevertOnLatestRound(value: boolean, overrides?: CallOverrides): Promise<void>;
        setSkipPriceCheck(f: BigNumberish, overrides?: CallOverrides): Promise<void>;
        skipPriceCheck(overrides?: CallOverrides): Promise<boolean>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        description(overrides?: CallOverrides): Promise<BigNumber>;
        getRoundData(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        latestRoundData(overrides?: CallOverrides): Promise<BigNumber>;
        priceFeedType(overrides?: CallOverrides): Promise<BigNumber>;
        setParams(_roundId: BigNumberish, _startedAt: BigNumberish, _updatedAt: BigNumberish, _answerInRound: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPrice(newPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRevertOnLatestRound(value: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSkipPriceCheck(f: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        skipPriceCheck(overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        description(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoundData(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        latestRoundData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        priceFeedType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setParams(_roundId: BigNumberish, _startedAt: BigNumberish, _updatedAt: BigNumberish, _answerInRound: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPrice(newPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRevertOnLatestRound(value: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSkipPriceCheck(f: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        skipPriceCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
