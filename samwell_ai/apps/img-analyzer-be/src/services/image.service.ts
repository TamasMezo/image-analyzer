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

const tagArray = [
  'apple',
  'banana',
  'cherry',
  'date',
  'elderberry',
  'fig',
  'grape',
  'honeydew',
  'kiwi',
  'lemon',
  'mango',
  'nectarine',
  'orange',
  'papaya',
  'quince',
  'raspberry',
  'strawberry',
  'tangerine',
  'watermelon',
  'blueberry',
];

export const getRandomTagsForImage = (numItems: number = 4): string[] => {
  const shuffled = [...tagArray].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numItems);
};
