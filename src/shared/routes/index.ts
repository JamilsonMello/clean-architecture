import { Router } from 'express';

import transaction from '../../modules/transaction/gateway/http/routes';

const router = Router();

router.use('/authorization', transaction);

export default router;