import { LPTokens, SupportedToken } from "../tokens/token";
export declare type TokensWithAPY = LPTokens | Extract<SupportedToken, "LDO">;
export * from "./convexAPY";
export * from "./lidoAPY";
