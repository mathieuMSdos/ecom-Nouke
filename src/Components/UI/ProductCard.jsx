import React from "react";
import productImg from "../../assets/images/arm-chair-01.jpg";
import { Col } from "reactstrap";

export default function ProductCard() {
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={productImg} alt="productImg" />
      </div>
      <h3 className="product__name">Modern Armchair</h3>
      <span className="product__type">Chair</span>
      <div className="product__card-bottom">
        <span className="price">$299</span>
        <span>
          <i class="ri-add-line"></i>
        </span>
      </div>
    </div>
  );
}
