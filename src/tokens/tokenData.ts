import { BigNumber } from "ethers";
import { TokenDataPayload } from "../payload/token";
import { STATIC_TOKEN } from "../config";
import { NetworkType } from "../core/constants";
import { SupportedToken, tokenDataByNetwork } from "./token";

type SymbolReplacements = Record<string, string>;
const defaultSymbolReplacement: SymbolReplacements = {
  dWETH: "dETH",
  WETH: "ETH"
};

export class TokenData {
  public readonly id: string;

  public readonly symbol: string;

  public readonly address: string;

  public readonly decimals: number;

  public readonly icon?: string;

  constructor(
    payload: TokenDataPayload,
    symbolReplacements: SymbolReplacements = defaultSymbolReplacement
  ) {
    this.id = payload.addr.toLowerCase();
    this.address = payload.addr.toLowerCase();
    this.symbol = symbolReplacements[payload.symbol] || payload.symbol;
    this.decimals = payload.decimals;
    this.icon = `${STATIC_TOKEN}${payload.symbol?.toLowerCase()}.svg`;
  }

  compareBySymbol(b: TokenData): number {
    return this.symbol > b.symbol ? 1 : -1;
  }
}

export interface TokenBalance {
  id: string;
  balance: BigNumber;
}

export interface TokenAllowance {
  id: string;
  allowance: BigNumber;
}

export const WETHToken: Record<NetworkType, string> = {
  Mainnet: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
  Kovan: "0xd0a1e359811322d97991e03f863a0c30c2cf029c"
};

export const connectors: Record<NetworkType, Array<SupportedToken>> = {
  Mainnet: [
    "WETH",
    "1INCH",
    "DAI",
    "USDC",
    // "USDT",
    "WBTC"
    // "stETH",
    // "PAX",
    // "TUSD",
    // "BNT",
    // "BAL",
    // "sUSD",
  ],
  Kovan: ["WETH", "DAI", "USDC", "WBTC"]
};

export function getConnectors(networkType: NetworkType) {
  return connectors[networkType].map(e => {
    const result =
      e === "WETH"
        ? WETHToken[networkType]
        : tokenDataByNetwork[networkType][e];

    if (!result) {
      throw new Error(`connector token ${e} not found`);
    }
    return result;
  });
}
