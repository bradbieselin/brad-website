import { FC } from "react";
import NavBar from "../nav-bar";

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="Header">
      <NavBar />
      <style jsx>
        {`
          .Header {
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
    </header>
  );
};

export default Header;
