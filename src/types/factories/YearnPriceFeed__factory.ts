/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  YearnPriceFeed,
  YearnPriceFeedInterface,
} from "../YearnPriceFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressProvider",
        type: "address",
      },
      {
        internalType: "address",
        name: "_yVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_priceFeed",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_lowerBound",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_upperBound",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "lowerBound",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "upperBound",
        type: "uint256",
      },
    ],
    name: "NewLimiterParams",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimalsDivider",
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
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80",
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lowerBound",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "priceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
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
        name: "_lowerBound",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_upperBound",
        type: "uint256",
      },
    ],
    name: "setLimiter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timestampLimiter",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "upperBound",
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
  {
    inputs: [],
    name: "yVault",
    outputs: [
      {
        internalType: "contract IYVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001a1638038062001a16833981810160405260a08110156200003757600080fd5b8101908080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291905050508460008060006101000a81548160ff021916908315150217905550600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156040518060400160405280600281526020017f5a30000000000000000000000000000000000000000000000000000000000000815250906200019c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200016057808201518184015260208101905062000143565b50505050905090810190601f1680156200018e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508073ffffffffffffffffffffffffffffffffffffffff1663087376956040518163ffffffff1660e01b815260040160206040518083038186803b158015620001e457600080fd5b505afa158015620001f9573d6000803e3d6000fd5b505050506040513d60208110156200021057600080fd5b8101908080519060200190929190505050600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614158015620002cd5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b6040518060400160405280600281526020017f5a3000000000000000000000000000000000000000000000000000000000000081525090620003ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200037157808201518184015260208101905062000354565b50505050905090810190601f1680156200039f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5083600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156200049957600080fd5b505afa158015620004ae573d6000803e3d6000fd5b505050506040513d6020811015620004c557600080fd5b810190808051906020019092919050505060ff16600a0a600381905550620004f48282620004ff60201b60201c565b505050505062000645565b6000821180156200050f57508181115b6040518060400160405280600381526020017f595032000000000000000000000000000000000000000000000000000000000081525090620005ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015620005b357808201518184015260208101905062000596565b50505050905090810190601f168015620005e15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5081600481905550806005819055507f82e7ee47180a631312683eeb2a85ad264c9af490d54de5a75bbdb95b968c6de2600454600554604051808381526020018281526020019250505060405180910390a15050565b6113c180620006556000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80637284e41611610097578063a384d6ff11610066578063a384d6ff14610330578063a834559e1461034e578063b09ad8a01461036c578063feaf968c1461038a576100f5565b80637284e416146101ed578063741bef1a146102705780638456cb59146102a45780639a6fc8f5146102ae576100f5565b806333303f8e116100d357806333303f8e146101715780633f4ba83a146101a557806354fd4d50146101af5780635c975abb146101cd576100f5565b80630bdea781146100fa5780632c51298c14610132578063313ce56714610150575b600080fd5b6101306004803603604081101561011057600080fd5b8101908080359060200190929190803590602001909291905050506103dc565b005b61013a61058b565b6040518082815260200191505060405180910390f35b610158610591565b604051808260ff16815260200191505060405180910390f35b61017961063b565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101ad610661565b005b6101b761080c565b6040518082815260200191505060405180910390f35b6101d56108b6565b60405180821515815260200191505060405180910390f35b6101f56108cc565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561023557808201518184015260208101905061021a565b50505050905090810190601f1680156102625780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610278610a34565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102ac610a5a565b005b6102e6600480360360208110156102c457600080fd5b81019080803569ffffffffffffffffffff169060200190929190505050610c05565b604051808669ffffffffffffffffffff1681526020018581526020018481526020018381526020018269ffffffffffffffffffff1681526020019550505050505060405180910390f35b610338610c7b565b6040518082815260200191505060405180910390f35b610356610c81565b6040518082815260200191505060405180910390f35b610374610c87565b6040518082815260200191505060405180910390f35b610392610c8d565b604051808669ffffffffffffffffffff1681526020018581526020018481526020018381526020018269ffffffffffffffffffff1681526020019550505050505060405180910390f35b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635f259aba336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561046557600080fd5b505afa158015610479573d6000803e3d6000fd5b505050506040513d602081101561048f57600080fd5b81019080805190602001909291905050506040518060400160405280600481526020017f41434c32000000000000000000000000000000000000000000000000000000008152509061057c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610541578082015181840152602081019050610526565b50505050905090810190601f16801561056e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506105878282610f3d565b5050565b60065481565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156105fb57600080fd5b505afa15801561060f573d6000803e3d6000fd5b505050506040513d602081101561062557600080fd5b8101908080519060200190929190505050905090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d4eb5db0336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156106ea57600080fd5b505afa1580156106fe573d6000803e3d6000fd5b505050506040513d602081101561071457600080fd5b81019080805190602001909291905050506040518060400160405280600481526020017f41434c310000000000000000000000000000000000000000000000000000000081525090610801576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156107c65780820151818401526020810190506107ab565b50505050905090810190601f1680156107f35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5061080a61107e565b565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166354fd4d506040518163ffffffff1660e01b815260040160206040518083038186803b15801561087657600080fd5b505afa15801561088a573d6000803e3d6000fd5b505050506040513d60208110156108a057600080fd5b8101908080519060200190929190505050905090565b60008060009054906101000a900460ff16905090565b6060600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16637284e4166040518163ffffffff1660e01b815260040160006040518083038186803b15801561093657600080fd5b505afa15801561094a573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561097457600080fd5b810190808051604051939291908464010000000082111561099457600080fd5b838201915060208201858111156109aa57600080fd5b82518660018202830111640100000000821117156109c757600080fd5b8083526020830192505050908051906020019080838360005b838110156109fb5780820151818401526020810190506109e0565b50505050905090810190601f168015610a285780820380516001836020036101000a031916815260200191505b50604052505050905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a41ec64336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610ae357600080fd5b505afa158015610af7573d6000803e3d6000fd5b505050506040513d6020811015610b0d57600080fd5b81019080805190602001909291905050506040518060400160405280600481526020017f41434c310000000000000000000000000000000000000000000000000000000081525090610bfa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610bbf578082015181840152602081019050610ba4565b50505050905090810190601f168015610bec5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50610c03611168565b565b60008060008060006040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f46756e6374696f6e206973206e6f7420737570706f727465640000000000000081525060200191505060405180910390fd5b60045481565b60035481565b60055481565b6000806000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b158015610cfd57600080fd5b505afa158015610d11573d6000803e3d6000fd5b505050506040513d60a0811015610d2757600080fd5b81019080805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919050505080955081965082975083985084995050505050506000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166399530b066040518163ffffffff1660e01b815260040160206040518083038186803b158015610dde57600080fd5b505afa158015610df2573d6000803e3d6000fd5b505050506040513d6020811015610e0857600080fd5b810190808051906020019092919050505090506004548110158015610e2f57506005548111155b6040518060400160405280600381526020017f595031000000000000000000000000000000000000000000000000000000000081525090610f0b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ed0578082015181840152602081019050610eb5565b50505050905090810190601f168015610efd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50610f33600354610f25878461125390919063ffffffff16565b6112d990919063ffffffff16565b9450509091929394565b600082118015610f4c57508181115b6040518060400160405280600381526020017f595032000000000000000000000000000000000000000000000000000000000081525090611028576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610fed578082015181840152602081019050610fd2565b50505050905090810190601f16801561101a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5081600481905550806005819055507f82e7ee47180a631312683eeb2a85ad264c9af490d54de5a75bbdb95b968c6de2600454600554604051808381526020018281526020019250505060405180910390a15050565b6110866108b6565b6110f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b60008060006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61113b611362565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6111706108b6565b156111e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b60016000806101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258611226611362565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b60008083141561126657600090506112d3565b600082840290508284828161127757fe5b04146112ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061136b6021913960400191505060405180910390fd5b809150505b92915050565b6000808211611350576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525060200191505060405180910390fd5b81838161135957fe5b04905092915050565b60003390509056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220b03f7755cb53b0de038fe74ba4a3ed8dcbbeec49bca0bbfe44bfc8ea2c94bcf564736f6c63430007060033";

export class YearnPriceFeed__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressProvider: string,
    _yVault: string,
    _priceFeed: string,
    _lowerBound: BigNumberish,
    _upperBound: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<YearnPriceFeed> {
    return super.deploy(
      addressProvider,
      _yVault,
      _priceFeed,
      _lowerBound,
      _upperBound,
      overrides || {}
    ) as Promise<YearnPriceFeed>;
  }
  getDeployTransaction(
    addressProvider: string,
    _yVault: string,
    _priceFeed: string,
    _lowerBound: BigNumberish,
    _upperBound: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressProvider,
      _yVault,
      _priceFeed,
      _lowerBound,
      _upperBound,
      overrides || {}
    );
  }
  attach(address: string): YearnPriceFeed {
    return super.attach(address) as YearnPriceFeed;
  }
  connect(signer: Signer): YearnPriceFeed__factory {
    return super.connect(signer) as YearnPriceFeed__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): YearnPriceFeedInterface {
    return new utils.Interface(_abi) as YearnPriceFeedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): YearnPriceFeed {
    return new Contract(address, _abi, signerOrProvider) as YearnPriceFeed;
  }
}
