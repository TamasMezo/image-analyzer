'use client';

import {
  Container,
  Loading,
  Title,
  Image,
  Wrapper,
  Button,
  ImageWrapper,
} from './styles';
import useFetchImages from './useFetchImages';
import useFetchTags from './useFetchTags';

const ImagesPage = () => {
  const { images, loading } = useFetchImages();
  const { fetchTags, tags } = useFetchTags();

  if (loading) return <Loading>Loading images...</Loading>;

  const renderTagsForImages = (imageId: string) => {
    if (tags?.id === imageId) {
      return (
        <div style={{ flexDirection: 'column' }}>
          {tags.tags.map((tag, index) => (
            <p style={{ fontSize: 10 }} key={index}>
              {tag}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <Container>
      <Title>Image Gallery</Title>
      <Wrapper>
        {images.map((image: any) => (
          <ImageWrapper>
            <Image
              src={image.urls.small}
              alt={image.alt_description}
              height={image.height}
              width={image.width}
            />
            <Button onClick={() => fetchTags(image.urls.small, image.id)}>
              Generate tag for image
            </Button>
            <div>
              <>{renderTagsForImages(image.id)}</>
            </div>
          </ImageWrapper>
        ))}
      </Wrapper>
    </Container>
  );
};

export default ImagesPage;
