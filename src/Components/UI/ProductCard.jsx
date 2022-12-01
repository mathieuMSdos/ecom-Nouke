import React from "react";
import productImg from "../../assets/images/arm-chair-01.jpg";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  return (
    <div className="product__item">
      <div className="product__top">
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={item.imgUrl}
          alt="productImg"
        />
        <h3 className="product__name">
          <Link to={`/shop/${item.id}`}>{item.productName}</Link>
        </h3>
        <span className="product__type">{item.category}</span>
      </div>

      <div className="product__card-bottom">
        <span className="price">${item.price}</span>
        <motion.span whileTap={{ scale: 1.2 }}>
          <i className="ri-add-line"></i>
        </motion.span>
      </div>
    </div>
  );
}
