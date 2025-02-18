import {
  keyToLowercase,
  objectEntries,
  swapKeyValue,
  filterEmptyKeys
} from "../utils/mappers";
import { NetworkType } from "../core/constants";
import { NormalToken, NormalTokenData, normalTokens } from "./normal";
import {
  CurveLPToken,
  CurveLPTokenData,
  curveTokens,
  MetaCurveLPTokenData
} from "./curveLP";
import {
  YearnLPToken,
  yearnTokens,
  YearnVaultOfCurveLPTokenData,
  YearnVaultOfMetaCurveLPTokenData,
  YearnVaultTokenData
} from "./yearn";
import {
  ConvexLPToken,
  ConvexLPTokenData,
  ConvexPhantomTokenData,
  ConvexStakedPhantomToken,
  convexTokens
} from "./convex";
import {
  DieselTokenData,
  DieselTokenTypes,
  GearboxToken,
  GearboxTokenData,
  gearTokens
} from "./gear";

export type LPTokens =
  | YearnLPToken
  | CurveLPToken
  | ConvexLPToken
  | ConvexStakedPhantomToken;

export type SupportedToken =
  | NormalToken
  | LPTokens
  | DieselTokenTypes
  | GearboxToken;

export interface TokenBase {
  name: string;
  symbol: string;
  decimals: number;
}

export type LPTokenDataI =
  | CurveLPTokenData
  | MetaCurveLPTokenData
  | YearnVaultTokenData
  | YearnVaultOfCurveLPTokenData
  | YearnVaultOfMetaCurveLPTokenData
  | ConvexLPTokenData
  | ConvexPhantomTokenData;

export type TokenDataI =
  | NormalTokenData
  | LPTokenDataI
  | DieselTokenData
  | GearboxTokenData;

export const lpTokens: Record<LPTokens, LPTokenDataI> = {
  ...curveTokens,
  ...convexTokens,
  ...yearnTokens
};

export const supportedTokens: Record<SupportedToken, TokenDataI> = {
  ...normalTokens,
  ...curveTokens,
  ...convexTokens,
  ...yearnTokens,
  ...gearTokens
};

export const tokenDataByNetwork: Record<
  NetworkType,
  Record<SupportedToken, string>
