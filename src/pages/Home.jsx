import heroImg from "../assets/images/hero-img.png";

import React from "react";
import Helmet from "../Components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../Components/services/Services";
import ProductsList from "../Components/UI/ProductsList";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        {/* <Container>
          <Row> */}
        <Col lg="6" md="6">
          <div className="hero__content">
            <p className="hero__subtitle">Trending Product in {year}</p>
            <h2>Make Your Interior More Minimalistic & Modern</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis illo itaque rem inventore eos sapiente iure, pariatur
              ullam beatae ea.
            </p>
            <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
              <Link to="shop">SHOP NOW</Link>
            </motion.button>
          </div>
        </Col>
        <Col lg="6" md="6">
          <div className="hero__img">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        {/* </Row>
        </Container> */}
      </section>
      <Services></Services>
      <section className="trending__products">
        {/* <Container>
          <Row> */}
        <Col lg="12">
          <h2 className="section__title">Trending Product</h2>
        </Col>
        <ProductsList> </ProductsList>
        {/* </Row>
        </Container> */}
      </section>
    </Helmet>
  );
}
