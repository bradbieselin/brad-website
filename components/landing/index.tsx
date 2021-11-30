import { FC } from "react";

export interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return (
    <div className="Landing">
      <div className="MyImage">Hello</div>
      <div className="LandingText">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore nam
        possimus doloremque sunt! Esse, hic alias harum a molestias ea enim
        soluta vero sed! Labore quod deserunt ducimus ratione explicabo!
      </div>
      <style jsx>
        {`
          .Landing {
            display: flex;
            width: 100%;
            height: 100vh;
            color: white;
            justify-content: center;
            align-items: center;
          }
          .MyImage {
            width: 50%;
            text-align: center;
          }
          .LandingText {
            width: 50%;
            text-align: center;
            padding-right: 5rem;
          }
        `}
      </style>
    </div>
  );
};

export default Landing;
