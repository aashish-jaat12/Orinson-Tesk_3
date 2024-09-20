import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductGallery from "./ProductGallery";
import ProductVariants from "./ProductVariants";

import { Data } from "../data/ProductData"; // Assuming Data is an array of products.



const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedVariants, setSelectedVariants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
 
 
  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setProducts(Data);
      // Set initial selected variant for each product
      setSelectedVariants(Data.map((item) => item.variants[0]));
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingSpinner>Loading...</LoadingSpinner>;
  }

  const handleVariantChange = (index, variant) => {
    // Update selected variant for the respective product
    const updatedVariants = [...selectedVariants];
    updatedVariants[index] = variant;
    setSelectedVariants(updatedVariants);
  };

  return (
    <PageWrapper>
      {products.map((product, index) => (
        <ProductWrapper key={index}>
          <ProductGallery images={product.images} />
          <ProductDetails>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <Price>${selectedVariants[index].price}</Price>
            <Availability>{selectedVariants[index].availability}</Availability>
            <ProductVariants
              variants={product.variants}
              selectedVariant={selectedVariants[index]}
              onVariantChange={(variant) => handleVariantChange(index, variant)}
            />
            <AddToCartButton > Add to Cart</AddToCartButton>
           
          </ProductDetails>
        </ProductWrapper>
      ))}
     
      <BackToShopLink href="/">Back to Shop</BackToShopLink>
    </PageWrapper>
  );
};

export default ProductPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
 
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProductDetails = styled.div`
  flex: 1;
  padding: 20px;
`;

const Price = styled.div`
  font-size: 24px;
  color: green;
`;

const Availability = styled.div`
  color: ${({ children }) => (children === "In Stock" ? "green" : "red")};
`;

const AddToCartButton = styled.button`
  background-color: #f08a24;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
`;

const LoadingSpinner = styled.div`
  font-size: 20px;
  text-align: center;
  padding: 100px;
`;

const BackToShopLink = styled.a`
  text-align: center;
  color: #3498db;
  display: block;
  margin-top: 20px;
`;
