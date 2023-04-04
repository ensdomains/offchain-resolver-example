// This is the ABI for the ENS Resolver contract, THIS FILE IS SAFE TO COPY IN ITS ENTIRETY
export const ENS_Resolver_Service_ABI = [
    {
        inputs: [
            {
                internalType: 'bytes',
                name: 'name',
                type: 'bytes',
            },
            {
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
        ],
        name: 'resolve',
        outputs: [
            {
                internalType: 'bytes',
                name: 'result',
                type: 'bytes',
            },
            {
                internalType: 'uint64',
                name: 'expires',
                type: 'uint64',
            },
            {
                internalType: 'bytes',
                name: 'sig',
                type: 'bytes',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
];
