import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../common";
export interface ICreditFacadeExtendedInterface extends utils.Interface {
    functions: {
        "disableToken(address)": FunctionFragment;
        "revertIfBalanceLessThan(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "disableToken" | "revertIfBalanceLessThan"): FunctionFragment;
    encodeFunctionData(functionFragment: "disableToken", values: [string]): string;
    encodeFunctionData(functionFragment: "revertIfBalanceLessThan", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "disableToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revertIfBalanceLessThan", data: BytesLike): Result;
    events: {};
}
export interface ICreditFacadeExtended extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICreditFacadeExtendedInterface;
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
        disableToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revertIfBalanceLessThan(token: string, minBalance: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    disableToken(token: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revertIfBalanceLessThan(token: string, minBalance: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        disableToken(token: string, overrides?: CallOverrides): Promise<void>;
        revertIfBalanceLessThan(token: string, minBalance: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        disableToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revertIfBalanceLessThan(token: string, minBalance: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        disableToken(token: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revertIfBalanceLessThan(token: string, minBalance: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
