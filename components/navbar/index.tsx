import { FC } from "react";
import NavItems from "../nav-items";

export interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
    <div className="NavBar">
      <header className="NavBar__Header">
        <nav>
          <ul className="NavBar__UL">
            <NavItems />
          </ul>
        </nav>
      </header>
      <style jsx>
        {`
          .NavBar__UL {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
          .NavBar__Header {
            display: flex;
            justify-content: flex-end;
            flex-flow: row wrap;
            width: 100%;
            color: white;
            position: fixed;
            background-color: black;
            z-index: 10;
            margin: 0;
            padding-bottom: 1rem;
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;
