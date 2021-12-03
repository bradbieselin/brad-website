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
            justify-content: flex-end;
            width: 100%;
            color: white;
            position: fixed;
            top: 2rem;
            right: 2rem;
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;
