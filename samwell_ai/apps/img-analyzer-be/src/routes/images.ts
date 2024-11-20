import { Router, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { getRandomImages } from '../services';

const router = Router();

router.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    try {
      const randomImages = await getRandomImages();

      res.send({ images: randomImages });
    } catch (error) {
      res.status(500).send({ error });
    }
  })
);

export default router;
