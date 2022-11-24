import React from "react";
// import styled from "styled-components";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Container } from "react-bootstrap";

// Assets
// import LogoImg from "../../assets/svg/Logo";

export default function Contact() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="dark">
      <div className="container1">
        <Container>
          <Row className="response">
            <Col className="col-md-3">
              <h3 className="footer-heading">Contact US</h3>
              <p className="pointer3">Call us at 9am to 6pm</p>
              <h2 className="Cell">03455223232</h2>
              <p className="pointer3">
                Wahdat Road Lahore Email at HeytecTrainings@gmail.com{" "}
              </p>
              {/* <img
                src="https://icons8.com/icon/118497/facebook-new"
                alt="img"
              /> */}
            </Col>
            <Col className="col-md-3">
              <div className="pointer4">
                <h3>About Us</h3>
                <p>Privacy Policy</p>
                <p>Sitemap</p>
                <p>Blog</p>
                <p>Rules And Regulations</p>
              </div>
            </Col>
            <Col className="col-md-3">
              <div className="pointer4">
                <h3>Products</h3>
              </div>
            </Col>
            <Col className="col-md-3">
              <div className="pointer4">
                <h3>Quick Links</h3>
                <p>Contact US </p>
                <p>About Us </p>
                <p>Apply for Admission</p>
                {/* <p>Aplly for Teaching</p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container eng">
        © {getCurrentYear()} -{" "}
        <span className="purpleColor font13 design1">HEYTEC IT</span> All Rights
        Reserved
        <span className="design">Designed by:Heytec Institution</span>
      </div>
    </div>
  );
}
