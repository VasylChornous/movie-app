import { Link, NavLink } from "react-router-dom";
import netflixLogo from "../../images/netflix.svg";
import { FaHeart, FaSearch } from "react-icons/fa";
import { CgUser } from "react-icons/cg";

const NavBar = () => {
  const hover = "hover:text-subMain transition text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);
  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-1 grid-cols-7 justify-between items-center">
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src={netflixLogo}
                alt="logo"
                className="w-full h-12 object-contain"
              />
            </Link>
          </div>
          <div className="col-span-3">
            <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4">
              <button
                type="submit"
                className="bg-subMain w-12 flex-colo h-12 rounded text-white "
              >
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search Movie Name from here"
                className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
              />
            </form>
          </div>
          <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <NavLink
              to="/movies"
              className="hover:text-subMain transition text-white"
            >
              Movies
            </NavLink>
            <NavLink
              to="/about-us"
              className={Hover}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              className={Hover}
            >
              Contact Us
            </NavLink>
            <NavLink to="/login">
              <CgUser className="w-8 h-8" />
            </NavLink>
            <NavLink
              to="/favorite"
              className={Hover}
            >
              <div className="flex flex-col-reverse justify-center items-center gap-1 absolute top-4">
                <FaHeart className="w-6 h-6" />
                <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white">
                  3
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
