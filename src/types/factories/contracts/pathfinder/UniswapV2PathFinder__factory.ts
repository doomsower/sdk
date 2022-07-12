/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapV2PathFinder,
  UniswapV2PathFinderInterface,
} from "../../../contracts/pathfinder/UniswapV2PathFinder";

const _abi = [
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
    stateMutability: "view",
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610cd98061007e6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063715018a61161005b578063715018a6146100d65780638da5cb5b146100de578063d7aa2e3514610106578063f2fde38b1461013757600080fd5b80630ab1a5741461008257806345330666146100ab57806354fd4d50146100c0575b600080fd5b610095610090366004610805565b61014a565b6040516100a29190610860565b60405180910390f35b6100be6100b9366004610932565b6104d4565b005b6100c8600281565b6040519081526020016100a2565b6100be6105b1565b60005460405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100a2565b6100c8610114366004610983565b600160209081526000938452604080852082529284528284209052825290205481565b6100be6101453660046109ce565b61063e565b6101876040805160c08101909152600060808201908152606060a08301528190815260200160008152602001600015158152602001600081525090565b60408051600280825260608201835260009260208301908036833701905050905085816000815181106101bc576101bc610a21565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050848160018151811061020a5761020a610a21565b73ffffffffffffffffffffffffffffffffffffffff92831660209182029290920101526040517fd06ca61f0000000000000000000000000000000000000000000000000000000081529088169063d06ca61f9061026d9087908590600401610aa1565b600060405180830381865afa9250505080156102c957506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526102c69190810190610ac2565b60015b6102d2576104ca565b806001815181106102e5576102e5610a21565b6020908102919091018101519084015260016040840152600061030a61271087610bcd565b8585602001516b033b2e3c9fd0803ce80000006103279190610bcd565b6103319190610bcd565b61033b9190610c0a565b6040805180820190915273ffffffffffffffffffffffffffffffffffffffff8b168152909150602081017fbdbeaa3100000000000000000000000000000000000000000000000000000000838661039442610e10610c45565b6040516024016103a693929190610c5d565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050508152508460000181905250600160008a73ffffffffffffffffffffffffffffffffffffffff1663bd90df706040518163ffffffff1660e01b8152600401602060405180830381865afa15801561045d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104819190610c86565b73ffffffffffffffffffffffffffffffffffffffff9081168252602080830193909352604091820160009081208c831682528452828120918b1681529252902054606085015250505b5095945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461055a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff93841660009081526001602090815260408083209587168084528683528184209590971683529381528382208390559384528281209481529390925290912055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610632576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610551565b61063c600061076e565b565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610551565b73ffffffffffffffffffffffffffffffffffffffff8116610762576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610551565b61076b8161076e565b50565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b73ffffffffffffffffffffffffffffffffffffffff8116811461076b57600080fd5b600080600080600060a0868803121561081d57600080fd5b8535610828816107e3565b94506020860135610838816107e3565b93506040860135610848816107e3565b94979396509394606081013594506080013592915050565b60006020808352835160808285015273ffffffffffffffffffffffffffffffffffffffff81511660a0850152818101519050604060c085015280518060e086015260005b818110156108c157828101840151868201610100015283016108a4565b818111156108d457600061010083880101525b50828601516040860152604086015192506108f3606086018415159052565b606095909501516080850152505050601f919091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016016101000190565b6000806000806080858703121561094857600080fd5b8435610953816107e3565b93506020850135610963816107e3565b92506040850135610973816107e3565b9396929550929360600135925050565b60008060006060848603121561099857600080fd5b83356109a3816107e3565b925060208401356109b3816107e3565b915060408401356109c3816107e3565b809150509250925092565b6000602082840312156109e057600080fd5b81356109eb816107e3565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081518084526020808501945080840160005b83811015610a9657815173ffffffffffffffffffffffffffffffffffffffff1687529582019590820190600101610a64565b509495945050505050565b828152604060208201526000610aba6040830184610a50565b949350505050565b60006020808385031215610ad557600080fd5b825167ffffffffffffffff80821115610aed57600080fd5b818501915085601f830112610b0157600080fd5b815181811115610b1357610b136109f2565b8060051b6040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0603f83011681018181108582111715610b5657610b566109f2565b604052918252848201925083810185019188831115610b7457600080fd5b938501935b82851015610b9257845184529385019392850192610b79565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610c0557610c05610b9e565b500290565b600082610c40577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60008219821115610c5857610c58610b9e565b500190565b838152606060208201526000610c766060830185610a50565b9050826040830152949350505050565b600060208284031215610c9857600080fd5b81516109eb816107e356fea2646970667358221220a75472b7f33eb41ad898fa038a4fb04ed32a092f2a4df840aeeb4f9b82de4a7c64736f6c634300080a0033";

type UniswapV2PathFinderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV2PathFinderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV2PathFinder__factory extends ContractFactory {
  constructor(...args: UniswapV2PathFinderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UniswapV2PathFinder> {
    return super.deploy(overrides || {}) as Promise<UniswapV2PathFinder>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniswapV2PathFinder {
    return super.attach(address) as UniswapV2PathFinder;
  }
  override connect(signer: Signer): UniswapV2PathFinder__factory {
    return super.connect(signer) as UniswapV2PathFinder__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV2PathFinderInterface {
    return new utils.Interface(_abi) as UniswapV2PathFinderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2PathFinder {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2PathFinder;
  }
}
