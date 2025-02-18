"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISwapper__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "enum SwapOperation",
                        name: "swapOperation",
                        type: "uint8",
                    },
                    {
                        internalType: "address",
                        name: "creditAccount",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "tokenIn",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address",
                    },
                    {
                        internalType: "address[]",
                        name: "connectors",
                        type: "address[]",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "slippage",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "externalSlippage",
                        type: "bool",
                    },
                ],
                internalType: "struct SwapTask",
                name: "swapTask",
                type: "tuple",
            },
            {
                internalType: "address",
                name: "adapter",
                type: "address",
            },
        ],
        name: "getBestConnectorSwap",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "target",
                                type: "address",
                            },
                            {
                                internalType: "bytes",
                                name: "callData",
                                type: "bytes",
                            },
                        ],
                        internalType: "struct MultiCall",
                        name: "multiCall",
                        type: "tuple",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "found",
                        type: "bool",
                    },
                    {
                        internalType: "uint256",
                        name: "gasUsage",
                        type: "uint256",
                    },
                ],
                internalType: "struct SwapQuote",
                name: "quote",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                components: [
                    {
                        internalType: "enum SwapOperation",
                        name: "swapOperation",
                        type: "uint8",
                    },
                    {
                        internalType: "address",
                        name: "creditAccount",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "tokenIn",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "tokenOut",
                        type: "address",
                    },
                    {
                        internalType: "address[]",
                        name: "connectors",
                        type: "address[]",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "uint256",
                        name: "slippage",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "externalSlippage",
                        type: "bool",
                    },
                ],
                internalType: "struct SwapTask",
                name: "swapTask",
                type: "tuple",
            },
            {
                internalType: "address",
                name: "adapter",
                type: "address",
            },
        ],
        name: "getBestDirectPairSwap",
        outputs: [
            {
                components: [
                    {
                        components: [
                            {
                                internalType: "address",
                                name: "target",
                                type: "address",
                            },
                            {
                                internalType: "bytes",
                                name: "callData",
                                type: "bytes",
                            },
                        ],
                        internalType: "struct MultiCall",
                        name: "multiCall",
                        type: "tuple",
                    },
                    {
                        internalType: "uint256",
                        name: "amount",
                        type: "uint256",
                    },
                    {
                        internalType: "bool",
                        name: "found",
                        type: "bool",
                    },
                    {
                        internalType: "uint256",
                        name: "gasUsage",
                        type: "uint256",
                    },
                ],
                internalType: "struct SwapQuote",
                name: "quote",
                type: "tuple",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var ISwapper__factory = /** @class */ (function () {
    function ISwapper__factory() {
    }
    ISwapper__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    ISwapper__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    ISwapper__factory.abi = _abi;
    return ISwapper__factory;
}());
exports.ISwapper__factory = ISwapper__factory;
