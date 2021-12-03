import { FC } from "react";
import NavItems from "../nav-items";

export interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
    <div className="NavBar">
      <NavItems />
      <style jsx>
        {`
          .NavBar {
            display: flex;
            justify-content: space-between;
            width: 100%;
            color: white;
            position: fixed;
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;
