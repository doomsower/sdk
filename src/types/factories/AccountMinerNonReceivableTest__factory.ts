/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AccountMinerNonReceivableTest } from "../AccountMinerNonReceivableTest";

export class AccountMinerNonReceivableTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    miner: string,
    overrides?: Overrides
  ): Promise<AccountMinerNonReceivableTest> {
    return super.deploy(
      miner,
      overrides || {}
    ) as Promise<AccountMinerNonReceivableTest>;
  }
  getDeployTransaction(
    miner: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(miner, overrides || {});
  }
  attach(address: string): AccountMinerNonReceivableTest {
    return super.attach(address) as AccountMinerNonReceivableTest;
  }
  connect(signer: Signer): AccountMinerNonReceivableTest__factory {
    return super.connect(signer) as AccountMinerNonReceivableTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AccountMinerNonReceivableTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AccountMinerNonReceivableTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "miner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "placeBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "takeBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516102d33803806102d38339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505061023f806100946000396000f3fe60806040526004361061002d5760003560e01c8063424613fc14610088578063ecfc7ecc1461009f57610083565b36610083576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252605b8152602001806101af605b913960600191505060405180910390fd5b600080fd5b34801561009457600080fd5b5061009d6100a9565b005b6100a761012b565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663424613fc6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561011157600080fd5b505af1158015610125573d6000803e3d6000fd5b50505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ecfc7ecc346040518263ffffffff1660e01b81526004016000604051808303818588803b15801561019357600080fd5b505af11580156101a7573d6000803e3d6000fd5b505050505056fe4163636f756e744d696e65724e6f6e52656365697661626c65546573743a2049276d20616c776179732072657665727420616e792072656365697665207061796d656e742c206775792c206e6f7468696e6720706572736f6e616ca26469706673582212207b6f220cb0117f63955fa0b33022a1a495687d3b1f5771e67a7f92a4a535675064736f6c63430007060033";
