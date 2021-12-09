import { FC } from "react";

export interface NavItems {}

const NavItems: FC<NavItems> = () => {
  return (
    <div className="NavItem">
      <a href="#landing">
        <div className="NavText">home</div>
      </a>
      <a href="#experience">
        <div className="NavText">experience</div>
      </a>
      <a href="#">
        <div className="NavText">projects</div>
      </a>
      <a href="#contact">
        <div className="NavText">contact</div>
      </a>

      <style jsx>
        {`
          .NavText {
            padding-right: 0.5rem;
          }
          .NavText:hover {
            text-decoration: underline;
            cursor: pointer;
          }
          .NavItem {
            display: flex;
            padding-top: 1rem;
            padding-left: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default NavItems;
