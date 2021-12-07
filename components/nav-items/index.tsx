import { FC } from "react";

export interface NavItems {}

const NavItems: FC<NavItems> = () => {
  return (
    <div className="NavItem">
      <div className="NavText">home</div>
      <div className="NavText">experience</div>
      <div className="NavText">resume</div>
      <div className="NavText">contact</div>

      <style jsx>
        {`
          .NavText {
            padding-right: 0.5rem;
          }
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

export default NavItems;
