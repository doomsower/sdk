import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StETHMockERC20, StETHMockERC20Interface } from "../../../../../contracts/test/sigp/stETHMock.sol/StETHMockERC20";
declare type StETHMockERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class StETHMockERC20__factory extends ContractFactory {
    constructor(...args: StETHMockERC20ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<StETHMockERC20>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): StETHMockERC20;
    connect(signer: Signer): StETHMockERC20__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50604080518082018252601881527f4c6971756964207374616b6564204c69646f20457468657200000000000000006020808301918252835180850190945260058452640a6e88aa8960db1b908401528151919291620000749160039162000093565b5080516200008a90600490602084019062000093565b50505062000176565b828054620000a19062000139565b90600052602060002090601f016020900481019282620000c5576000855562000110565b82601f10620000e057805160ff191683800117855562000110565b8280016001018555821562000110579182015b8281111562000110578251825591602001919060010190620000f3565b506200011e92915062000122565b5090565b5b808211156200011e576000815560010162000123565b600181811c908216806200014e57607f821691505b602082108114156200017057634e487b7160e01b600052602260045260246000fd5b50919050565b6111b280620001866000396000f3fe60806040526004361061015f5760003560e01c806369415b86116100c0578063a1903eab11610074578063a77384c111610059578063a77384c114610393578063a9059cbb146103b3578063dd62ed3e146103d357600080fd5b8063a1903eab14610360578063a457c2d71461037357600080fd5b80637a28fb88116100a55780637a28fb881461030b57806384041a581461032b57806395d89b411461034b57600080fd5b806369415b86146102b257806370a08231146102c857600080fd5b806323b872dd1161011757806339509351116100fc578063395093511461025c5780633a98ef391461027c57806340c10f191461029257600080fd5b806323b872dd14610220578063313ce5671461024057600080fd5b8063095ea7b311610148578063095ea7b3146101b157806318160ddd146101e1578063192084511461020057600080fd5b806302fb4d851461016457806306fdde0314610186575b600080fd5b34801561017057600080fd5b5061018461017f366004610f0b565b610426565b005b34801561019257600080fd5b5061019b610434565b6040516101a89190610f35565b60405180910390f35b3480156101bd57600080fd5b506101d16101cc366004610f0b565b6104c6565b60405190151581526020016101a8565b3480156101ed57600080fd5b506002545b6040519081526020016101a8565b34801561020c57600080fd5b506101f261021b366004610fa8565b6104dc565b34801561022c57600080fd5b506101d161023b366004610fc1565b610511565b34801561024c57600080fd5b50604051601281526020016101a8565b34801561026857600080fd5b506101d1610277366004610f0b565b6105fc565b34801561028857600080fd5b506101f260055481565b34801561029e57600080fd5b506101846102ad366004610f0b565b610645565b3480156102be57600080fd5b506101f260065481565b3480156102d457600080fd5b506101f26102e3366004610ffd565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b34801561031757600080fd5b506101f2610326366004610fa8565b61064f565b34801561033757600080fd5b50610184610346366004610fa8565b600655565b34801561035757600080fd5b5061019b610674565b6101f261036e366004610ffd565b610683565b34801561037f57600080fd5b506101d161038e366004610f0b565b610690565b34801561039f57600080fd5b506101846103ae366004610fa8565b600555565b3480156103bf57600080fd5b506101d16103ce366004610f0b565b610768565b3480156103df57600080fd5b506101f26103ee36600461101f565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6104308282610775565b5050565b60606003805461044390611052565b80601f016020809104026020016040519081016040528092919081815260200182805461046f90611052565b80156104bc5780601f10610491576101008083540402835291602001916104bc565b820191906000526020600020905b81548152906001019060200180831161049f57829003601f168201915b5050505050905090565b60006104d3338484610963565b50600192915050565b6000600654600014156104f157506000919050565b60065460055461050190846110d5565b61050b9190611112565b92915050565b600061051e848484610b0e565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600160209081526040808320338452909152902054828110156105e4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6105f18533858403610963565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916104d391859061064090869061114d565b610963565b6104308282610dc2565b60006005546000141561066457506000919050565b60055460065461050190846110d5565b60606004805461044390611052565b60003461050b3382610dc2565b33600090815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8616845290915281205482811015610751576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016105db565b61075e3385858403610963565b5060019392505050565b60006104d3338484610b0e565b73ffffffffffffffffffffffffffffffffffffffff8216610818576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016105db565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054818110156108ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016105db565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040812083830390556002805484929061090a908490611165565b909155505060405182815260009073ffffffffffffffffffffffffffffffffffffffff8516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a05576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105db565b73ffffffffffffffffffffffffffffffffffffffff8216610aa8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016105db565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259101610956565b73ffffffffffffffffffffffffffffffffffffffff8316610bb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016105db565b73ffffffffffffffffffffffffffffffffffffffff8216610c54576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016105db565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610d0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016105db565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610d4e90849061114d565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610db491815260200190565b60405180910390a350505050565b73ffffffffffffffffffffffffffffffffffffffff8216610e3f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105db565b8060026000828254610e51919061114d565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526020819052604081208054839290610e8b90849061114d565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610f0657600080fd5b919050565b60008060408385031215610f1e57600080fd5b610f2783610ee2565b946020939093013593505050565b600060208083528351808285015260005b81811015610f6257858101830151858201604001528201610f46565b81811115610f74576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600060208284031215610fba57600080fd5b5035919050565b600080600060608486031215610fd657600080fd5b610fdf84610ee2565b9250610fed60208501610ee2565b9150604084013590509250925092565b60006020828403121561100f57600080fd5b61101882610ee2565b9392505050565b6000806040838503121561103257600080fd5b61103b83610ee2565b915061104960208401610ee2565b90509250929050565b600181811c9082168061106657607f821691505b602082108114156110a0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561110d5761110d6110a6565b500290565b600082611148577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60008219821115611160576111606110a6565b500190565b600082821015611177576111776110a6565b50039056fea26469706673582212205c4bc9494ae5eefe72ed2a79f07174f1606d86fc855f115449df2a739978ab1364736f6c634300080a0033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): StETHMockERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): StETHMockERC20;
}
export {};
