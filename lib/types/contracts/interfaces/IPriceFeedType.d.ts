import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export interface IPriceFeedTypeInterface extends utils.Interface {
    functions: {
        "priceFeedType()": FunctionFragment;
        "skipPriceCheck()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "priceFeedType" | "skipPriceCheck"): FunctionFragment;
    encodeFunctionData(functionFragment: "priceFeedType", values?: undefined): string;
    encodeFunctionData(functionFragment: "skipPriceCheck", values?: undefined): string;
    decodeFunctionResult(functionFragment: "priceFeedType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "skipPriceCheck", data: BytesLike): Result;
    events: {};
}
export interface IPriceFeedType extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IPriceFeedTypeInterface;
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
        priceFeedType(overrides?: CallOverrides): Promise<[number]>;
        skipPriceCheck(overrides?: CallOverrides): Promise<[boolean]>;
    };
    priceFeedType(overrides?: CallOverrides): Promise<number>;
    skipPriceCheck(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        priceFeedType(overrides?: CallOverrides): Promise<number>;
        skipPriceCheck(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        priceFeedType(overrides?: CallOverrides): Promise<BigNumber>;
        skipPriceCheck(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        priceFeedType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        skipPriceCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
