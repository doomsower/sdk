import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export declare namespace IBooster {
    type PoolInfoStruct = {
        lptoken: string;
        token: string;
        gauge: string;
        crvRewards: string;
        stash: string;
        shutdown: boolean;
    };
    type PoolInfoStructOutput = [
        string,
        string,
        string,
        string,
        string,
        boolean
    ] & {
        lptoken: string;
        token: string;
        gauge: string;
        crvRewards: string;
        stash: string;
        shutdown: boolean;
    };
}
export interface IConvexV1BoosterAdapterInterface extends utils.Interface {
    functions: {
        "_gearboxAdapterType()": FunctionFragment;
        "_gearboxAdapterVersion()": FunctionFragment;
        "booster()": FunctionFragment;
        "creditFacade()": FunctionFragment;
        "creditManager()": FunctionFragment;
        "crv()": FunctionFragment;
        "deposit(uint256,uint256,bool)": FunctionFragment;
        "depositAll(uint256,bool)": FunctionFragment;
        "lockFees()": FunctionFragment;
        "lockRewards()": FunctionFragment;
        "minter()": FunctionFragment;
        "poolInfo(uint256)": FunctionFragment;
        "poolLength()": FunctionFragment;
        "registry()": FunctionFragment;
        "staker()": FunctionFragment;
        "stakerRewards()": FunctionFragment;
        "targetContract()": FunctionFragment;
        "updateStakedPhantomTokensMap()": FunctionFragment;
        "withdraw(uint256,uint256)": FunctionFragment;
        "withdrawAll(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_gearboxAdapterType" | "_gearboxAdapterVersion" | "booster" | "creditFacade" | "creditManager" | "crv" | "deposit" | "depositAll" | "lockFees" | "lockRewards" | "minter" | "poolInfo" | "poolLength" | "registry" | "staker" | "stakerRewards" | "targetContract" | "updateStakedPhantomTokensMap" | "withdraw" | "withdrawAll"): FunctionFragment;
    encodeFunctionData(functionFragment: "_gearboxAdapterType", values?: undefined): string;
    encodeFunctionData(functionFragment: "_gearboxAdapterVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "booster", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditFacade", values?: undefined): string;
    encodeFunctionData(functionFragment: "creditManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "crv", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "depositAll", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "lockFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "lockRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "minter", values?: undefined): string;
    encodeFunctionData(functionFragment: "poolInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "poolLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "registry", values?: undefined): string;
    encodeFunctionData(functionFragment: "staker", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakerRewards", values?: undefined): string;
    encodeFunctionData(functionFragment: "targetContract", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateStakedPhantomTokensMap", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawAll", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "_gearboxAdapterType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_gearboxAdapterVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "booster", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditFacade", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "creditManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "crv", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "poolLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "staker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakerRewards", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "targetContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateStakedPhantomTokensMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAll", data: BytesLike): Result;
    events: {};
}
export interface IConvexV1BoosterAdapter extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IConvexV1BoosterAdapterInterface;
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
        booster(overrides?: CallOverrides): Promise<[string]>;
        creditFacade(overrides?: CallOverrides): Promise<[string]>;
        creditManager(overrides?: CallOverrides): Promise<[string]>;
        crv(overrides?: CallOverrides): Promise<[string]>;
        deposit(_pid: BigNumberish, _amount: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositAll(_pid: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        lockFees(overrides?: CallOverrides): Promise<[string]>;
        lockRewards(overrides?: CallOverrides): Promise<[string]>;
        minter(overrides?: CallOverrides): Promise<[string]>;
        poolInfo(i: BigNumberish, overrides?: CallOverrides): Promise<[IBooster.PoolInfoStructOutput]>;
        poolLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        registry(overrides?: CallOverrides): Promise<[string]>;
        staker(overrides?: CallOverrides): Promise<[string]>;
        stakerRewards(overrides?: CallOverrides): Promise<[string]>;
        targetContract(overrides?: CallOverrides): Promise<[string]>;
        updateStakedPhantomTokensMap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAll(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;
    _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;
    booster(overrides?: CallOverrides): Promise<string>;
    creditFacade(overrides?: CallOverrides): Promise<string>;
    creditManager(overrides?: CallOverrides): Promise<string>;
    crv(overrides?: CallOverrides): Promise<string>;
    deposit(_pid: BigNumberish, _amount: BigNumberish, _stake: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositAll(_pid: BigNumberish, _stake: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    lockFees(overrides?: CallOverrides): Promise<string>;
    lockRewards(overrides?: CallOverrides): Promise<string>;
    minter(overrides?: CallOverrides): Promise<string>;
    poolInfo(i: BigNumberish, overrides?: CallOverrides): Promise<IBooster.PoolInfoStructOutput>;
    poolLength(overrides?: CallOverrides): Promise<BigNumber>;
    registry(overrides?: CallOverrides): Promise<string>;
    staker(overrides?: CallOverrides): Promise<string>;
    stakerRewards(overrides?: CallOverrides): Promise<string>;
    targetContract(overrides?: CallOverrides): Promise<string>;
    updateStakedPhantomTokensMap(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAll(_pid: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _gearboxAdapterType(overrides?: CallOverrides): Promise<number>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<number>;
        booster(overrides?: CallOverrides): Promise<string>;
        creditFacade(overrides?: CallOverrides): Promise<string>;
        creditManager(overrides?: CallOverrides): Promise<string>;
        crv(overrides?: CallOverrides): Promise<string>;
        deposit(_pid: BigNumberish, _amount: BigNumberish, _stake: boolean, overrides?: CallOverrides): Promise<boolean>;
        depositAll(_pid: BigNumberish, _stake: boolean, overrides?: CallOverrides): Promise<boolean>;
        lockFees(overrides?: CallOverrides): Promise<string>;
        lockRewards(overrides?: CallOverrides): Promise<string>;
        minter(overrides?: CallOverrides): Promise<string>;
        poolInfo(i: BigNumberish, overrides?: CallOverrides): Promise<IBooster.PoolInfoStructOutput>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        registry(overrides?: CallOverrides): Promise<string>;
        staker(overrides?: CallOverrides): Promise<string>;
        stakerRewards(overrides?: CallOverrides): Promise<string>;
        targetContract(overrides?: CallOverrides): Promise<string>;
        updateStakedPhantomTokensMap(overrides?: CallOverrides): Promise<void>;
        withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        withdrawAll(_pid: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        _gearboxAdapterType(overrides?: CallOverrides): Promise<BigNumber>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<BigNumber>;
        booster(overrides?: CallOverrides): Promise<BigNumber>;
        creditFacade(overrides?: CallOverrides): Promise<BigNumber>;
        creditManager(overrides?: CallOverrides): Promise<BigNumber>;
        crv(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_pid: BigNumberish, _amount: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositAll(_pid: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        lockFees(overrides?: CallOverrides): Promise<BigNumber>;
        lockRewards(overrides?: CallOverrides): Promise<BigNumber>;
        minter(overrides?: CallOverrides): Promise<BigNumber>;
        poolInfo(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        poolLength(overrides?: CallOverrides): Promise<BigNumber>;
        registry(overrides?: CallOverrides): Promise<BigNumber>;
        staker(overrides?: CallOverrides): Promise<BigNumber>;
        stakerRewards(overrides?: CallOverrides): Promise<BigNumber>;
        targetContract(overrides?: CallOverrides): Promise<BigNumber>;
        updateStakedPhantomTokensMap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAll(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _gearboxAdapterType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _gearboxAdapterVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        booster(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditFacade(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        creditManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        crv(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_pid: BigNumberish, _amount: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositAll(_pid: BigNumberish, _stake: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        lockFees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        minter(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolInfo(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        poolLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        registry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        staker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakerRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        targetContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateStakedPhantomTokensMap(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdraw(_pid: BigNumberish, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAll(_pid: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
