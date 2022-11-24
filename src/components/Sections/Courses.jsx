import React from "react";

import styled from "styled-components";

// Components
import ProjectBox from "../Elements/ProjectBox";
// import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../../src/assets/img/projects/wordPress.jpg";
import ProjectImg2 from "../../assets/img/projects/front-end.jpg";
import ProjectImg3 from "../../assets/img/projects/Seo.jpg";
import ProjectImg4 from "../../assets/img/projects/React.jpg";
import ProjectImg5 from "../../assets/img/projects/freelancing.jpg";
import ProjectImg6 from "../../assets/img/projects/appdev.jpg";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <Wrapper id="Courses">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="Course-heading">Courses For You </h1>
            <p className="courses-Details">
              The Courses we offer are of 3 to 6 months.All the course details
              are given,further Contact US for any query.
            </p>
          </HeaderInfo>
          <div className="row textCenter img-size">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 stylelink3">
              <ProjectBox
                img={ProjectImg1}
                title="Wordpress"
                text="This three-month project-based course teaches students how to create WordPress plugins and themes from scratch. The course begins with an introduction to and installation of WordPress, then goes into the fundamentals of PHP programming and MySql databases for creating WordPress plugins. The course then goes into great detail on WordPress plugin development and theme activation and modification. It features Post Types, Taxonomies, HTTP APIs, Hooks, Shortcodes, and WordPress Corns."
              />
              <Link className="linkstyle" target="_top" to={"/wordpress"}>
                Apply Now
              </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 stylelink2">
              <ProjectBox
                img={ProjectImg2}
                title="Front-End Dev"
                text="You will learn how to create responsive and interactive websites as well as the front-end web development for an enterprise application in this project-based course. It includes JavaScript & jQuery for more interactive and rich Web UI, BootStrap for building responsive and elegant websites, HTML5 & CSS3 for generating beautiful web pages, AJAX & JSON for consuming REST Services, and more."
              />
              <Link className="linkstyle" target="_top" to={"/front"}>
                Apply Now
              </Link>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 stylelink2">
              <ProjectBox
                img={ProjectImg3}
                title="SEO & Digital Marketing"
                text="This Digital Marketing & SEO course by Heytec Trainings will prepare you for a successful career with a comprehensive take on digital marketing and a strong emphasis on the application of theory to practice, in subject areas such as online advertising, social media, content marketing, as well as professionals working in marketing across public, private and voluntary sectors seeking specialist knowledge and career development."
              />
              <Link className="linkstyle" target="_top" to={"/seo"}>
                Apply Now
              </Link>
            </div>
          </div>
          <div className="row textCenter img-size">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 stylelink">
              <ProjectBox
                className="projext"
                img={ProjectImg4}
                title="ReactJs"
                text="The React.JS Course contains basic elements like introduction, JSX overview, Environmental setup, real-time applications, forms and UI, Component Lifecycle, Event Handling, and Styles along with advanced features such as router and navigations, Flux, Redux, and Unit testing methods"
              />
              <Link
                className="linkstyle"
                target="_top"
                to={"/reactjs"}
                style={{}}
              >
                Apply Now
              </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 stylelink3">
              <ProjectBox
                img={ProjectImg5}
                title="Freelancing Training"
                text=" The goal of this program is to equip individuals to market their skills in international marketplaces. This core skill set will equip learners with a starting point for their freelancing career, in which they will learn the proper bidding techniques, understanding payment modules, and working on these platforms."
              />
              <Link className="linkstyle" target="_top" to={"/lancing"}>
                Apply Now
              </Link>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 stylelink3">
              <ProjectBox
                img={ProjectImg6}
                title="Andoid & IOS App Dev"
                text="The goal of this course is to help students get started as an Android & IOS engineer without any programming background. After successfully completing the Course, you will have sufficient experience and knowledge  to develop an Android APP & IOS APP development of your own and will get Institute Certication."
              />
              <Link className="linkstyle" target="_top" to={"/appdev"}>
                Apply Now
              </Link>
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0px", width: "20%" }}>
              {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <AddLeftInner>
                  <ImgWrapper className="flexCenter">
                    <img className="radius8" src={AddImage2} alt="add" />
                  </ImgWrapper>
                </AddLeftInner>
              </AddLeft>
              <AddRight>
                <h4 className="font15 semiBold">A few words about company</h4>
                <h2 className="font40 extraBold">A Study of Creativity</h2>
                <p className="font12">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum.
                </p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <div style={{ width: "190px" }}>
                    <FullButton
                      title="Get Started"
                      action={() => alert("clicked")}
                    />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton
                      title="Contact Us"
                      action={() => alert("clicked")}
                      border
                    />
                  </div>
                </ButtonsRow>
              </AddRight>
            </Advertising>
          </div>
        </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

export default Courses;
// import AddImage2 from "../../assets/img/add/add2.png";

// const Advertising = styled.div`
//   padding: 100px 0;
//   margin: 100px 0;
//   position: relative;
//   @media (max-width: 1160px) {
//     padding: 60px 0 40px 0;
//   }
//   @media (max-width: 860px) {
//     flex-direction: column;
//     padding: 0 0 30px 0;
//     margin: 80px 0 0px 0;
//   }
// `;
// const ButtonsRow = styled.div`
//   @media (max-width: 860px) {
//     justify-content: space-between;
//   }
// `;
// const AddLeft = styled.div`
//   position: relative;
//   width: 50%;
//   p {
//     max-width: 475px;
//   }
//   @media (max-width: 860px) {
//     width: 80%;
//     order: 2;
//     text-align: center;
//     h2 {
//       line-height: 3rem;
//       margin: 15px 0;
//     }
//     p {
//       margin: 0 auto;
//     }
//   }
// `;
// const AddRight = styled.div`
//   width: 50%;
//   @media (max-width: 860px) {
//     width: 80%;
//     order: 2;
//   }
// `;
// const AddLeftInner = styled.div`
//   width: 100%;
//   position: absolute;
//   top: -300px;
//   left: 0;
//   @media (max-width: 1190px) {
//     top: -250px;
//   }
//   @media (max-width: 920px) {
//     top: -200px;
//   }
//   @media (max-width: 860px) {
//     order: 1;
//     position: relative;
//     top: -60px;
//     left: 0;
//   }
// `;
// const ImgWrapper = styled.div`
//   width: 100%;
//   padding: 0 15%;
//   img {
//     width: 100%;
//     height: auto;
//   }
//   @media (max-width: 400px) {
//     padding: 0;
//   }
// `;
