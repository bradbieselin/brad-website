import { FC } from "react";
import Head from "next/head";
import NavBar from "../navbar";
import { NavBarInterface } from "../../lib/contentful/interface";

export interface LayoutProps {
  navBar: NavBarInterface;
}

const Layout: FC<LayoutProps> = ({ children, navBar }) => {
  return (
    <div className="Layout">
      <Head>
        <title>Brad Bieselin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      <NavBar navBar={navBar} />
      {children}
      <style jsx>
        {`
          .Layout {
            height: 100vh;
            background-color: black;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
