"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YearnVaultPathFinder = void 0;
var ethers_1 = require("ethers");
var yearn_1 = require("../tokens/yearn");
var token_1 = require("../tokens/token");
var multicall_1 = require("../utils/multicall");
var mappers_1 = require("../utils/mappers");
var types_1 = require("../types");
var YearnVaultPathFinder = /** @class */ (function () {
    function YearnVaultPathFinder(vault) {
        this._vault = vault;
        var currentTokenData = yearn_1.yearnTokens[vault];
        // Yearn Vault only has one lp action
        this.token = currentTokenData.underlying;
    }
    // eslint-disable-next-line class-methods-use-this
    YearnVaultPathFinder.prototype.findWithdrawPaths = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var p, vaultBalances, vaultList, multicallData, prices, i, vault, vb, tokenAddress, adapterAddress, callData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p = Object.assign(Object.create(Object.getPrototypeOf(path)), path);
                        vaultBalances = (0, mappers_1.objectEntries)(yearn_1.yearnTokens).reduce(function (acc, _a) {
                            var yVault = _a[0], tokenData = _a[1];
                            var typedVault = yVault;
                            var currentBalance = p.popBalance(typedVault);
                            if (currentBalance.gt(1)) {
                                acc[typedVault] = {
                                    token: tokenData.underlying,
                                    balance: currentBalance
                                };
                            }
                            return acc;
                        }, {});
                        vaultList = Object.keys(vaultBalances);
                        multicallData = vaultList
                            .map(function (t) { return token_1.tokenDataByNetwork[p.networkType][t]; })
                            .map(function (addr) { return ({
                            address: addr,
                            interface: types_1.IYVault__factory.createInterface(),
                            method: "pricePerShare()"
                        }); });
                        return [4 /*yield*/, (0, multicall_1.multicall)(multicallData, p.provider)];
                    case 1:
                        prices = _a.sent();
                        for (i = 0; i < vaultList.length; i += 1) {
                            vault = vaultList[i];
                            vb = vaultBalances[vault];
                            p.balances[vb.token] = (p.balances[vb.token] || ethers_1.BigNumber.from(0)).add(ethers_1.BigNumber.from((vb === null || vb === void 0 ? void 0 : vb.balance) || 0).mul(prices[i]));
                            tokenAddress = token_1.tokenDataByNetwork[p.networkType][vault];
                            adapterAddress = p.creditManager.adapters[tokenAddress];
                            callData = types_1.IYVault__factory.createInterface().encodeFunctionData("withdraw()");
                            p.calls.push({ target: adapterAddress, callData: callData });
                        }
                        return [2 /*return*/, p.withdrawTokens()];
                }
            });
        });
    };
    return YearnVaultPathFinder;
}());
exports.YearnVaultPathFinder = YearnVaultPathFinder;
