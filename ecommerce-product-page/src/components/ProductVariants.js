import React from "react";
import styled from "styled-components";

const ProductVariants = ({ variants, selectedVariant, onVariantChange }) => {
  return (
    <VariantWrapper>
      <h3>Select Variant</h3>
      {variants.map((variant) => (
        <VariantButton
          key={variant.id}
          selected={variant.id === selectedVariant.id}
          onClick={() => onVariantChange(variant)}
        >
          {variant.name}
        </VariantButton>
      ))}
    </VariantWrapper>
  );
};

export default ProductVariants;

const VariantWrapper = styled.div`
  margin-top: 20px;
`;

const VariantButton = styled.button`
  background-color: ${({ selected }) => (selected ? "#3498db" : "#f1f1f1")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  padding: 10px 20px;
  margin: 5px;
  border: none;
  cursor: pointer;
`;
