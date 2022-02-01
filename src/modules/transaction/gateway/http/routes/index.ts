import { Router } from 'express';

import { expressAdapter } from '../Adapters/express';
import { createTransactionHandler } from '../handlers/CreateTransactionHandler';

const routes = Router();

routes.post('/', expressAdapter(createTransactionHandler));

export default routes;