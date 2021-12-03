import { FC } from "react";

export interface NavItems {}

const NavItems: FC<NavItems> = () => {
  return (
    <div className="NavItem">
      <div className="NavText">hello</div>
      <div className="NavText">hello</div>

      <style jsx>
        {`
          .NavText {
            padding-right: 1rem;
            text-decoration: underline;
          }
          .NavItem {
            display: flex;
          }
        `}
      </style>
    </div>
  );
};

export default NavItems;
