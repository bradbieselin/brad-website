import { FC } from "react";
import { NavBarInterface } from "../../lib/contentful/interface";
import NavItem from "../nav-item";

export interface NavBarProps {
  navBar: NavBarInterface;
}

const NavBar: FC<NavBarProps> = ({ navBar }) => {
  return (
    <div className="NavBar">
      {navBar.navItems.map((data, index) => (
        <NavItem {...data.fields} key={index} />
      ))}
      <style jsx>
        {`
          .NavBar {
            display: flex;
            justify-content: space-between;
            width: 100%;
            color: white;
            position: fixed;
            background-color: black;
            z-index: 10;
            padding-bottom: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;
