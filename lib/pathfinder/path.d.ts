import { BigNumber, ethers } from "ethers";
import { CreditManagerData } from "../core/creditManager";
import { MultiCall } from "../core/multicall";
import { SupportedToken } from "../tokens/token";
import { NetworkType } from "../core/constants";
import { CreditAccountData } from "../core/creditAccount";
import { PartialRecord } from "../utils/types";
export declare class Path {
    readonly calls: Array<MultiCall>;
    readonly balances: PartialRecord<SupportedToken, BigNumber>;
    readonly underlying: SupportedToken;
    readonly creditManager: CreditManagerData;
    readonly creditAccount: CreditAccountData;
    readonly networkType: NetworkType;
    readonly provider: ethers.providers.Provider;
    totalGasLimit: number;
    constructor(opts: {
        balances: PartialRecord<SupportedToken, BigNumber>;
        underlying: SupportedToken;
        creditManager: CreditManagerData;
        creditAccount: CreditAccountData;
        networkType: NetworkType;
        provider: ethers.providers.Provider;
        totalGasLimit: number;
    });
    popBalance(token: SupportedToken): BigNumber;
    private comparedByPriority;
    static findBestPath(creditAccount: CreditAccountData, creditManager: CreditManagerData, provider: ethers.providers.Provider): Promise<void>;
    withdrawTokens(): Promise<Array<Path>>;
    clone(): Path;
}
export interface ActionData {
    callData: MultiCall;
    amountOut: BigNumber;
    gasLimit: BigNumber;
}
export declare abstract class LPWithdrawPathFinder {
    abstract findWithdrawPaths(p: Path): Promise<Array<Path>>;
    getUniswapV2SwapData(adapterAddress: string, currentTokenAddress: string, currentBalance: BigNumber, nextTokenAddress: string, p: Path): Promise<ActionData>;
}
