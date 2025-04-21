import { Link, useLocation, useResolvedPath } from "react-router-dom";
import { useUser } from "../context/User";

const NavLinks = ({ isMobileNav, closeSideBar }) => {
  const { currentUser } = useUser();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav>
      <ul
        className={isMobileNav ? `mobileNavLinkStyle` : `desktopNavLinksStyle`}
      >
        <li>
          <Link
            onClick={closeSideBar}
            className={`${pathname === "/" ? "text-softBlue" : "text-black"}`}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={closeSideBar}
            className={`${pathname === "/events" ? "text-softBlue" : "text-black"}`}
            to={"/events"}
          >
            Events
          </Link>
        </li>
        <li>
          <Link
            onClick={closeSideBar}
            className={`${pathname === "/about" ? "text-softBlue" : "text-black"}`}
            to={"/about"}
          >
            About Us
          </Link>
        </li>
        <li>
          <a
            onClick={closeSideBar}
            href="https://lasudebatesociety.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
        <li>
          <Link onClick={closeSideBar} to={"/#contact"}>
            Contact Us
          </Link>
        </li>
        {pathname !== "/admin" && (
          <li>
            {currentUser ? (
              <Link onClick={closeSideBar} to="/admin">
                Admin
              </Link>
            ) : (
              <Link onClick={closeSideBar} to="/signin">
                Sign In
              </Link>
            )}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavLinks;
