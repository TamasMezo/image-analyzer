import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  max-width: 60%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  padding: 10px;
`;

export const ImageWrapper = styled.div`
  height: 300px;
  max-width: 150px;
`;

export const Image = styled.img<{ width: number; height: number }>`
  ${({ width, height }) => css`
    aspect-ratio: ${width / height};
    max-width: 150px;
    max-height: 150px;
    object-fit: cover;
    border-radius: 8px;
  `}
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 50px;
`;

export const Loading = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Button = styled.button`
  margin-top: 10px; /* Space between image and button */
  margin-bottom: 10px; /* Space between image and button */
  padding: 10px 20px; /* Button padding */
  background-color: #007bff; /* Blue background color */
  color: white; /* White text color */
  border: none; /* Remove default border */
  border-radius: 5px; /* Optional: rounded corners */
  cursor: pointer; /* Cursor pointer on hover */
  font-size: 14px; /* Font size */
  transition: background-color 0.3s ease; /* Smooth background color transition */

  &:hover {
    background-color: #0056b3; /* Darker blue when hovered */
  }
`;
