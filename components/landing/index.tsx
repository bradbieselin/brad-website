import { FC } from "react";
import Image from "next/image";

export interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return (
    <div className="Landing">
      <div className="MyImage">
        <img src="/Headshot.jpg" />
      </div>
      <div className="LandingText">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore nam
        possimus doloremque sunt! Esse, hic alias harum a molestias ea enim
        soluta vero sed! Labore quod deserunt ducimus ratione explicabo!
      </div>
      <style jsx>
        {`
          .Landing {
            color: white;
          }
          .MyImage {
            margin-left: auto;
            margin-right: auto;
            display: block;
            margin-bottom: 2rem;
          }
          .LandingText {
            padding-left: 2rem;
            padding-right: 2rem;
            text-align: center;
          }
          @media (min-width: 1025px) {
            .Landing {
              display: flex;
              width: 100%;
              height: 100%;
              color: white;
              align-items: center;
            }
            .MyImage {
              margin-left: auto;
              margin-right: auto;
              width: 80rem;
              height: auto;
            }
            .LandingText {
              width: 50%;
              text-align: center;
              padding-right: 5rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Landing;
