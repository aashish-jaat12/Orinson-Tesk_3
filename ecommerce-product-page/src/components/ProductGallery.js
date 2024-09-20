import React, { useState } from "react";
import styled from "styled-components";

const ProductGallery = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <GalleryWrapper>
      <MainImage src={mainImage} alt="Main Product" />
      <ThumbnailContainer>
        {images.map((img, idx) => (
          <Thumbnail
            key={idx}
            src={img}
            alt={`Product ${idx}`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </ThumbnailContainer>
    </GalleryWrapper>
  );
};

export default ProductGallery;

const GalleryWrapper = styled.div`
  flex: 1;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  cursor: zoom-in;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #f08a24;
  }
`;
