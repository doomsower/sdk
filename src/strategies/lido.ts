import { BigNumberish } from "ethers";
import { CreditManagerData } from "../core/creditManager";
import { ADDRESS_0X0, NetworkType } from "../core/constants";

import { contractsByNetwork } from "../contracts/contracts";
import { tokenDataByNetwork } from "../tokens/token";
import { LidoV1Adapter__factory } from "../types";

import { MultiCallStruct } from "../types/contracts/interfaces/ICreditFacade.sol/ICreditFacade";
import { UniswapV2Multicaller } from "./uniswapV2";

export class LidoCalls {
  public static submit(amount: BigNumberish) {
    return LidoV1Adapter__factory.createInterface().encodeFunctionData(
      "submit",
      [amount]
    );
  }

  public static submitAll() {
    return LidoV1Adapter__factory.createInterface().encodeFunctionData(
      "submitAll"
    );
  }
}

export class LidoMulticaller {
  private readonly _address: string;

  constructor(address: string) {
    this._address = address;
  }

  static connect(address: string) {
    return new LidoMulticaller(address);
  }

  submit(amount: BigNumberish): MultiCallStruct {
    return {
      target: this._address,
      callData: LidoCalls.submit(amount)
    };
  }

  submitAll(): MultiCallStruct {
    return {
      target: this._address,
      callData: LidoCalls.submitAll()
    };
  }
}

export class LidoStrategies {
  static mintSteth(
    data: CreditManagerData,
    network: NetworkType,
    underlyingAmount: BigNumberish
  ): MultiCallStruct[] {
    const calls: Array<MultiCallStruct> = [];

    // This should be a pathfinder call
    if (!data.isWETH) {
      calls.push(
        UniswapV2Multicaller.connect(
          data.adapters[
            contractsByNetwork[network].UNISWAP_V2_ROUTER.toLowerCase()
          ]
        ).swapExactTokensForTokens(
          underlyingAmount,
          0,
          [data.underlyingToken, tokenDataByNetwork[network].WETH],
          ADDRESS_0X0,
          Math.floor(new Date().getTime() / 1000) + 3600
        )
      );
    }

    calls.push(
      LidoMulticaller.connect(
        data.adapters[
          contractsByNetwork[network].LIDO_STETH_GATEWAY.toLowerCase()
        ]
      ).submitAll()
    );

    return calls;
  }
}
