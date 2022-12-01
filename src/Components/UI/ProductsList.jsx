import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsList() {
  return (
    <div className="product__card-container">
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
      <ProductCard></ProductCard>
    </div>
  );
}
