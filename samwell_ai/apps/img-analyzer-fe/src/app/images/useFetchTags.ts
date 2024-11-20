import { useState } from 'react';
import axios from 'axios';

interface TagResponse {
  id: string;
  imageUrl: string;
  tags: string[];
}

const useFetchTags = () => {
  const [tags, setTags] = useState<TagResponse>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTags = async (imageUrl: string, id: string) => {
    try {
      const response = await axios.post(
        `http://localhost:3333/images/analyze`,
        { imageUrl, id }
      );

      setTags((prevTags) => ({ ...prevTags, ...response.data }));
    } catch (error) {
      console.error('Failed to fetch images:', error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchTags, loading, tags };
};

export default useFetchTags;
