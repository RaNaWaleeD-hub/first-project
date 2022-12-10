import React from "react";
import Form from "../../Nav/Form";
import Footer from "../Footer";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Container } from "react-bootstrap";

import Breadcrumb from "react-bootstrap/Breadcrumb";

function RJS() {
  return (
    <>
      <div className="topbar">
        <Breadcrumb className="breadCrumb">
          <Breadcrumb.Item active>ReactJS</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        </Breadcrumb>
        <p className="para1">Learn ReactJS</p>
      </div>
      <Container>
        <Row>
          <Col>
            <img
              className="imgWordpress"
              src="https://tse3.mm.bing.net/th?id=OIP.eWUjOCd3NX0YumGQSDNQAwHaEK&pid=Api&P=0"
              alt="sadaa"
            />
          </Col>
          <Col>
            <h1 className="Wtext">ReactJS</h1>
            <p className="p1text">Getting started with ReactJS</p>
            <p className="p2text">Course Fee: Rs.10000</p>
            <ul className="description">
              <li>Getting into WordPress</li>
              <li>Understanding the common terms</li>
              <li>Why choose WordPress?</li>
              <li>Getting to know the WordPress family</li>
              <li>Digging into WordPress – the features</li>
              <li>Using theme and plugin directories</li>
              <li>Create complete E-Commerce website</li>
            </ul>
          </Col>
          <Col>
            <Form />
          </Col>
        </Row>
      </Container>
      <div className="description1">
        <h1 className="des">Description</h1>
        <p className="des-para">
          Overview In this class you will learn to launch your website quickly
          with the help of a quick WordPress installation guide; create a
          quality website with a proper assembly of important subpages; install
          and work with plugins and widgets; install and create attractive
          themes for your website; create custom menus to improve the user
          experience of your website; upload multimedia content such as images,
          audio, and video easily and effectively. This WordPress Level 1 course
          will be the building block to your experience with WordPress. It will
          give you the fundamental administrative functions of the WordPress
          dashboard and a solid understanding of basic themes and plugins.
        </p>
      </div>
      <div className="course-info">
        <h2>Course Info</h2>
        <table className="tableDes">
          <tbody>
            <tr>
              <td>Course Duration</td>
              <td>2 Months</td>
            </tr>
            <tr>
              <td>Class Type</td>
              <td>Online/Physical</td>
            </tr>
            <tr>
              <td>Location</td>
              <td>Heytec IT Lahore</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default RJS;
