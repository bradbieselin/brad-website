import { FC } from "react";
import { Link } from "react-scroll";

export interface NavItemProps {
  link: string;
  label: string;
}

const NavItem: FC<NavItemProps> = ({ link, label }) => {
  return (
    <div className="NavItem">
      <Link to={link} smooth={true}>
        {label}
      </Link>

      <style jsx>
        {`
          .NavItem {
            padding-top: 0.5rem;
            padding-right: 1rem;
            display: inline-block;
            float: left;
          }
          @media (min-width: 1025px) {
            .NavItem:hover {
              text-decoration: underline;
              cursor: pointer;
            }
            .NavItem {
              padding-top: 0.5rem;
              padding-right: 1rem;
              display: inline-block;
              float: left;
            }
          }
        `}
      </style>
    </div>
  );
};

export default NavItem;
