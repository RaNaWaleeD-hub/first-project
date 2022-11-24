import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import emailjs from "@emailjs/browser";
// import { useRef } from "react";

function BasicForm() {
  // const form = useRef();

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_bx9c2ud",
  //       "template_9xfmvmb",
  //       e.target,
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
    <Form className="formcss">
      <h2 className="formheading">Apply now</h2>
      <Form.Group className="mb-4">
        <Form.Control type="name" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control type="email address" placeholder="Enter Email Address" />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control type="number" placeholder="Mobile NO." />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control type="string" placeholder="Qualification" />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control type="Name" placeholder="City Name" />
      </Form.Group>

      <div className="mb-4">
        {/* <Form.Check inline label="Online" />

        <Form.Check inline label="Physical" /> */}
        {/* <Form> */}
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
        {/* </Form> */}
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
  );
}

export default BasicForm;
