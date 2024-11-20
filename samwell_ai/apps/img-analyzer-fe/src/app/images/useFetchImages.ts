import { useState, useEffect } from 'react';
import axios from 'axios';

interface Image {
  id: number;
  url: string;
  title: string;
}

const useFetchImages = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3333/images');

        console.log('response', response);

        setImages(response.data?.images);
      } catch (error) {
        console.error('Failed to fetch images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return { images, loading };
};

export default useFetchImages;
