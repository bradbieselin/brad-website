import { FC } from "react";
import Image from "next/image";

export interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return (
    <div className="Landing">
      <div className="Landing__ImageContainer">
        <img src="/Headshot.jpg" className="Landing__Image" />
      </div>
      <div className="Landing__TextContainer">
        <div className="Landing__TextName">Brad Bieselin</div>
        <div className="Landing__TextFreelance">-Freelance Web Developer</div>
        <div className="Landing__TextCompany">-Company: Witbe Inc</div>
        <div className="Landing__TextCompanyRole">
          -Position: Project Manager
        </div>
        <div className="Landing__TextSchool">
          -2019 B.S. Computer Science Graduate
        </div>
        <div className="Landing__TextLong">
          -Experience in professional and academic environments
        </div>
      </div>
      <style jsx>
        {`
          .Landing {
            width: 100%;
            background: black;
          }
          .Landing__Image {
            padding-top: 7rem;
            width: 100%;
            height: auto;
          }
          .Landing__Text {
            flex-wrap: wrap;
            text-align: center;
            color: white;
            padding-bottom: 1rem;
          }
          .Landing__TextLong {
            flex-wrap: wrap;
            text-align: left;
            color: white;
            padding-bottom: 1rem;
            font-size: 12px;
          }
          .Landing__TextName {
            flex-wrap: wrap;
            text-align: Landing__Text__Freelance;
            color: white;
            padding-bottom: 1rem;
            font-size: 50px;
          }
          .Landing__TextFreelance {
            flex-wrap: wrap;
            text-align: left;
            color: white;
            padding-bottom: 1rem;
            font-size: 25px;
          }
          .Landing__TextCompany {
            flex-wrap: wrap;
            text-align: left;
            color: white;
            padding-bottom: 1rem;
            font-size: 25px;
          }
          .Landing__TextCompanyRole {
            flex-wrap: wrap;
            text-align: left;
            color: white;
            padding-bottom: 1rem;
            font-size: 25px;
          }
          .Landing__TextSchool {
            flex-wrap: wrap;
            text-align: left;
            color: white;
            padding-bottom: 1rem;
            font-size: 18px;
          }
          .Landing__TextContainer {
            padding-left: 2rem;
            padding-right: 2rem;
            padding-top: 2rem;
            padding-bottom: 8rem;
            width: 100%;
          }
          @media (min-width: 1025px) {
            .Landing {
              display: flex;
              width: 100%;
              height: 100%;
              align-items: center;
            }
            .Landing__ImageContainer {
              margin-left: auto;
              margin-right: auto;
              width: 80rem;
              height: auto;
            }
            .Landing__Image {
              padding-top: 5rem;
              width: 100%;
              height: auto;
              padding-left: 20rem;
            }
            .Landing__TextContainer {
              padding-left: 10rem;
              padding-top: 15rem;
            }
            .Landing__Text {
              padding-right: 20rem;
              text-align: center;
              color: white;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Landing;
