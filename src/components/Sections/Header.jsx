import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import BannerImage from "../../assets/img/banner-image.png";
// // import QuotesIcon from "../../assets/svg/Quotes";
// import Dots from "../../assets/svg/Dots";
import Typewriter from "typewriter-effect";
// import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="static">Skills For You!</h1>
          <div className="typingtext">
            <Typewriter
              options={{
                strings: [
                  "Wordpress",
                  "Front-End Dev",
                  "SEO & Digital Marketing",
                  "ReactJs",
                  "Freelancing Training",
                  "Android & IOS App Dev",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <HeaderP className="font13 semiBold">
            One of the most reputable and top-rated IT schools in Lahore,
            <strong>HEYTEC IT Trainings</strong> offers outstanding courses,
            trainings, and much more. We have introduced many IT trends,
            training programmes, and certifications to Lahore. The goal of the
            <strong> HEYTEC IT </strong> short courses is to offer the best
            programmes to everyone with outcomes that are guaranteed.
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Get Started" />
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="banner-img"
            src={BannerImage}
            alt="office"
            style={{ zIndex: 9 }}
          />
          {/* <QuoteWrapper className="flexCenter darkBg radius8">
            <div>
              <p className="font15 whiteColor">
                <em>"THE MORE YOU LEARN THE MORE YOU EARN".</em>
              </p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper> */}
        </ImageWrapper>
        {/* <GreyDiv className="lightBg"></GreyDiv> */}
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
// const GreyDiv = styled.div`
//   width: 30%;
//   height: 700px;
//   position: absolute;
//   top: 0;
//   right: 0;
//   z-index: 0;
//   @media (max-width: 960px) {
//     display: none;
//   }
// `;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
// const QuoteWrapper = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 50px;
//   max-width: 330px;
//   padding: 30px;
//   z-index: 99;
//   @media (max-width: 960px) {
//     left: 20px;
//   }
//   @media (max-width: 560px) {
//     bottom: -50px;
//   }
// `;
// const QuotesWrapper = styled.div`
//   position: absolute;
//   left: -20px;
//   top: -10px;
// `;
// const DotsWrapper = styled.div`
//   position: absolute;
//   right: -100px;
//   bottom: 100px;
//   z-index: 2;
//   @media (max-width: 960px) {
//     right: 100px;
//   }
//   @media (max-width: 560px) {
//     display: none;
//   }
// `;
