import { Router } from 'express';
import images from './images';

const router = Router();

router.use('/images', images);

export default router;
