import { BigNumber } from "ethers";
import type { LPWithdrawPathFinder, Path } from "./path";
import { CurveLPToken, curveTokens } from "../tokens/curveLP";
import {
  contractParams,
  contractsByAddress,
  CurveParams,
  CurvePoolContract
} from "../contracts/contracts";
import { TradeType } from "./tradeTypes";
import { CallData, MultiCallContract } from "../utils/multicall";
import { ICurvePool__factory } from "../types";
import { ICurvePoolInterface } from "../types/contracts/integrations/curve/ICurvePool";

export class CurvePathFinder implements LPWithdrawPathFinder {
  lpToken: CurveLPToken;

  contract: CurvePoolContract;

  constructor(token: CurveLPToken) {
    this.lpToken = token;
    const curvePools = curveTokens[this.lpToken].lpActions.filter(
      a => a.type === TradeType.CurveWithdrawLP
    );

    if (curvePools.length !== 1) throw new Error("Cant find Withdrawer");

    this.contract = curvePools[0].contract as CurvePoolContract;

    const { wrapper } = contractParams[curvePools[0].contract] as CurveParams;

    if (wrapper) {
      this.contract = wrapper;
    }
  }

  async findWithdrawPaths(p: Path): Promise<Array<Path>> {
    const coins = (contractParams[this.contract] as CurveParams).tokens;
    const nCoins = coins.length;

    const lpBalance = p.popBalance(this.lpToken);

    const multiCallContract = new MultiCallContract(
      contractsByAddress[this.contract],
      ICurvePool__factory.createInterface(),
      p.provider
    );

    const data: Array<CallData<ICurvePoolInterface>> = [];

    for (let i = 0; i < nCoins; i += 1) {
      data.push({
        method: "calc_withdraw_one_coin(uint256,int128)",
        params: [lpBalance, i]
      });
    }

    const balances = await multiCallContract.call<Array<BigNumber>>(data);

    console.debug(balances);

    const paths: Array<Path> = [];
    for (let i = 0; i < nCoins; i += 1) {
      const newPath = p.clone();
      // newPath.balances[coins[i]] = newPath.balances[coins[i]].add(balances[i]);
      // newPath.calls.push({
      //     targetContract: contractsByNetwork[p.networkType][this.contract],
      //     callData: ICurveV1Adapter__factory.createInterface().encodeFunctionData("remove_all_liquidity_one_coin", [i])
      // })
      paths.push(newPath);
    }

    return paths;
  }
}
