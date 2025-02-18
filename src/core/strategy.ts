import { BigNumber } from "ethers";
import { calcTotalPrice } from "../utils/price";
import { TokensWithAPY } from "../apy";
import { LEVERAGE_DECIMALS, PERCENTAGE_FACTOR, WAD } from "./constants";

export interface StrategyPayload {
  apy?: number;
  apyTokenSymbol: TokensWithAPY;

  name: string;
  lpToken: string;
  pools: Array<string>;

  unleveragableCollateral: Array<string>;
  leveragableCollateral: Array<string>;

  baseAssets: Array<string>;
}

interface PoolStats {
  borrowRate: number;
}

type PoolList = Record<string, PoolStats>;

interface TokenDescription {
  price: BigNumber;
  amount: BigNumber;
  decimals: number | undefined;
}

export class Strategy {
  apy: number | undefined;

  name: string;

  lpToken: string;

  pools: Array<string>;

  unleveragableCollateral: Array<string>;

  leveragableCollateral: Array<string>;

  baseAssets: Array<string>;

  constructor(payload: StrategyPayload) {
    this.apy = payload.apy;

    this.name = payload.name;
    this.lpToken = payload.lpToken;
    this.pools = payload.pools;
    this.unleveragableCollateral = payload.unleveragableCollateral;
    this.leveragableCollateral = payload.leveragableCollateral;
    this.baseAssets = payload.baseAssets;
  }

  maxAPY(maxLeverage: number, poolApy: PoolList) {
    const minApy = minBorrowApy(poolApy);

    return roi(
      this.apy || 0,
      maxLeverage,
      maxLeverage - LEVERAGE_DECIMALS,
      minApy
    );
  }

  overallAPY(
    apy: number,
    leverage: number,
    depositCollateral: string,
    borrowAPY: number
  ) {
    const farmLev = this.farmLev(leverage, depositCollateral);

    return roi(apy, farmLev, leverage - LEVERAGE_DECIMALS, borrowAPY);
  }

  // eslint-disable-next-line class-methods-use-this
  liquidationPrice(
    borrowed: TokenDescription,
    collateral: TokenDescription,
    lp: TokenDescription,
    ltCollateral: BigNumber
  ) {
    const borrowedMoney = calcTotalPrice(
      borrowed.price,
      borrowed.amount,
      borrowed.decimals
    );
    const collateralMoney = calcTotalPrice(
      collateral.price,
      collateral.amount,
      collateral.decimals
    )
      .mul(ltCollateral)
      .div(PERCENTAGE_FACTOR);
    const lpMoney = calcTotalPrice(lp.price, lp.amount, lp.decimals);

    if (lpMoney.gt(0)) {
      const lqPrice = borrowedMoney.sub(collateralMoney).mul(WAD).div(lpMoney);

      return lqPrice.gte(0) ? lqPrice : BigNumber.from(0);
    }

    return BigNumber.from(0);
  }

  protected farmLev(leverage: number, depositCollateral: string) {
    return this.inBaseAssets(depositCollateral) ||
      this.inLeveragableAssets(depositCollateral)
      ? leverage
      : leverage - LEVERAGE_DECIMALS;
  }

  protected inBaseAssets(depositCollateral: string) {
    return this.baseAssets.some(
      c => c.toLowerCase() === depositCollateral.toLowerCase()
    );
  }

  protected inLeveragableAssets(depositCollateral: string) {
    return this.leveragableCollateral.some(
      c => c.toLowerCase() === depositCollateral.toLowerCase()
    );
  }
}

function roi(apy: number, farmLev: number, debtLev: number, borrowAPY: number) {
  return (apy * farmLev - borrowAPY * debtLev) / LEVERAGE_DECIMALS;
}

function minBorrowApy(poolApy: PoolList) {
  const apys = Object.values(poolApy).sort(
    (a, b) => a.borrowRate - b.borrowRate
  );

  return apys.length > 0 ? apys[0].borrowRate : 0;
}
