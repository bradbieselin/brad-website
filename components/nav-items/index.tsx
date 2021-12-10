import { FC } from "react";
import { Link } from "react-scroll"

export interface NavItems { }

const NavItems: FC<NavItems> = () => {
  return (
    <div className="NavItem">
      <div className="NavText">
        <Link to="landing" smooth={true}>home</Link>
      </div>
      <div className="NavText">
        <Link to="experience" smooth={true}>experience</Link>
      </div>
      <div className="NavText">
        <Link to="#" smooth={true}>projects</Link>
      </div>
      <div className="NavText">
        <Link to="contact" smooth={true}>contact</Link>
      </div>

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
