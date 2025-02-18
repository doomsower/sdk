import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export interface CurveV1Mock_3AssetsInterface extends utils.Interface {
    functions: {
        "A()": FunctionFragment;
        "A_precise()": FunctionFragment;
        "add_liquidity(uint256[3],uint256)": FunctionFragment;
        "admin()": FunctionFragment;
        "admin_balances(uint256)": FunctionFragment;
        "admin_fee()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balances(int128)": FunctionFragment;
        "balances(uint256)": FunctionFragment;
        "block_timestamp_last()": FunctionFragment;
        "calc_token_amount(uint256[3],bool)": FunctionFragment;
        "calc_withdraw_one_coin(uint256,int128)": FunctionFragment;
        "coins(int128)": FunctionFragment;
        "coins(uint256)": FunctionFragment;
        "decimals()": FunctionFragment;
        "exchange(int128,int128,uint256,uint256)": FunctionFragment;
        "exchange_underlying(int128,int128,uint256,uint256)": FunctionFragment;
        "fee()": FunctionFragment;
        "future_A()": FunctionFragment;
        "future_A_time()": FunctionFragment;
        "get_balances()": FunctionFragment;
        "get_dy(int128,int128,uint256)": FunctionFragment;
        "get_dy_underlying(int128,int128,uint256)": FunctionFragment;
        "get_previous_balances()": FunctionFragment;
        "get_price_cumulative_last()": FunctionFragment;
        "get_twap_balances(uint256[3],uint256[3],uint256)": FunctionFragment;
        "get_virtual_price()": FunctionFragment;
        "initial_A()": FunctionFragment;
        "initial_A_time()": FunctionFragment;
        "lp_token()": FunctionFragment;
        "mintLP(address,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "remove_liquidity(uint256,uint256[3])": FunctionFragment;
        "remove_liquidity_imbalance(uint256[3],uint256)": FunctionFragment;
        "remove_liquidity_one_coin(uint256,int128,uint256)": FunctionFragment;
        "setRate(int128,int128,uint256)": FunctionFragment;
        "setRateUnderlying(int128,int128,uint256)": FunctionFragment;
        "setWithdrawRate(int128,uint256)": FunctionFragment;
        "set_virtual_price(uint256)": FunctionFragment;
        "symbol()": FunctionFragment;
        "token()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "underlying_coins(int128)": FunctionFragment;
        "underlying_coins(uint256)": FunctionFragment;
        "virtualPrice()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "A" | "A_precise" | "add_liquidity" | "admin" | "admin_balances" | "admin_fee" | "allowance" | "balanceOf" | "balances(int128)" | "balances(uint256)" | "block_timestamp_last" | "calc_token_amount" | "calc_withdraw_one_coin" | "coins(int128)" | "coins(uint256)" | "decimals" | "exchange" | "exchange_underlying" | "fee" | "future_A" | "future_A_time" | "get_balances" | "get_dy" | "get_dy_underlying" | "get_previous_balances" | "get_price_cumulative_last" | "get_twap_balances" | "get_virtual_price" | "initial_A" | "initial_A_time" | "lp_token" | "mintLP" | "name" | "remove_liquidity" | "remove_liquidity_imbalance" | "remove_liquidity_one_coin" | "setRate" | "setRateUnderlying" | "setWithdrawRate" | "set_virtual_price" | "symbol" | "token" | "totalSupply" | "underlying_coins(int128)" | "underlying_coins(uint256)" | "virtualPrice"): FunctionFragment;
    encodeFunctionData(functionFragment: "A", values?: undefined): string;
    encodeFunctionData(functionFragment: "A_precise", values?: undefined): string;
    encodeFunctionData(functionFragment: "add_liquidity", values: [[BigNumberish, BigNumberish, BigNumberish], BigNumberish]): string;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "admin_balances", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "admin_fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "balances(int128)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "balances(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "block_timestamp_last", values?: undefined): string;
    encodeFunctionData(functionFragment: "calc_token_amount", values: [[BigNumberish, BigNumberish, BigNumberish], boolean]): string;
    encodeFunctionData(functionFragment: "calc_withdraw_one_coin", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "coins(int128)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "coins(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "exchange", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "exchange_underlying", values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "future_A_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_balances", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_dy", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_dy_underlying", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "get_previous_balances", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_price_cumulative_last", values?: undefined): string;
    encodeFunctionData(functionFragment: "get_twap_balances", values: [
        [
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        [
            BigNumberish,
            BigNumberish,
            BigNumberish
        ],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "get_virtual_price", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A", values?: undefined): string;
    encodeFunctionData(functionFragment: "initial_A_time", values?: undefined): string;
    encodeFunctionData(functionFragment: "lp_token", values?: undefined): string;
    encodeFunctionData(functionFragment: "mintLP", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "remove_liquidity", values: [BigNumberish, [BigNumberish, BigNumberish, BigNumberish]]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_imbalance", values: [[BigNumberish, BigNumberish, BigNumberish], BigNumberish]): string;
    encodeFunctionData(functionFragment: "remove_liquidity_one_coin", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRate", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRateUnderlying", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setWithdrawRate", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "set_virtual_price", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "underlying_coins(int128)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "underlying_coins(uint256)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "virtualPrice", values?: undefined): string;
    decodeFunctionResult(functionFragment: "A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "A_precise", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "add_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "admin_fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balances(int128)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balances(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "block_timestamp_last", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_token_amount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calc_withdraw_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coins(int128)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "coins(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exchange_underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "future_A_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_dy_underlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_previous_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_price_cumulative_last", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_twap_balances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "get_virtual_price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initial_A_time", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lp_token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintLP", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_imbalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "remove_liquidity_one_coin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRateUnderlying", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWithdrawRate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "set_virtual_price", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying_coins(int128)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "underlying_coins(uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "virtualPrice", data: BytesLike): Result;
    events: {};
}
export interface CurveV1Mock_3Assets extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CurveV1Mock_3AssetsInterface;
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
        A(overrides?: CallOverrides): Promise<[BigNumber]>;
        A_precise(overrides?: CallOverrides): Promise<[BigNumber]>;
        add_liquidity(amounts: [BigNumberish, BigNumberish, BigNumberish], min_mint_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        admin(overrides?: CallOverrides): Promise<[string]>;
        admin_balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        admin_fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        "balances(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        block_timestamp_last(overrides?: CallOverrides): Promise<[BigNumber]>;
        calc_token_amount(arg0: [BigNumberish, BigNumberish, BigNumberish], arg1: boolean, overrides?: CallOverrides): Promise<[BigNumber]>;
        calc_withdraw_one_coin(amount: BigNumberish, coin: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        "coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        fee(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_A(overrides?: CallOverrides): Promise<[BigNumber]>;
        future_A_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        get_balances(overrides?: CallOverrides): Promise<[[BigNumber, BigNumber, BigNumber]]>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        get_previous_balances(overrides?: CallOverrides): Promise<[[BigNumber, BigNumber, BigNumber]]>;
        get_price_cumulative_last(overrides?: CallOverrides): Promise<[[BigNumber, BigNumber, BigNumber]]>;
        get_twap_balances(_first_balances: [BigNumberish, BigNumberish, BigNumberish], arg1: [BigNumberish, BigNumberish, BigNumberish], arg2: BigNumberish, overrides?: CallOverrides): Promise<[[BigNumber, BigNumber, BigNumber]]>;
        get_virtual_price(overrides?: CallOverrides): Promise<[BigNumber]>;
        initial_A(overrides?: CallOverrides): Promise<[BigNumber]>;
        initial_A_time(overrides?: CallOverrides): Promise<[BigNumber]>;
        lp_token(overrides?: CallOverrides): Promise<[string]>;
        mintLP(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        remove_liquidity(_amount: BigNumberish, min_amounts: [BigNumberish, BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish, BigNumberish], max_burn_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRate(i: BigNumberish, j: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRateUnderlying(i: BigNumberish, j: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWithdrawRate(i: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        set_virtual_price(_price: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        token(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        "underlying_coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        virtualPrice(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    A(overrides?: CallOverrides): Promise<BigNumber>;
    A_precise(overrides?: CallOverrides): Promise<BigNumber>;
    add_liquidity(amounts: [BigNumberish, BigNumberish, BigNumberish], min_mint_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    admin(overrides?: CallOverrides): Promise<string>;
    admin_balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    "balances(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    block_timestamp_last(overrides?: CallOverrides): Promise<BigNumber>;
    calc_token_amount(arg0: [BigNumberish, BigNumberish, BigNumberish], arg1: boolean, overrides?: CallOverrides): Promise<BigNumber>;
    calc_withdraw_one_coin(amount: BigNumberish, coin: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    "coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<BigNumber>;
    exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    fee(overrides?: CallOverrides): Promise<BigNumber>;
    future_A(overrides?: CallOverrides): Promise<BigNumber>;
    future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
    get_balances(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    get_previous_balances(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    get_price_cumulative_last(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    get_twap_balances(_first_balances: [BigNumberish, BigNumberish, BigNumberish], arg1: [BigNumberish, BigNumberish, BigNumberish], arg2: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
    get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
    initial_A(overrides?: CallOverrides): Promise<BigNumber>;
    initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
    lp_token(overrides?: CallOverrides): Promise<string>;
    mintLP(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    remove_liquidity(_amount: BigNumberish, min_amounts: [BigNumberish, BigNumberish, BigNumberish], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish, BigNumberish], max_burn_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRate(i: BigNumberish, j: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRateUnderlying(i: BigNumberish, j: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWithdrawRate(i: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    set_virtual_price(_price: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    token(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    "underlying_coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
    virtualPrice(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        A(overrides?: CallOverrides): Promise<BigNumber>;
        A_precise(overrides?: CallOverrides): Promise<BigNumber>;
        add_liquidity(amounts: [BigNumberish, BigNumberish, BigNumberish], min_mint_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        admin(overrides?: CallOverrides): Promise<string>;
        admin_balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        "balances(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        block_timestamp_last(overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_amount(arg0: [BigNumberish, BigNumberish, BigNumberish], arg1: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        calc_withdraw_one_coin(amount: BigNumberish, coin: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: CallOverrides): Promise<void>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: CallOverrides): Promise<void>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_A(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        get_balances(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_previous_balances(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        get_price_cumulative_last(overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        get_twap_balances(_first_balances: [BigNumberish, BigNumberish, BigNumberish], arg1: [BigNumberish, BigNumberish, BigNumberish], arg2: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, BigNumber, BigNumber]>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        lp_token(overrides?: CallOverrides): Promise<string>;
        mintLP(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        name(overrides?: CallOverrides): Promise<string>;
        remove_liquidity(_amount: BigNumberish, min_amounts: [BigNumberish, BigNumberish, BigNumberish], overrides?: CallOverrides): Promise<void>;
        remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish, BigNumberish], max_burn_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setRate(i: BigNumberish, j: BigNumberish, rate_RAY: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setRateUnderlying(i: BigNumberish, j: BigNumberish, rate_RAY: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setWithdrawRate(i: BigNumberish, rate_RAY: BigNumberish, overrides?: CallOverrides): Promise<void>;
        set_virtual_price(_price: BigNumberish, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        token(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        "underlying_coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
        "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
        virtualPrice(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        A(overrides?: CallOverrides): Promise<BigNumber>;
        A_precise(overrides?: CallOverrides): Promise<BigNumber>;
        add_liquidity(amounts: [BigNumberish, BigNumberish, BigNumberish], min_mint_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        admin(overrides?: CallOverrides): Promise<BigNumber>;
        admin_balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        admin_fee(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        "balances(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        block_timestamp_last(overrides?: CallOverrides): Promise<BigNumber>;
        calc_token_amount(arg0: [BigNumberish, BigNumberish, BigNumberish], arg1: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        calc_withdraw_one_coin(amount: BigNumberish, coin: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        fee(overrides?: CallOverrides): Promise<BigNumber>;
        future_A(overrides?: CallOverrides): Promise<BigNumber>;
        future_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        get_balances(overrides?: CallOverrides): Promise<BigNumber>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_previous_balances(overrides?: CallOverrides): Promise<BigNumber>;
        get_price_cumulative_last(overrides?: CallOverrides): Promise<BigNumber>;
        get_twap_balances(_first_balances: [BigNumberish, BigNumberish, BigNumberish], arg1: [BigNumberish, BigNumberish, BigNumberish], arg2: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        get_virtual_price(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A(overrides?: CallOverrides): Promise<BigNumber>;
        initial_A_time(overrides?: CallOverrides): Promise<BigNumber>;
        lp_token(overrides?: CallOverrides): Promise<BigNumber>;
        mintLP(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        remove_liquidity(_amount: BigNumberish, min_amounts: [BigNumberish, BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish, BigNumberish], max_burn_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRate(i: BigNumberish, j: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRateUnderlying(i: BigNumberish, j: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWithdrawRate(i: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        set_virtual_price(_price: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        token(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        "underlying_coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        virtualPrice(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        A_precise(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        add_liquidity(amounts: [BigNumberish, BigNumberish, BigNumberish], min_mint_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin_balances(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        admin_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "balances(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "balances(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        block_timestamp_last(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calc_token_amount(arg0: [BigNumberish, BigNumberish, BigNumberish], arg1: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calc_withdraw_one_coin(amount: BigNumberish, coin: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        exchange(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        exchange_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, min_dy: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        future_A_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_balances(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_dy(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_dy_underlying(i: BigNumberish, j: BigNumberish, dx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_previous_balances(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_price_cumulative_last(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_twap_balances(_first_balances: [BigNumberish, BigNumberish, BigNumberish], arg1: [BigNumberish, BigNumberish, BigNumberish], arg2: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        get_virtual_price(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initial_A(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initial_A_time(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lp_token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintLP(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        remove_liquidity(_amount: BigNumberish, min_amounts: [BigNumberish, BigNumberish, BigNumberish], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        remove_liquidity_imbalance(amounts: [BigNumberish, BigNumberish, BigNumberish], max_burn_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        remove_liquidity_one_coin(_token_amount: BigNumberish, i: BigNumberish, min_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRate(i: BigNumberish, j: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRateUnderlying(i: BigNumberish, j: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWithdrawRate(i: BigNumberish, rate_RAY: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        set_virtual_price(_price: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "underlying_coins(int128)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "underlying_coins(uint256)"(i: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        virtualPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
