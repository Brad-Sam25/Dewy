import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import classes from './Footer.module.css';


const Footer = () => {
  return (
    <footer >
      <Container >
        <Row className= "mb-5">
          <Col className= { classes.footerTitle }>Dewy</Col>
        </Row>
        <Row className= "mb-5">
          <Col>Home</Col>
          <Col>About</Col>
          <Col>Quiz</Col>
        </Row>
        <Row className= "mb-5">
          <Col xs={6} md={4}>Instagram</Col>
          <Col xs={6} md={4}>TikTok</Col>
          <Col xs={6} md={4}>Twitter</Col>
        </Row>
        <Row>
          <Col>Copyright ©2021 All rights reserved | Curated with ❤️</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
