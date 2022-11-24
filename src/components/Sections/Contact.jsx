import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import styled from "styled-components";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
// import emailjs from "emailjs.com";
// import { useRef } from "react";
import { Container } from "react-bootstrap";

// Assets
// import ContactImg1 from "../../assets/img/Contact us-img.png";
// import ContactImg2 from "../../assets/img/contact-2.png";
// import ContactImg3 from "../../assets/img/contact-3.png";

export default function Contact() {
  // const form = useRef();

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_bx9c2ud",
  //       "template_9xfmvmb",
  //       form.current,
  //       "qt5QuywwmNg3_GkAr"
  //     )
  //     .then(
  //       (response) => {
  //         console.log(response);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }
  return (
    <div id="contact">
      <Container className="container-fluid">
        <Row>
          <Col className="col-md-6 col-sm-12 ">
            <Form className="formcss2">
              <h2 className="formheading2">Register Now</h2>
              <Form.Group className="mb-4">
                <Form.Control type="name" placeholder="Enter Name" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  type="email address"
                  placeholder="Enter Email Address"
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="text" placeholder="Mobile NO." />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control type="string" placeholder="Qualification" />
              </Form.Group>
              <Form.Select className="mb-4">
                <option>Select Courses</option>
                <option value="1">ReactJS</option>
                <option value="2">Wordpress</option>
                <option value="3">Freelancing</option>
                <option value="3">SEO</option>
                <option value="3">Android & IOS Development</option>
                <option value="3">Front-end Development</option>
              </Form.Select>

              <Form.Group className="mb-4">
                <Form.Control type="Name" placeholder="City Name" />
              </Form.Group>

              <div className="mb-4">
                {["radio"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Online"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Physical"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </div>

              <Form.Control
                className="query"
                as="textarea"
                placeholder="Enter your Query"
                rows={3}
              />

              <Button className="mb-3" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col className="col-md-6  col-sm-12">
            <div className="forspace"></div>
            <div className="second-column">
              <h2>WelCome to HEYTEC Training,</h2>
              <p>Do you want to protect your online business?</p>

              <p>To connect, simply fill the form.</p>
              <br />

              <p>
                Once we receive your request, our team will analyze your
                business requirements.
              </p>

              <p>
                We will be in touch ASAP and help your online business get the
                protection it needs!
              </p>
              <p>
                <img
                  src="https://as2.ftcdn.net/v2/jpg/02/23/21/45/1000_F_223214507_mocKVnVwSHgiwJSx6lGqh0rr1penAqJm.jpg"
                  title="whatsapp icons"
                  alt="whatsapp icon"
                  style={{ width: "4%", margin: "0.5rem" }}
                />
                hello HeytectTraining
              </p>
              <p>
                <img
                  src="https://t4.ftcdn.net/jpg/01/35/05/71/240_F_135057100_moOPjLlA2ylkLhtt5eZ4NIbT9YHCX83A.jpg"
                  title="whatsapp icons"
                  alt="whatsapp icon"
                  style={{ width: "4%", margin: "0.5rem" }}
                />{" "}
                0322-133332434
              </p>

              <p>
                {" "}
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4302/4302307.png"
                  title="whatsapp icons"
                  alt="whatsapp icon"
                  style={{ width: "4%", margin: "0.5rem" }}
                />
                032223343242
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// const Wrapper = styled.section`
//   width: 100%;
// `;
// const HeaderInfo = styled.div`
//   padding: 70px 0 30px 0;
//   @media (max-width: 860px) {
//     text-align: center;
//   }

//   padding: 70px 0 30px 0;
//   input,
//   textarea {
//     width: 100%;
//     background-color: transparent;
//     border: 0px;
//     outline: none;
//     box-shadow: none;
//     border-bottom: 1px solid #707070;
//     height: 30px;
//     margin-bottom: 30px;
//   }
//   textarea {
//     min-height: 100px;
//   }
//   @media (max-width: 860px) {
//     padding: 30px 0;
//   }
// `;
// const ButtonInput = styled.input`
//   border: 1px solid #7620ff;
//   background-color: #7620ff;
//   width: 100%;
//   padding: 15px;
//   outline: none;
//   color: #fff;
//   :hover {
//     background-color: #580cd2;
//     border: 1px solid #7620ff;
//     color: #fff;
//   }
//   @media (max-width: 991px) {
//     margin: 0 auto;
//   }
// `;
// const ContactImgBox = styled.div`
//   max-width: 180px;
//   align-self: flex-end;
//   margin: 10px 30px 10px 0;
// `;
// const SumbitWrapper = styled.div`
//   @media (max-width: 991px) {
//     width: 100%;
//     margin-bottom: 50px;
//   }
// `;
