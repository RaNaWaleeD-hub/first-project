import React from "react";
import styled from "styled-components";
// Components
// import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import ProjectImgm from "../../assets/img/projects/appdev.jpg";

export default function Services() {
  return (
    <Wrapper id="services">
      {/* <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div> */}
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                img={ProjectImgm}
                title="Wordpress"
                subtitle=" We handles Both front-end and back-end development, including plug-ins and security updates, fall under their purview. Website architecture is established and guided by WordPress experts, resulting in visually appealing and streamlined websites. "
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="ReactJS"
                subtitle="Utilizing React.js to create new user-facing features.
                creating front-end libraries and reusable components for future use.
                converting wireframes and designs into excellent code, enhancing performance of components over a wide range of web-capable devices and browsers."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="React-Native"
                subtitle="Utilizing React.js to create new user-facing features.
                creating front-end libraries and reusable components for future use.
                converting wireframes and designs into excellent code.
                
                enhancing performance of components over a wide range of web-capable devices and browsers."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="Three.JS"
                subtitle="Is Three Js worth learning?
                Three. js is a powerful library that many web developers are including in their projects to give their website that three-dimensional edge. It's incredibly easy to use, and we're sure that you'll find somewhere on your site to throw in a 3D model or two, so make sure to look more into Three."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
