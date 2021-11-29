import { Router } from 'express';
import contactController from '../controllers/apirequest_controller';

const router = new Router();

router.get('/', contactController.index);

export default router;
