import { FC } from "react";
import Fade from "react-reveal/Fade";

export interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return (
    <div className="Landing" id="landing">
      <Fade>
        <div className="Landing__ImageContainer">
          <img
            src="/Headshot.jpg"
            className="Landing__Image"
            alt="Headshot of Brad Bieselin"
          />
        </div>
      </Fade>
      <Fade>
        <div className="Landing__TextContainer">
          <div className="Landing__TextBox">
            <div className="Landing__TextName">Brad Bieselin</div>
            <div className="Landing__TextFreelance">
              -Freelance Web Developer
            </div>
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
            <div className="Landing__ResumeContainer">
              <button className="Landing__ResumeButton">
                <a
                  href="/Bradley_Bieselin_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`Brad's Resume`}
                </a>
              </button>
            </div>
          </div>
        </div>
      </Fade>
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
            padding-bottom: 0.5rem;
            font-size: 12px;
          }
          .Landing__TextName {
            flex-wrap: wrap;
            text-align: Landing__Text__Freelance;
            color: white;
            padding-bottom: 0.5rem;
            font-size: 50px;
          }
          .Landing__TextFreelance {
            flex-wrap: wrap;
            text-align: left;
            color: white;
            padding-bottom: 0.5rem;
            font-size: 25px;
          }
          .Landing__TextCompany {
            flex-wrap: wrap;
            text-align: left;
            color: white;
            padding-bottom: 0.5rem;
            font-size: 25px;
          }
          .Landing__TextCompanyRole {
            flex-wrap: wrap;
            text-align: left;
            color: white;
            padding-bottom: 0.5rem;
            font-size: 25px;
          }
          .Landing__TextSchool {
            flex-wrap: wrap;
            text-align: left;
            color: white;
            padding-bottom: 0.5rem;
            font-size: 18px;
          }
          .Landing__TextContainer {
            padding-left: 2rem;
            padding-right: 2rem;
            padding-top: 4rem;
            padding-bottom: 8rem;
            width: 100%;
          }
          @media (min-width: 1025px) {
            .Landing {
              width: 100%;
              height: 100%;
              display: flex;
            }
            .Landing__ImageContainer {
              width: 50%;
              display: flex;
              justify-content: right;
            }
            .Landing__Image {
              border-radius: 50%;
              padding-bottom: 4rem;
              width: auto;
              height: auto;
            }
            .Landing__TextContainer {
              width: 50%;
              height: 100%;
            }
            .Landing__TextBox {
              padding-top: 18rem;
              padding-left: 2rem;
            }
            .Landing__Text {
              text-align: center;
              color: white;
            }
            .Landing__ResumeButton {
              margin-top: 1rem;
              outline: 0;
            }
            .Landing__ResumeButton:hover {
              cursor: pointer;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Landing;
