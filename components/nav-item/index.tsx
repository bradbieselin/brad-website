import { FC } from "react";
import Link from 'next/link';

export interface NavItemProps {
  link: string;
  linkLabel: string;
}

const NavItem: FC<NavItemProps> = ({ link, linkLabel}) => {
  return (
    <div className="NavItem">
      <Link href={link}>
        <a>
          {linkLabel}
        </a>
      </Link>
      <style jsx>
        {`
          .NavText {
            padding-right: 0.5rem;
          }
          .NavText:hover {
            text-decoration: underline;
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
