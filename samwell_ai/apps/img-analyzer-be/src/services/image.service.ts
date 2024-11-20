import axios from 'axios';
import { ImageResponse } from './image.service.types';

export const getRandomImages = async () => {
  try {
    const url = `${process.env.UNSPLASH_BASE_URL}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`;
    const imageResponse = await axios.get<ImageResponse>(url);
    return imageResponse.data;
  } catch (error) {
    throw error;
  }
};
