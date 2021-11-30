import { FC } from "react";

export interface NavBarProps { };

const Links = ["Home", "About", "Resume", "Contact"];

const NavBar: FC<NavBarProps> = () => {
    return (
        <div className="NavBar">
            Hello
            <style jsx>{`
                .NavBar {
                    height: 5%;
                    width: 100%;
                    color: white;
                }
            `}
            </style>
        </div>
    );
};

export default NavBar;