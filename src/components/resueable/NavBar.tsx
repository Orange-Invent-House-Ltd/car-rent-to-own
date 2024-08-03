import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import handbuger from "../../assets/icons/handbuger.svg";
import close from "../../assets/icons/close.svg";
import { useState } from "react";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar((prevbar) => !prevbar);
  };
  //
  return (
    <>
      {/* Desktop View */}
      <div className="md:flex hidden justify-between items-center md:pl-[15%] pl-4 md:pr-[10%] pr-2 py-[1.5rem] font-light bg-secondary-dark mx-6 text-[#FFFFFF]  rounded-tr-[23px] rounded-tl-[23px] ">
        <div className="">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="My Balance Logo" className="cursor-pointer" />
            <p className="text-primary">rent2own</p>
          </Link>
        </div>

        <nav>
          <ul className="md:flex block  gap-8">
            {navData?.map((item: any, index: any) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1C6CDB]"
                      : "text-[#FFFFFF] hover:text-[#1C6CDB] transition-all"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:flex block  items-center justify-between gap-10">
          <p className="cursor-pointer">
            <Link to="sign-in">Sign in</Link>
          </p>
          <button className="bg-primary py-3 px-[4rem] rounded-[16px] ">
            <Link to="sign-up">Join us today</Link>
          </button>
        </div>
      </div>
      {/*  */}
      {/* Mobile Nav Bar */}
      <div className=" md:hidden flex justify-between items-center  px-4    py-[1rem] bg-secondary-dark text-[#FFFFFF]   ">
        <div className="">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="My Balance Logo" className="cursor-pointer" />
            <p className="text-primary">rent2own</p>
          </Link>
        </div>
        <div>
          {sidebar == false ? (
            <NavLink to="#">
              <img
                src={handbuger}
                alt="menue"
                onClick={showSidebar}
                className="w-7 h-7"
              />
            </NavLink>
          ) : (
            <NavLink to="#">
              <img
                src={close}
                alt="menue"
                onClick={showSidebar}
                className="w-7 h-7"
              />
            </NavLink>
          )}
        </div>
      </div>
      {sidebar == true && <hr className=" md:hidden block " />}
      <div
        className={`md:hidden block font-light   ${
          sidebar
            ? "navMenu right-0 duration-300"
            : "navMenu -right-full duration-700"
        } `}
      >
        <nav>
          <ul className="md:flex block  p-4">
            {navData?.map((item: any) => (
              <li key={item.id} className="mb-6">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1C6CDB]"
                      : "text-[#FFFFFF] hover:text-[#1C6CDB] transition-all"
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <hr className=" md:hidden block my-2 " />

        <div className="flex flex-col  items-center justify-center gap-6  p-5">
          <button className="bg-primary py-2 px-[4rem] w-full rounded-[10px] mt-5">
            <Link to="/sign-up">Join us today</Link>
            Join us today
          </button>
          <p className="cursor-pointer text-primary ">
            <Link to="/sign-in">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;

const navData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "How it works",
    path: "/how-it-works",
  },
  {
    id: 3,
    name: "Contact us",
    path: "/contact-us",
  },
];
