/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CreditManagerMockForPoolTest,
  CreditManagerMockForPoolTestInterface,
} from "../CreditManagerMockForPoolTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_poolService",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "borrowedAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "creditAccount",
        type: "address",
      },
    ],
    name: "lendCreditAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "poolService",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "borrowedAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "profit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "loss",
        type: "uint256",
      },
    ],
    name: "repayCreditAccount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "underlyingToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103aa3803806103aa8339818101604052602081101561003357600080fd5b8101908080519060200190929190505050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610316806100946000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632495a59914610051578063570a7af214610085578063bf28068b146100b9578063ca9505e414610107575b600080fd5b610059610149565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61008d61016f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610105600480360360408110156100cf57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610193565b005b6101476004803603606081101561011d57600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050610240565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bf28068b83836040518363ffffffff1660e01b8152600401808381526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ca9505e48484846040518463ffffffff1660e01b8152600401808481526020018381526020018281526020019350505050600060405180830381600087803b1580156102c357600080fd5b505af11580156102d7573d6000803e3d6000fd5b5050505050505056fea2646970667358221220bdb49d5074fe04dfb10a86838abbd8eaaf7a5d9a0357f9736848c2cb0107497464736f6c63430007060033";

export class CreditManagerMockForPoolTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _poolService: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CreditManagerMockForPoolTest> {
    return super.deploy(
      _poolService,
      overrides || {}
    ) as Promise<CreditManagerMockForPoolTest>;
  }
  getDeployTransaction(
    _poolService: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_poolService, overrides || {});
  }
  attach(address: string): CreditManagerMockForPoolTest {
    return super.attach(address) as CreditManagerMockForPoolTest;
  }
  connect(signer: Signer): CreditManagerMockForPoolTest__factory {
    return super.connect(signer) as CreditManagerMockForPoolTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CreditManagerMockForPoolTestInterface {
    return new utils.Interface(_abi) as CreditManagerMockForPoolTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CreditManagerMockForPoolTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CreditManagerMockForPoolTest;
  }
}
