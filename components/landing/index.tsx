import { FC } from "react";
import Image from "next/image";

export interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return (
    <div className="Landing">
      <div className="Landing__ImageContainer">
        <img src="/Headshot.jpg" className="Landing__Image" />
      </div>
      <div className="Landing__Text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore nam
        possimus doloremque sunt! Esse, hic alias harum a molestias ea enim
        soluta vero sed! Labore quod deserunt ducimus ratione explicabo!
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
            padding-top: 5rem;
            padding-left: 1rem;
            padding-right: 1rem;
            text-align: center;
            color: white;
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
              padding-top: 7rem;
              width: 100%;
              height: 50%;
            }
            .Landing__Text {
              width: 50%;
              text-align: center;
              padding-right: 5rem;
              color: white;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Landing;
