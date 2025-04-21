import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import NavLinks from "./NavLinks";

const NavBar = ({ OpenSideBar }) => {
  return (
    <header className="flex items-center justify-between bg-white px-3 py-3">
      <div className="">
        <Link to={'/'}>
          <img
            className="h-[60px] w-[130px] cursor-pointer"
            src={logo}
            alt="LSUDS LOGO"
          />
        </Link>
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
