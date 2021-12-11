import { FC } from "react";
import { Link } from "react-scroll";

export interface NavItem {
  link: string;
  label: string;
}

const NavItem: FC<NavItem> = ({ link, label }) => {
  return (
    <div className="NavItem">
      <Link to={link} smooth={true}>
        {label}
      </Link>

      <style jsx>
        {`
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

export default NavItem;