> = {
  //
  // MAINNET NETWORK
  Mainnet: {
    "1INCH": "0x111111111117dc0aa78b770fa6a738034120c302",
    AAVE: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    COMP: "0xc00e94cb662c3520282e6f5717214004a7f26888",
    CRV: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    DPI: "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b",
    FEI: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
    LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    SNX: "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    SUSHI: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    UNI: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    USDT: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    WBTC: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    YFI: "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",

    /// UPDATE
    STETH: "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
    FTM: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
    CVX: "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
    FRAX: "0x853d955acef822db058eb8505911ed77f175b99e",
    FXS: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
    LDO: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
    SPELL: "0x090185f2135308BaD17527004364eBcC2D37e5F6",
    LUSD: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
    sUSD: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    GUSD: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
    LUNA: "0xd2877702675e6ceb975b4a1dff9fb7baf4c91ea9",
    LQTY: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",

    // CURVE LP TOKENS
    "3Crv": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
    steCRV: "0x06325440d014e39736583c165c2963ba99faf14e",
    FRAX3CRV: "0xd632f22692fac7611d2aa1c0d552930d43caed3b",
    LUSD3CRV: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
    crvPlain3andSUSD: "0xC25a3A3b969415c80451098fa907EC722572917F",
    gusd3CRV: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",

    // CONVEX LP TOKENS
    cvx3Crv: "0x30D9410ED1D5DA1F6C8391af5338C93ab8d4035C",
    cvxsteCRV: "0x9518c9063eB0262D791f38d8d6Eb0aca33c63ed0",
    cvxFRAX3CRV: "0xbE0F6478E0E4894CFb14f32855603A083A57c7dA",
    cvxLUSD3CRV: "0xFB9B2f06FDb404Fd3E2278E9A9edc8f252F273d0",
    cvxcrvPlain3andSUSD: "0x11D200ef1409cecA8D6d23e6496550f707772F11",
    cvxgusd3CRV: "0x15c2471ef46Fa721990730cfa526BcFb45574576",

    // CONVEX PHANTOM TOKEN ADDRESSES
    stkcvx3Crv: "0x2eD0f32d7C8b0f7EA7E40277C62Fb9C5DE092003",
    stkcvxsteCRV: "0x2210aa245Bf766eE99325c607807A08e636B5173",
    stkcvxFRAX3CRV: "0x2AF29502110080081FDF726dfBf61ABE3bA9Ef3C",
    stkcvxLUSD3CRV: "",
    stkcvxcrvPlain3andSUSD: "0xd622AD90386BBf0310668175f76eD958030E3635",
    stkcvxgusd3CRV: "0x074f66aE6e28f7e01DFe598ECbfbd3034cf3De47",

    // YEARN TOKENS
    yvDAI: "0xdA816459F1AB5631232FE5e97a05BBBb94970c95",
    yvUSDC: "0xa354f35829ae975e850e23e9615b11da1b3dc4de",
    yvWETH: "0xa258C4606Ca8206D8aA700cE2143D7db854D168c",
    yvWBTC: "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E",
    yvCurve_stETH: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325",
    yvCurve_FRAX: "0xB4AdA607B9d6b2c9Ee07A275e9616B84AC560139",

    // GEARBOX
    dDAI: "0x6CFaF95457d7688022FC53e7AbE052ef8DFBbdBA",
    dUSDC: "0xc411dB5f5Eb3f7d552F9B8454B2D74097ccdE6E3",
    dWBTC: "0xe753260F1955e8678DCeA8887759e07aa57E8c54",
    dWETH: "0xF21fc650C1B34eb0FDE786D52d23dA99Db3D6278",

    GEAR: "0xBa3335588D9403515223F109EdC4eB7269a9Ab5D"
  },

  ///
  ///
  /// KOVAN NETWORK
  ///
  ///
  Kovan: {
    "1INCH": "0x6601ce61E41cd6760E763555A806AB5578EB2a9E",
    AAVE: "0xed2eAe2533bc70dB9030174a7F085e0853289726",
    COMP: "0x90F7A59Fa3993bBc6bA4C6c4ef515958a5bF8a24",
    CRV: "0x0ccfD2Aef95775f080BF6C0E8318D37f720c1999",
    DAI: "0x9DC7B33C3B63fc00ed5472fBD7813eDDa6a64752",
    DPI: "0xF4f06DE71eFc17799297573341C42f3B4C63D589",
    FEI: "0xe1eC2f7B12d4be4075c3B53DB2e48C018B404179",
    LINK: "0x6C994935826574E870549F09efF43BA8089A3D25",
    SNX: "0xB48891df9267EF65AABd32F497F6F2d1eB22A186",
    SUSHI: "0x635E9E7Aa9fA72C56B9A1286026A93E1b8c4090a",
    UNI: "0x1B24F1F2CEFf945FE9EE017F929a6D31394f94b1",
    USDT: "0x4a3964F69284eD6ab6975afc472fB0a072243CD5",
    USDC: "0x31EeB2d0F9B6fD8642914aB10F4dD473677D80df",
    WBTC: "0xE36bC5d8b689AD6d80e78c3e736670e80d4b329D",
    WETH: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
    YFI: "0x1df5DF6d0196bE6AE6A2EED915a0Cc6cAEA84C2D",

    /// UPDATE
    STETH: "0x77c742b2e83367Ece64FC5f4440a796D08d82422",
    FTM: "0x5DE02cFf707eBC43f58DFB022518c18C66147b1E",
    CVX: "0xd3276d0549996fB6598df321dd6C4175f865A966",
    FRAX: "0x301b0B83E5F5deC5233075368B8b459CEedc0948",
    FXS: "0x25eb8A9B30981d1F04C306829FEBc855FA86695A",
    LDO: "0x99bB41898474aDb38e098fFdB0cD17d2619cA3ef",
    SPELL: "0x20f979FD40caF4aaa4e7A179E1a5C422a897ca6c",
    LUSD: "0x397acA500A56706dd4aAC0592Ed5B8CCAeCfc2d5",
    sUSD: "0x32aeb9B672a81C43391c90a95a4D6c9A9D4459B6",
    GUSD: "0x3cee6494bf400F8C24871dBD331B9436a9CfaBbb",
    LUNA: "0x9dc1D71fAeE18bF77C6166aBC8b218D3336919F1",
    LQTY: "0xC948BB323d753B37eA8195DeAFE904138Df11fbC",

    // YEARN TOKENS
    yvDAI: "0x236Fc952861DD9eB2B5768B858F66a925aD28d65",
    yvUSDC: "0x5C170A7D0Bd8ec9B8c741Aa9Db330D7DD4685b27",
    yvWETH: "0x09Aded0A8e1dfEDA8c086085e525c07ae635Bf58",
    yvWBTC: "0x4FCbB75A117A886d2b09b167A34F6A4477aAD767",
    yvCurve_stETH: "0x215E6a870D06E7aC0DDf2661C443bf5Ab14CAF18",
    yvCurve_FRAX: "0xFa410646B9009866fC9bd39430d052877122FD23",

    // CURVE LP TOKENS
    "3Crv": "0x5640391D2423e9349061DC045B5126A78ddE8CAc",
    steCRV: "0x90F4D460B53F8650413539caB91c397e7b9fbc39",
    crvPlain3andSUSD: "0x77082DC151f2D579f81BcC9cEF3e46DfF42B3474",
    gusd3CRV: "0x289551b36f13A5AB838f912a83a32Deeda073a7b",
    FRAX3CRV: "0xdBE4223fF10C4e6AdA4287249044Ead24fb7b135",
    LUSD3CRV: "0x8835B68cC43bf249E22CB98FF32d025375f2513F",

    // CONVEX LP TOKENS
    cvx3Crv: "0xaC073A1756050c3170559Ae8997F251B2Db4D1A3",
    cvxsteCRV: "0xb22c2015327cfbeD480eF45B6382d4bC963a4595",
    cvxcrvPlain3andSUSD: "0xBBeAdEA3C648cF4026d0422EAF2463050202700b",
    cvxFRAX3CRV: "0xBC523005975D86de9226785DD83e4f8d2A87fA73",
    cvxLUSD3CRV: "0xF90d9a96985a80e6c2cA9952cd2C6Db5B720408F",
    cvxgusd3CRV: "0xa3aDFDf18d166e26bF1Bc0ee63D26d0d1064b056",

    // CONVEX PHANTOM TOKEN ADDRESSES
    stkcvx3Crv: "0xf4FC4Aa052346fEa87f1e864f10de0f7383e9502",
    stkcvxFRAX3CRV: "0xd726f9684245065B120E1ac18de389f6b05351Ba",
    stkcvxLUSD3CRV: "0x5c355c46413B45Cc58aB61AcaF5BB72E7c2d1465",
    stkcvxgusd3CRV: "0x9A74e8106f6c28b21b1B6a0F985cf1227BE05F04",
    stkcvxsteCRV: "0xd8bAbB7EfBF7F931a69B209f71b27421F8b18516",
    stkcvxcrvPlain3andSUSD: "0x6b45Cab756B41a7204973b71362ef5F73E67F6DA",

    // GEARBOX
    dDAI: "0x077a3Ce0D572b72436F6644793Fc7721353aF1f4",
    dUSDC: "0x8147e00456c8A3128182730bFFdFd9D1E6bbC048",
    dWBTC: "0x34D9B3c13B25632879B2DaabBde702F612902238",
    dWETH: "0x19e4F905749D3b487CA4927b54e55b64625a1143",

    GEAR: "0xe01c5d0297c56e992dab3886057a1441485ff7c7"
  }
};

export const tokenSymbolByAddress = objectEntries(tokenDataByNetwork).reduce<
  Record<string, SupportedToken>
>(
  (acc, [, tokens]) => ({
    ...acc,
    ...filterEmptyKeys(keyToLowercase(swapKeyValue(tokens)))
  }),
  {}
);

export const isSupportedToken = (t: unknown): t is SupportedToken =>
  typeof t === "string" && !!supportedTokens[t as SupportedToken];

export const isLPToken = (t: unknown): t is LPTokens =>
  typeof t === "string" && !!supportedTokens[t as LPTokens];
