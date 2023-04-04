import { HandlerFunc } from '@chainlink/ccip-read-server';

import { logger } from '../util/logger';

/**
 * This function handles resolution for ENS names when the gateway is prompted
 * @param input The encoded name aswell as contract data
 * @param request The RPCCall that triggered this function
 * @returns A signed off result for the users query
 */
export const resolveName: HandlerFunc = async (input, request) => {
    // Destructure the input
    const [encodedName, data] = input;

    // Debug log the input
    logger.debug('resolveName', { encodedName, data });

    // Return the result ([result, validUntil, sigData])
    return [];
};
