import { FC } from "react";
import NavItem from "../nav-item";

const navItems = [
  {
    link: "landing",
    label: "home",
  },
  {
    link: "experience",
    label: "experience",
  },
  {
    link: "#",
    label: "projects",
  },
  {
    link: "contact",
    label: "contact",
  },
];

export interface NavBarProps {}

const NavBar: FC<NavBarProps> = () => {
  return (
    <nav className="NavBar">
      {navItems.map(({ link, label }, index) => (
        <NavItem link={link} label={label} key={index} />
      ))}
    </nav>
  );
};

export default NavBar;
