import { BigNumberish } from "ethers";
import {
  contractParams,
  contractsByNetwork,
  ConvexPoolContract,
  ConvexPoolParams
} from "../contracts/contracts";
import { NetworkType } from "../core/constants";
import { CreditManagerData } from "../core/creditManager";
import { ConvexPhantomTokenData } from "../tokens/convex";

import { supportedTokens, tokenDataByNetwork } from "../tokens/token";
import { CurveLPTokenData } from "../tokens/curveLP";

import {
  ConvexV1BoosterAdapter__factory,
  ConvexV1BaseRewardPoolAdapter__factory,
  ConvexV1ClaimZapAdapter__factory
} from "../types";

import { MultiCallStruct } from "../types/contracts/interfaces/ICreditFacade.sol/ICreditFacade";
import { CurveStrategies } from "./curve";
import { UniswapV2Multicaller } from "./uniswapV2";

export class ConvexBoosterCalls {
  public static deposit(
    pid: BigNumberish,
    amount: BigNumberish,
    stake: boolean
  ) {
    return ConvexV1BoosterAdapter__factory.createInterface().encodeFunctionData(
      "deposit",
      [pid, amount, stake]
    );
  }

  public static depositAll(pid: BigNumberish, stake: boolean) {
    return ConvexV1BoosterAdapter__factory.createInterface().encodeFunctionData(
      "depositAll",
      [pid, stake]
    );
  }

  public static withdraw(pid: BigNumberish, amount: BigNumberish) {
    return ConvexV1BoosterAdapter__factory.createInterface().encodeFunctionData(
      "withdraw",
      [pid, amount]
    );
  }

  public static withdrawAll(pid: BigNumberish) {
    return ConvexV1BoosterAdapter__factory.createInterface().encodeFunctionData(
      "withdrawAll",
      [pid]
    );
  }
}

export class ConvexPoolCalls {
  public static stake(amount: BigNumberish) {
    return ConvexV1BaseRewardPoolAdapter__factory.createInterface().encodeFunctionData(
      "stake",
      [amount]
    );
  }

  public static stakeAll() {
    return ConvexV1BaseRewardPoolAdapter__factory.createInterface().encodeFunctionData(
      "stakeAll"
    );
  }

  public static withdraw(amount: BigNumberish, claim: boolean) {
    return ConvexV1BaseRewardPoolAdapter__factory.createInterface().encodeFunctionData(
      "withdraw",
      [amount, claim]
    );
  }

  public static withdrawAll(claim: boolean) {
    return ConvexV1BaseRewardPoolAdapter__factory.createInterface().encodeFunctionData(
      "withdrawAll",
      [claim]
    );
  }

  public static withdrawAndUnwrap(amount: BigNumberish, claim: boolean) {
    return ConvexV1BaseRewardPoolAdapter__factory.createInterface().encodeFunctionData(
      "withdrawAndUnwrap",
      [amount, claim]
    );
  }

  public static withdrawAllAndUnwrap(claim: boolean) {
    return ConvexV1BaseRewardPoolAdapter__factory.createInterface().encodeFunctionData(
      "withdrawAllAndUnwrap",
      [claim]
    );
  }
}

export class ConvexClaimZapCalls {
  public static claimRewards(
    rewardContracts: Array<string>,
    extraRewardContracts: Array<string>,
    tokenRewardContracts: Array<string>,
    tokenRewardTokens: Array<string>,
    depositCrvMaxAmount: BigNumberish,
    minAmountOut: BigNumberish,
    depositCvxMaxAmount: BigNumberish,
    spendCvxAmount: BigNumberish,
    options: BigNumberish
  ) {
    return ConvexV1ClaimZapAdapter__factory.createInterface().encodeFunctionData(
      "claimRewards",
      [
        rewardContracts,
        extraRewardContracts,
        tokenRewardContracts,
        tokenRewardTokens,
        depositCrvMaxAmount,
        minAmountOut,
        depositCvxMaxAmount,
        spendCvxAmount,
        options
      ]
    );
  }
}

export class ConvexBoosterMulticaller {
  private readonly _address: string;

