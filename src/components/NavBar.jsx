import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import NavLinks from "./NavLinks";

const NavBar = ({ OpenSideBar }) => {
  return (
    <header className="bg-[#00123f] flex items-center justify-between py-3 px-3">
      <div className="">
        <img
          className="h-[60px] w-[130px] cursor-pointer"
          src={logo}
          alt="LSUDS LOGO"
        />
      </div>
      <NavLinks />
      {/* mobile hamburger */}
      <div
        onClick={OpenSideBar}
        className="hidden cursor-pointer flex-col gap-1 mobile:flex"
      >
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>
    </header>
  );
};

export default NavBar;
