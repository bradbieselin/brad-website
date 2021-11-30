import { FC } from "react";
import NavItems from "../nav-items";

export interface NavBarProps { };

const NavBar: FC<NavBarProps> = () => {
    return (
        <div className="NavBar">
            <NavItems />
            <style jsx>{`
                .NavBar {
                    display: flex;
                    justify-content: flex-end;
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