  constructor(address: string) {
    this._address = address;
  }

  static connect(address: string) {
    return new ConvexBoosterMulticaller(address);
  }

  deposit(
    pid: BigNumberish,
    amount: BigNumberish,
    stake: boolean
  ): MultiCallStruct {
    return {
      target: this._address,
      callData: ConvexBoosterCalls.deposit(pid, amount, stake)
    };
  }

  depositAll(pid: BigNumberish, stake: boolean): MultiCallStruct {
    return {
      target: this._address,
      callData: ConvexBoosterCalls.depositAll(pid, stake)
    };
  }

  withdraw(pid: BigNumberish, amount: BigNumberish): MultiCallStruct {
    return {
      target: this._address,
      callData: ConvexBoosterCalls.withdraw(pid, amount)
    };
  }

  withdrawAll(pid: BigNumberish): MultiCallStruct {
    return {
      target: this._address,
      callData: ConvexBoosterCalls.withdrawAll(pid)
    };
  }
}

export class ConvexPoolMulticaller {
  private readonly _address: string;

  constructor(address: string) {
    this._address = address;
  }

  static connect(address: string) {
    return new ConvexPoolMulticaller(address);
  }

  stake(amount: BigNumberish): MultiCallStruct {
    return {
      target: this._address,
      callData: ConvexPoolCalls.stake(amount)
    };
  }

  stakeAll(): MultiCallStruct {
    return {
      target: this._address,
      callData: ConvexPoolCalls.stakeAll()
    };
  }

  withdraw(amount: BigNumberish, claim: boolean): MultiCallStruct {
    return {
      target: this._address,
      callData: ConvexPoolCalls.withdraw(amount, claim)
    };
  }

  withdrawAll(claim: boolean): MultiCallStruct {
    return {
      target: this._address,
      callData: ConvexPoolCalls.withdrawAll(claim)
    };
  }

  withdrawAndUnwrap(amount: BigNumberish, claim: boolean): MultiCallStruct {
    return {
      target: this._address,
      callData: ConvexPoolCalls.withdrawAndUnwrap(amount, claim)
    };
  }

  withdrawAllAndUnwrap(claim: boolean) {
    return {
      target: this._address,
      callData: ConvexPoolCalls.withdrawAllAndUnwrap(claim)
    };
  }
}

export class ConvexClaimZapMulticaller {
  private readonly _address: string;

  constructor(address: string) {
    this._address = address;
  }

  static connect(address: string) {
    return new ConvexClaimZapMulticaller(address);
  }

  claimRewards(
    rewardContracts: Array<string>,
    extraRewardContracts: Array<string>,
    tokenRewardContracts: Array<string>,
    tokenRewardTokens: Array<string>,
    depositCrvMaxAmount: BigNumberish,
    minAmountOut: BigNumberish,
    depositCvxMaxAmount: BigNumberish,
    spendCvxAmount: BigNumberish,
    options: BigNumberish
  ): MultiCallStruct {
    return {
      target: this._address,
      callData: ConvexClaimZapCalls.claimRewards(
        rewardContracts,
        extraRewardContracts,
        tokenRewardContracts,
        tokenRewardTokens,
        depositCrvMaxAmount,
        minAmountOut,
        depositCvxMaxAmount,
        spendCvxAmount,
        options
      )
    };
  }
}

export class ConvexStrategies {
  static underlyingToStakedConvex(
    data: CreditManagerData,
    network: NetworkType,
    convexPool: ConvexPoolContract,
    underlyingAmount: BigNumberish
  ): MultiCallStruct[] {
    let calls: Array<MultiCallStruct> = [];
    const convexParams = contractParams[convexPool] as ConvexPoolParams;
    const { stakedToken } = convexParams;
    const stakedTokenParams = supportedTokens[
      stakedToken
    ] as ConvexPhantomTokenData;
    const curveLpToken = stakedTokenParams.underlying;
    const curveLpTokenData = supportedTokens[curveLpToken] as CurveLPTokenData;
    const curvePool = curveLpTokenData.pool;

    calls = CurveStrategies.underlyingToCurveLP(
      data,
      network,
      curvePool,
      underlyingAmount
    );

    calls.push(
      ConvexBoosterMulticaller.connect(
        data.adapters[contractsByNetwork[network].CONVEX_BOOSTER.toLowerCase()]
      ).depositAll(stakedTokenParams.pid, true)
    );

    return calls;
  }

