import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {

  return (
    <div className="product__card-container">

      {data.map(item => (
              <ProductCard item={item} ></ProductCard>

      ) )}
      

    </div>
  );
};

export default ProductsList;
