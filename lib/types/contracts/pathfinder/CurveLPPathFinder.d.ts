import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare type BalanceStruct = {
    token: string;
    balance: BigNumberish;
};
export declare type BalanceStructOutput = [string, BigNumber] & {
    token: string;
    balance: BigNumber;
};
export declare type PathOptionStruct = {
    target: string;
    option: BigNumberish;
    totalOptions: BigNumberish;
};
export declare type PathOptionStructOutput = [string, number, number] & {
    target: string;
    option: number;
    totalOptions: number;
};
export declare type MultiCallStruct = {
    target: string;
    callData: BytesLike;
};
export declare type MultiCallStructOutput = [string, string] & {
    target: string;
    callData: string;
};
export interface CurveLPPathFinderInterface extends utils.Interface {
    functions: {
        "filterCurveLPAdapters(address[],bool)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "withdrawAll((address,uint256)[],address[],(address,uint8,uint8)[])": FunctionFragment;
        "withdrawAllMeta((address,uint256)[],address[],(address,uint8,uint8)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "filterCurveLPAdapters" | "owner" | "renounceOwnership" | "transferOwnership" | "withdrawAll" | "withdrawAllMeta"): FunctionFragment;
    encodeFunctionData(functionFragment: "filterCurveLPAdapters", values: [string[], boolean]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values: [BalanceStruct[], string[], PathOptionStruct[]]): string;
    encodeFunctionData(functionFragment: "withdrawAllMeta", values: [BalanceStruct[], string[], PathOptionStruct[]]): string;
    decodeFunctionResult(functionFragment: "filterCurveLPAdapters", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAllMeta", data: BytesLike): Result;
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
export interface CurveLPPathFinder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CurveLPPathFinderInterface;
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
        filterCurveLPAdapters(adapters: string[], metaPool: boolean, overrides?: CallOverrides): Promise<[string[]] & {
            result: string[];
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAll(b: BalanceStruct[], adapters: string[], pathOptions: PathOptionStruct[], overrides?: CallOverrides): Promise<[BalanceStructOutput[], MultiCallStructOutput[]]>;
        withdrawAllMeta(b: BalanceStruct[], adapters: string[], pathOptions: PathOptionStruct[], overrides?: CallOverrides): Promise<[BalanceStructOutput[], MultiCallStructOutput[]]>;
    };
    filterCurveLPAdapters(adapters: string[], metaPool: boolean, overrides?: CallOverrides): Promise<string[]>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAll(b: BalanceStruct[], adapters: string[], pathOptions: PathOptionStruct[], overrides?: CallOverrides): Promise<[BalanceStructOutput[], MultiCallStructOutput[]]>;
    withdrawAllMeta(b: BalanceStruct[], adapters: string[], pathOptions: PathOptionStruct[], overrides?: CallOverrides): Promise<[BalanceStructOutput[], MultiCallStructOutput[]]>;
    callStatic: {
        filterCurveLPAdapters(adapters: string[], metaPool: boolean, overrides?: CallOverrides): Promise<string[]>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        withdrawAll(b: BalanceStruct[], adapters: string[], pathOptions: PathOptionStruct[], overrides?: CallOverrides): Promise<[BalanceStructOutput[], MultiCallStructOutput[]]>;
        withdrawAllMeta(b: BalanceStruct[], adapters: string[], pathOptions: PathOptionStruct[], overrides?: CallOverrides): Promise<[BalanceStructOutput[], MultiCallStructOutput[]]>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        filterCurveLPAdapters(adapters: string[], metaPool: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAll(b: BalanceStruct[], adapters: string[], pathOptions: PathOptionStruct[], overrides?: CallOverrides): Promise<BigNumber>;
        withdrawAllMeta(b: BalanceStruct[], adapters: string[], pathOptions: PathOptionStruct[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        filterCurveLPAdapters(adapters: string[], metaPool: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAll(b: BalanceStruct[], adapters: string[], pathOptions: PathOptionStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawAllMeta(b: BalanceStruct[], adapters: string[], pathOptions: PathOptionStruct[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
