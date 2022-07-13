/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapV3PathFinder,
  UniswapV3PathFinderInterface,
} from "../../../contracts/pathfinder/UniswapV3PathFinder";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "QuoterNotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "UnknownFeeIndex",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "quoter",
        type: "address",
      },
    ],
    name: "addQuoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "gasUsage",
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
    inputs: [
      {
        internalType: "address",
        name: "adapter",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slippageFactor",
        type: "uint256",
      },
    ],
    name: "getBestPairSwap",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "routerToQuoter",
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
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "usage",
        type: "uint256",
      },
    ],
    name: "setGasUsage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
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
  "0x608060405234801561001057600080fd5b5061001a33610081565b73e592427a0aece92de3edee1f18e0157c0586156460005260016020527fbad1c9453febe4a6446e59e386c36af7924acc0d372d29859fea25e7a6eaac1780546001600160a01b03191673b27308f9f90d607463bb33ea1bebb41c27ce5ab61790556100d1565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610cac806100e06000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063715018a611610076578063c67903ea1161005b578063c67903ea1461017d578063d7aa2e35146101de578063f2fde38b1461020f57600080fd5b8063715018a6146101575780638da5cb5b1461015f57600080fd5b80630ab1a574146100a85780632a106726146100d1578063453306661461012c57806354fd4d5014610141575b600080fd5b6100bb6100b636600461095b565b610222565b6040516100c891906109b6565b60405180910390f35b6101076100df366004610a88565b60016020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c8565b61013f61013a366004610aac565b6105c2565b005b610149600281565b6040519081526020016100c8565b61013f61069f565b60005473ffffffffffffffffffffffffffffffffffffffff16610107565b61013f61018b366004610afd565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001691909216179055565b6101496101ec366004610b36565b600260209081526000938452604080852082529284528284209052825290205481565b61013f61021d366004610a88565b61072c565b61025f6040805160c08101909152600060808201908152606060a08301528190815260200160008152602001600015158152602001600081525090565b60008673ffffffffffffffffffffffffffffffffffffffff1663bd90df706040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d09190610b81565b73ffffffffffffffffffffffffffffffffffffffff8082166000908152600160205260408120549293509116905b60038110156105b65760006103128261085c565b6040517ff7729d4300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b811660048301528a8116602483015262ffffff83166044830152606482018a9052600060848301529192509084169063f7729d439060a4016020604051808303816000875af19250505080156103df575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019092526103dc91810190610b9e565b60015b6103e8576105ad565b80158015906103fa5750856020015181115b156105ab576001604087015260208601819052600061041b6127108a610be6565b88610432846b033b2e3c9fd0803ce8000000610be6565b61043c9190610be6565b6104469190610c23565b6040805180820190915273ffffffffffffffffffffffffffffffffffffffff8e168152909150602081017fc7fbf4de000000000000000000000000000000000000000000000000000000008d8d876104a042610e10610c5e565b60405173ffffffffffffffffffffffffffffffffffffffff948516602482015293909216604484015262ffffff166064830152608482015260a48101859052600060c482015260e401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090951694909417909352925291895273ffffffffffffffffffffffffffffffffffffffff8089166000908152600284528281208f831682528452828120918e16815292529020546060880152505b505b506001016102fe565b50505095945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610648576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff93841660009081526002602090815260408083209587168084528683528184209590971683529381528382208390559384528281209481529390925290912055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610720576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161063f565b61072a60006108c4565b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161063f565b73ffffffffffffffffffffffffffffffffffffffff8116610850576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161063f565b610859816108c4565b50565b600060038210610898576040517f50c1fe4a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81156108b657816001146108ae576113886108ba565b610bb86108ba565b6103e85b61ffff1692915050565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b73ffffffffffffffffffffffffffffffffffffffff8116811461085957600080fd5b600080600080600060a0868803121561097357600080fd5b853561097e81610939565b9450602086013561098e81610939565b9350604086013561099e81610939565b94979396509394606081013594506080013592915050565b60006020808352835160808285015273ffffffffffffffffffffffffffffffffffffffff81511660a0850152818101519050604060c085015280518060e086015260005b81811015610a1757828101840151868201610100015283016109fa565b81811115610a2a57600061010083880101525b5082860151604086015260408601519250610a49606086018415159052565b606095909501516080850152505050601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016016101000190565b600060208284031215610a9a57600080fd5b8135610aa581610939565b9392505050565b60008060008060808587031215610ac257600080fd5b8435610acd81610939565b93506020850135610add81610939565b92506040850135610aed81610939565b9396929550929360600135925050565b60008060408385031215610b1057600080fd5b8235610b1b81610939565b91506020830135610b2b81610939565b809150509250929050565b600080600060608486031215610b4b57600080fd5b8335610b5681610939565b92506020840135610b6681610939565b91506040840135610b7681610939565b809150509250925092565b600060208284031215610b9357600080fd5b8151610aa581610939565b600060208284031215610bb057600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610c1e57610c1e610bb7565b500290565b600082610c59577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60008219821115610c7157610c71610bb7565b50019056fea26469706673582212203dace31cd6f4d68b6e5c6a2215cdad91a1be6689a4d9a71ea3a30f954ee1aef764736f6c634300080a0033";

type UniswapV3PathFinderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3PathFinderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3PathFinder__factory extends ContractFactory {
  constructor(...args: UniswapV3PathFinderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV3PathFinder> {
    return super.deploy(overrides || {}) as Promise<UniswapV3PathFinder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniswapV3PathFinder {
    return super.attach(address) as UniswapV3PathFinder;
  }
  override connect(signer: Signer): UniswapV3PathFinder__factory {
    return super.connect(signer) as UniswapV3PathFinder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3PathFinderInterface {
    return new utils.Interface(_abi) as UniswapV3PathFinderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3PathFinder {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3PathFinder;
  }
}
