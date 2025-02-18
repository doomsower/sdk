/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VirtualBalanceWrapper,
  VirtualBalanceWrapperInterface,
} from "../../../../../../contracts/test/mocks/integrations/ConvexExtraRewardPoolMock.sol/VirtualBalanceWrapper";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "Mock_ExtraRewardPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Mock_ExtraStaked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Mock_ExtraWithdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposits",
    outputs: [
      {
        internalType: "contract IDeposit",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610277806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806318160ddd14610046578063323a5e0b1461006157806370a08231146100a6575b600080fd5b61004e6100b9565b6040519081526020015b60405180910390f35b6000546100819073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610058565b61004e6100b43660046101eb565b610150565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610127573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061014b9190610228565b905090565b600080546040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8481166004830152909116906370a0823190602401602060405180830381865afa1580156101c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101e59190610228565b92915050565b6000602082840312156101fd57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461022157600080fd5b9392505050565b60006020828403121561023a57600080fd5b505191905056fea26469706673582212204705deaccf00a2326fe7c3e1cf95a1a4e9c7f4a16b082b600151ea0d707c247664736f6c634300080a0033";

type VirtualBalanceWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VirtualBalanceWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VirtualBalanceWrapper__factory extends ContractFactory {
  constructor(...args: VirtualBalanceWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VirtualBalanceWrapper> {
    return super.deploy(overrides || {}) as Promise<VirtualBalanceWrapper>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VirtualBalanceWrapper {
    return super.attach(address) as VirtualBalanceWrapper;
  }
  override connect(signer: Signer): VirtualBalanceWrapper__factory {
    return super.connect(signer) as VirtualBalanceWrapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VirtualBalanceWrapperInterface {
    return new utils.Interface(_abi) as VirtualBalanceWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VirtualBalanceWrapper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as VirtualBalanceWrapper;
  }
}
