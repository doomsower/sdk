/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ContractsRegister } from "../ContractsRegister";

export class ContractsRegister__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressProvider: string,
    overrides?: Overrides
  ): Promise<ContractsRegister> {
    return super.deploy(
      addressProvider,
      overrides || {}
    ) as Promise<ContractsRegister>;
  }
  getDeployTransaction(
    addressProvider: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(addressProvider, overrides || {});
  }
  attach(address: string): ContractsRegister {
    return super.attach(address) as ContractsRegister;
  }
  connect(signer: Signer): ContractsRegister__factory {
    return super.connect(signer) as ContractsRegister__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContractsRegister {
    return new Contract(address, _abi, signerOrProvider) as ContractsRegister;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addressProvider",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creditManager",
        type: "address",
      },
    ],
    name: "NewCreditManagerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "NewPoolAdded",
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
    inputs: [
      {
        internalType: "address",
        name: "newCreditManager",
        type: "address",
      },
    ],
    name: "addCreditManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newPoolAddress",
        type: "address",
      },
    ],
    name: "addPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "creditManagers",
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
    name: "getCreditManagers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreditManagersCount",
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
    name: "getPools",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolsCount",
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
        name: "addr",
        type: "address",
      },
    ],
    name: "isCreditManager",
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
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isPool",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pools",
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
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516114b33803806114b38339818101604052602081101561003357600080fd5b81019080805190602001909291905050508060008060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff1663087376956040518163ffffffff1660e01b815260040160206040518083038186803b1580156100a557600080fd5b505afa1580156100b9573d6000803e3d6000fd5b505050506040513d60208110156100cf57600080fd5b8101908080519060200190929190505050600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050611382806101316000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638456cb591161008c578063b4ac686011610066578063b4ac68601461032a578063c29277cd14610348578063d914cd4b14610366578063e26b2f63146103aa576100cf565b80638456cb59146102695780639414485614610273578063ac4afa38146102d2576100cf565b80631e16e4fc146100d45780633f4ba83a1461012c5780635b16ebb7146101365780635c975abb14610190578063673a2a1f146101b05780636fbc6f6b1461020f575b600080fd5b610100600480360360208110156100ea57600080fd5b81019080803590602001909291905050506103ee565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61013461042d565b005b6101786004803603602081101561014c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105d8565b60405180821515815260200191505060405180910390f35b61019861062e565b60405180821515815260200191505060405180910390f35b6101b8610644565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101fb5780820151818401526020810190506101e0565b505050509050019250505060405180910390f35b6102516004803603602081101561022557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506106d2565b60405180821515815260200191505060405180910390f35b610271610728565b005b61027b6108d3565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102be5780820151818401526020810190506102a3565b505050509050019250505060405180910390f35b6102fe600480360360208110156102e857600080fd5b8101908080359060200190929190505050610961565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103326109a0565b6040518082815260200191505060405180910390f35b6103506109ad565b6040518082815260200191505060405180910390f35b6103a86004803603602081101561037c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109ba565b005b6103ec600480360360208110156103c057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d6a565b005b600381815481106103fe57600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d4eb5db0336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156104b657600080fd5b505afa1580156104ca573d6000803e3d6000fd5b505050506040513d60208110156104e057600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f4331000000000000000000000000000000000000000000000000000000000000815250906105cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610592578082015181840152602081019050610577565b50505050905090810190601f1680156105bf5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506105d661111a565b565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b60008060009054906101000a900460ff16905090565b606060018054806020026020016040519081016040528092919081815260200182805480156106c857602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161067e575b5050505050905090565b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16633a41ec64336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b1580156107b157600080fd5b505afa1580156107c5573d6000803e3d6000fd5b505050506040513d60208110156107db57600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f4331000000000000000000000000000000000000000000000000000000000000815250906108c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561088d578082015181840152602081019050610872565b50505050905090810190601f1680156108ba5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506108d1611204565b565b6060600380548060200260200160405190810160405280929190818152602001828054801561095757602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161090d575b5050505050905090565b6001818154811061097157600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600180549050905090565b6000600380549050905090565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635f259aba336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610a4357600080fd5b505afa158015610a57573d6000803e3d6000fd5b505050506040513d6020811015610a6d57600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f433300000000000000000000000000000000000000000000000000000000000081525090610b5a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b1f578082015181840152602081019050610b04565b50505050905090810190601f168015610b4c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156040518060600160405280602581526020016112f86025913990610c68576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c2d578082015181840152602081019050610c12565b50505050905090810190601f168015610c5a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506001819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167ff816b5143086c89d103a0683286be86c2b741e83ebfa75135aae606e2f5c6e5360405160405180910390a250565b600060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635f259aba336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b158015610df357600080fd5b505afa158015610e07573d6000803e3d6000fd5b505050506040513d6020811015610e1d57600080fd5b81019080805190602001909291905050506040518060400160405280600281526020017f433300000000000000000000000000000000000000000000000000000000000081525090610f0a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ecf578082015181840152602081019050610eb4565b50505050905090810190601f168015610efc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600460008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161560405180606001604052806030815260200161131d6030913990611018576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610fdd578082015181840152602081019050610fc2565b50505050905090810190601f16801561100a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506003819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508073ffffffffffffffffffffffffffffffffffffffff167f58ad3cfc4b6552a53c8c4128ae9b080e14b4378a159280643a62c6f709cee24f60405160405180910390a250565b61112261062e565b611194576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b60008060006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6111d76112ef565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b61120c61062e565b1561127f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b60016000806101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586112c26112ef565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b60003390509056fe436f6e74726163747352656769737465723a20706f6f6c20616c7265616479206164646564436f6e74726163747352656769737465723a20637265646974204d616e6167657220697320616c726561647920736574a2646970667358221220da138287adeabc1d345181ec944e72390db4e893a6165bc44b49c4b38b74406364736f6c63430007060033";
