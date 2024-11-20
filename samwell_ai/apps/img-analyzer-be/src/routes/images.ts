import { Router, Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { getRandomImages, getRandomTagsForImage } from '../services';

const router = Router();

router.get(
  '/',
  asyncHandler(async (_req: Request, res: Response) => {
    try {
      const randomImages = await getRandomImages();

      res.send({ images: randomImages });
    } catch (error) {
      res.status(500).send({ error });
    }
  })
);

router.post(
  '/analyze',
  asyncHandler(async (req: Request, res: Response) => {
    const { id, imageUrl } = req.body;

    if (!id || !imageUrl) {
      res.status(400);
    }

    try {
      const randomTags = getRandomTagsForImage();

      res.send({ id, imageUrl, tags: randomTags });
    } catch (error) {
      res.status(500).send({ error });
    }
  })
);

export default router;