  static stakedConvexToUnderlying(
    data: CreditManagerData,
    network: NetworkType,
    convexPool: ConvexPoolContract,
    convexLpAmount: BigNumberish,
    sellRewards: boolean
  ) {
    const calls: Array<MultiCallStruct> = [];
    const convexParams = contractParams[convexPool] as ConvexPoolParams;
    const { stakedToken } = convexParams;
    const stakedTokenParams = supportedTokens[
      stakedToken
    ] as ConvexPhantomTokenData;
    const curveLpToken = stakedTokenParams.underlying;
    const curveLpTokenData = supportedTokens[curveLpToken] as CurveLPTokenData;
    const curvePool = curveLpTokenData.pool;

    calls.push(
      ConvexPoolMulticaller.connect(
        data.adapters[contractsByNetwork[network][convexPool].toLowerCase()]
      ).withdrawAndUnwrap(convexLpAmount, true)
    );

    calls.push(
      ...CurveStrategies.allCurveLPToUnderlying(data, network, curvePool)
    );

    if (sellRewards) {
      calls.push(...ConvexStrategies.sellRewards(data, network, convexPool));
    }

    return calls;
  }

  static allStakedConvexToUnderlying(
    data: CreditManagerData,
    network: NetworkType,
    convexPool: ConvexPoolContract,
    sellRewards: boolean
  ) {
    const calls: Array<MultiCallStruct> = [];
    const convexParams = contractParams[convexPool] as ConvexPoolParams;
    const { stakedToken } = convexParams;
    const stakedTokenParams = supportedTokens[
      stakedToken
    ] as ConvexPhantomTokenData;
    const curveLpToken = stakedTokenParams.underlying;
    const curveLpTokenData = supportedTokens[curveLpToken] as CurveLPTokenData;
    const curvePool = curveLpTokenData.pool;

    calls.push(
      ConvexPoolMulticaller.connect(
        data.adapters[contractsByNetwork[network][convexPool].toLowerCase()]
      ).withdrawAllAndUnwrap(true)
    );

    calls.push(
      ...CurveStrategies.allCurveLPToUnderlying(data, network, curvePool)
    );

    if (sellRewards) {
      calls.push(...ConvexStrategies.sellRewards(data, network, convexPool));
    }

    return calls;
  }

  static sellRewards(
    data: CreditManagerData,
    network: NetworkType,
    convexPool: ConvexPoolContract
  ) {
    const calls: Array<MultiCallStruct> = [];
    const convexParams = contractParams[convexPool] as ConvexPoolParams;

    calls.push(
      UniswapV2Multicaller.connect(
        data.adapters[
          contractsByNetwork[network].UNISWAP_V2_ROUTER.toLowerCase()
        ]
      ).swapAllTokensForTokens(
        0,
        [tokenDataByNetwork[network].CRV, data.underlyingToken],
        Math.floor(new Date().getTime() / 1000) + 3600
      ),
      UniswapV2Multicaller.connect(
        data.adapters[
          contractsByNetwork[network].UNISWAP_V2_ROUTER.toLowerCase()
        ]
      ).swapAllTokensForTokens(
        0,
        [tokenDataByNetwork[network].CVX, data.underlyingToken],
        Math.floor(new Date().getTime() / 1000) + 3600
      )
    );

    convexParams.extraRewards.forEach(extraReward => {
      UniswapV2Multicaller.connect(
        data.adapters[
          contractsByNetwork[network].UNISWAP_V2_ROUTER.toLowerCase()
        ]
      ).swapAllTokensForTokens(
        0,
        [
          tokenDataByNetwork[network][extraReward.rewardToken],
          data.underlyingToken
        ],
        Math.floor(new Date().getTime() / 1000) + 3600
      );
    });

    return calls;
  }
}
