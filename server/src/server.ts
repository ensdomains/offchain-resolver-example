import { Server } from '@chainlink/ccip-read-server';

import { ENS_Resolver_Service_ABI } from './abi/ENS_Resolver_Service_ABI';
import { resolveName } from './logic/resolveName';

// This function creates the server
export const bootstrapServer = () => {
    // Create the server
    const server = new Server();

    // Add ABI and array of features to implement
    server.add(ENS_Resolver_Service_ABI, [
        { type: 'resolve', func: resolveName },
    ]);

    // Return the server
    return server;
};
