import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LidoV1Adapter, LidoV1AdapterInterface } from "../../../../../contracts/adapters/lido/LidoV1.sol/LidoV1Adapter";
declare type LidoV1AdapterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LidoV1Adapter__factory extends ContractFactory {
    constructor(...args: LidoV1AdapterConstructorParams);
    deploy(_creditManager: string, _lidoGateway: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LidoV1Adapter>;
    getDeployTransaction(_creditManager: string, _lidoGateway: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LidoV1Adapter;
    connect(signer: Signer): LidoV1Adapter__factory;
    static readonly bytecode = "0x6101606040523480156200001257600080fd5b506040516200230638038062002306833981810160405260408110156200003857600080fd5b50805160209182015160408051632b853d7960e11b81529051929391926001600160a01b0385169263570a7af292600480820193918290030181865afa15801562000087573d6000803e3d6000fd5b505050506040513d60208110156200009e57600080fd5b505160408051630a55006360e21b815290516001600160a01b0390921691632954018c916004808201926020929091908290030181865afa158015620000e8573d6000803e3d6000fd5b505050506040513d6020811015620000ff57600080fd5b505182826001600160a01b03821615806200012157506001600160a01b038116155b156200014057604051635919af9760e11b815260040160405180910390fd5b6001600160a01b038216608081905260408051632f7a188160e01b81529051632f7a1881916004808201926020929091908290030181865afa1580156200018b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001b191906200048a565b6001600160a01b0390811660a05290811660c0526000805460ff19169055821615159050620001f357604051635919af9760e11b815260040160405180910390fd5b806001600160a01b031663087376956040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000232573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200025891906200048a565b6001600160a01b031660e0816001600160a01b03168152505050600180819055506000826001600160a01b031663570a7af26040518163ffffffff1660e01b8152600401602060405180830381865afa158015620002ba573d6000803e3d6000fd5b505050506040513d6020811015620002d157600080fd5b505160408051630a55006360e21b815290516001600160a01b0390921691632954018c916004808201926020929091908290030181865afa1580156200031b573d6000803e3d6000fd5b505050506040513d60208110156200033257600080fd5b50516040805163183fc7c960e31b815290519192506001600160a01b0384169163c1fe3e48916004808201926020929091908290030181865afa1580156200037e573d6000803e3d6000fd5b505050506040513d60208110156200039557600080fd5b50516001600160a01b039081166101005260408051634c252f9160e01b8152905191831691634c252f91916004808201926020929091908290030181865afa158015620003e6573d6000803e3d6000fd5b505050506040513d6020811015620003fd57600080fd5b50516001600160a01b0390811661012052604080516326c74fc360e01b81529051918316916326c74fc3916004808201926020929091908290030181865afa1580156200044e573d6000803e3d6000fd5b505050506040513d60208110156200046557600080fd5b50516001600160a01b0316610140525050680ad78ebc5ac620000060025550620004bc565b6000602082840312156200049d57600080fd5b81516001600160a01b0381168114620004b557600080fd5b9392505050565b60805160a05160c05160e051610100516101205161014051611d16620005f060003960008181610368015261123701526000818161032701528181610a1501526112c201526000818161048c01526112e40152600081816104170152818161082f01528181610bc20152610db601526000818161043e0152818161057c015281816106e50152818161076f01528181610abe01528181610b2b01528181610c8601528181610d1401528181610e7801528181610ee501528181610f5201528181610fbf01528181611144015281816116780152818161179701526118710152600081816102a1015281816114e30152611937015260008181610465015281816109250152818161108b015281816116ce01528181611768015281816118a8015281816119c70152611a750152611d166000f3fe608060405234801561001057600080fd5b50600436106101c45760003560e01c80637a28fb88116100f9578063c1fe3e4811610097578063d5002f2e11610071578063d5002f2e146104e5578063dd62ed3e146104ed578063ea99c2a614610528578063f5eb42dc1461054557600080fd5b8063c1fe3e4814610487578063ce30bbdb146104ae578063ced72f87146104dd57600080fd5b8063a4d66daf116100d3578063a4d66daf14610409578063a50cf2c814610412578063bd90df7014610439578063c12c21c01461046057600080fd5b80637a28fb88146103dc5780638456cb59146103f957806395d89b411461040157600080fd5b806337cfdaca116101665780635c975abb116101405780635c975abb1461034957806361d027b31461036357806370a082311461038a57806378aa73a4146103bd57600080fd5b806337cfdaca146103125780633f4ba83a1461031a5780633fc8cef31461032257600080fd5b806327ea6f2b116101a257806327ea6f2b1461027d5780632f7a18811461029c57806330bebac9146102ec578063313ce567146102f457600080fd5b806306fdde03146101c957806318160ddd146102465780631920845114610260575b600080fd5b6101d1610578565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561020b5781810151838201526020016101f3565b50505050905090810190601f1680156102385780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61024e6106e1565b60408051918252519081900360200190f35b61024e6004803603602081101561027657600080fd5b503561076b565b61029a6004803603602081101561029357600080fd5b5035610801565b005b6102c37f000000000000000000000000000000000000000000000000000000000000000081565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61024e610920565b6102fc610aba565b6040805160ff9092168252519081900360200190f35b61024e610b27565b61029a610b94565b6102c37f000000000000000000000000000000000000000000000000000000000000000081565b60005460ff16604080519115158252519081900360200190f35b6102c37f000000000000000000000000000000000000000000000000000000000000000081565b61024e600480360360208110156103a057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c82565b6103c5600181565b6040805161ffff9092168252519081900360200190f35b61024e600480360360208110156103f257600080fd5b5035610d10565b61029a610d88565b6101d1610e74565b61024e60025481565b6102c37f000000000000000000000000000000000000000000000000000000000000000081565b6102c37f000000000000000000000000000000000000000000000000000000000000000081565b6102c37f000000000000000000000000000000000000000000000000000000000000000081565b6102c37f000000000000000000000000000000000000000000000000000000000000000081565b6104b6600f81565b6040518082600f8111156104cc576104cc611ada565b815260200191505060405180910390f35b6103c5610ee1565b61024e610f4e565b61024e6004803603604081101561050357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610fbb565b61024e6004803603602081101561053e57600080fd5b5035611086565b61024e6004803603602081101561055b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611140565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b8152600401600060405180830381865afa1580156105e5573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052602081101561062c57600080fd5b810190808051604051939291908464010000000082111561064c57600080fd5b90830190602082018581111561066157600080fd5b825164010000000081118282018810171561067b57600080fd5b82525081516020918201929091019080838360005b838110156106a8578181015183820152602001610690565b50505050905090810190601f1680156106d55780820380516001836020036101000a031916815260200191505b50604052505050905090565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561074e573d6000803e3d6000fd5b505050506040513d602081101561076457600080fd5b5051919050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166319208451836040518263ffffffff1660e01b815260040180828152602001915050602060405180830381865afa1580156107e3573d6000803e3d6000fd5b505050506040513d60208110156107f957600080fd5b505192915050565b6040517f5f259aba0000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690635f259aba90602401602060405180830381865afa15801561088b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108af9190611b09565b6108e5576040517f61081c1500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60028190556040805182815290517fe1e1c8251499b303aefb01cf84a5ce22a95911c20ce2f3f5ae670441a6353d829181900360200190a150565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381865afa1580156109af573d6000803e3d6000fd5b505050506040513d60208110156109c557600080fd5b5051604080517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff808416600483015291519293506000927f0000000000000000000000000000000000000000000000000000000000000000909216916370a08231916024808201926020929091908290030181865afa158015610a63573d6000803e3d6000fd5b505050506040513d6020811015610a7957600080fd5b505190506001811115610ab5577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610ab281836111ce565b92505b505090565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561074e573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166337cfdaca6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561074e573d6000803e3d6000fd5b6040517fd4eb5db00000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063d4eb5db090602401602060405180830381865afa158015610c1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c429190611b09565b610c78576040517f10332dee00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c80611320565b565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166370a08231836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381865afa1580156107e3573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16637a28fb88836040518263ffffffff1660e01b815260040180828152602001915050602060405180830381865afa1580156107e3573d6000803e3d6000fd5b6040517f3a41ec640000000000000000000000000000000000000000000000000000000081523360048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690633a41ec6490602401602060405180830381865afa158015610e12573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e369190611b09565b610e6c576040517fd794b1e700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c80611406565b60607f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa1580156105e5573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ced72f876040518163ffffffff1660e01b8152600401602060405180830381865afa15801561074e573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d5002f2e6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561074e573d6000803e3d6000fd5b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e84846040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381865afa158015611067573d6000803e3d6000fd5b505050506040513d602081101561107d57600080fd5b50519392505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663e958b704336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381865afa158015611115573d6000803e3d6000fd5b505050506040513d602081101561112b57600080fd5b5051905061113983826111ce565b9392505050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f5eb42dc836040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381865afa1580156107e3573d6000803e3d6000fd5b600060025483111561120c576040517f2bfcdce800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600280548490039055604080516024810185905273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166044808301919091528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ff532e86a0000000000000000000000000000000000000000000000000000000017905261130c9083907f0000000000000000000000000000000000000000000000000000000000000000907f0000000000000000000000000000000000000000000000000000000000000000906001806114c6565b806020019051602081101561107d57600080fd5b60005460ff16611391576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390a1565b60005460ff1615611473576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f5061757361626c653a20706175736564000000000000000000000000000000006044820152606401611388565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586113dc3390565b60606000803373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461162f576040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8a811660048301528916906370a0823190602401602060405180830381865afa158015611574573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115989190611b2b565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8b81166004830152919350908816906370a0823190602401602060405180830381865afa158015611608573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061162c9190611b2b565b90505b841561172b576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000008116602483015289811660448301527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b15801561171257600080fd5b505af1158015611726573d6000803e3d6000fd5b505050505b6040517f6ce4074a00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690636ce4074a906117c19033907f0000000000000000000000000000000000000000000000000000000000000000908b90600401611b6d565b6000604051808303816000875af11580156117e0573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526118269190810190611c15565b92508415611905576040517f46fb371d00000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000811660248301528981166044830152600160648301527f000000000000000000000000000000000000000000000000000000000000000016906346fb371d90608401600060405180830381600087803b1580156118ec57600080fd5b505af1158015611900573d6000803e3d6000fd5b505050505b61191389898985858961191f565b50509695505050505050565b3373ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614611a28576040517ffcb2ffbe00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015286811660248301528581166044830152606482018590526084820184905282151560a48301527f0000000000000000000000000000000000000000000000000000000000000000169063fcb2ffbe9060c401600060405180830381600087803b158015611a0b57600080fd5b505af1158015611a1f573d6000803e3d6000fd5b50505050611ad2565b6040517f51e3f16000000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015285811660248301527f000000000000000000000000000000000000000000000000000000000000000016906351e3f16090604401600060405180830381600087803b158015611ab957600080fd5b505af1158015611acd573d6000803e3d6000fd5b505050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060208284031215611b1b57600080fd5b8151801515811461113957600080fd5b60006020828403121561076457600080fd5b60005b83811015611b58578181015183820152602001611b40565b83811115611b67576000848401525b50505050565b600073ffffffffffffffffffffffffffffffffffffffff8086168352808516602084015250606060408301528251806060840152611bb2816080850160208701611b3d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01691909101608001949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600060208284031215611c2757600080fd5b815167ffffffffffffffff80821115611c3f57600080fd5b818401915084601f830112611c5357600080fd5b815181811115611c6557611c65611be6565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715611cab57611cab611be6565b81604052828152876020848701011115611cc457600080fd5b611cd5836020830160208801611b3d565b97965050505050505056fea264697066735822122091f37c41542189d0b53665c7aca81784cd10464612d6937377c6fd4aa82a6de064736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
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
    static createInterface(): LidoV1AdapterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LidoV1Adapter;
}
export {};
