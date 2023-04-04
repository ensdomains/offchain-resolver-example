import { bootstrapServer } from './server';
import { logger } from './util/logger';

// The main function, this is our program
const main = async () => {
    // Creates the server
    const ccipServer = bootstrapServer();

    // Start the app at /
    const httpServer = ccipServer.makeApp('/');

    // Start our server on port 3000
    httpServer.listen(3000);

    // Log that we are running
    logger.info('Server running on port 3000');
};

main();
