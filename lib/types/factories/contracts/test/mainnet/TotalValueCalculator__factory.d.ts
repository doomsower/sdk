import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TotalValueCalculator, TotalValueCalculatorInterface } from "../../../../contracts/test/mainnet/TotalValueCalculator";
declare type TotalValueCalculatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TotalValueCalculator__factory extends ContractFactory {
    constructor(...args: TotalValueCalculatorConstructorParams);
    deploy(_creditFacade: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TotalValueCalculator>;
    getDeployTransaction(_creditFacade: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TotalValueCalculator;
    connect(signer: Signer): TotalValueCalculator__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161021c38038061021c83398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b60805161019261008a6000396000608a01526101926000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806355eb724114610030575b600080fd5b61004361003e3660046100fb565b610045565b005b6040517fc7de38a600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c7de38a6906024016040805180830381865afa1580156100d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100f49190610138565b6000555050565b60006020828403121561010d57600080fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461013157600080fd5b9392505050565b6000806040838503121561014b57600080fd5b50508051602090910151909290915056fea26469706673582212202b76890b2e78ad5dad5924d6cd8099f674fa7a2fb7697b9d62f687f8a23bdc2464736f6c634300080a0033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): TotalValueCalculatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TotalValueCalculator;
}
export {};
