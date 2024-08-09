import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import handbuger from "../../assets/icons/handbuger.svg";
import close from "../../assets/icons/close.svg";
import { useState } from "react";

const NavBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar((prevbar) => !prevbar);
  };

  const closeSidebar = () => {
    setSidebar(false);
  };

  return (
    <>
      {/* Mobile Nav Bar */}
      <div className=" lg:hidden flex justify-between items-center  px-4 py-[1rem] bg-secondary-dark text-[#FFFFFF]">
        <div className="">
          <Link to="/" className="flex items-center" onClick={closeSidebar}>
            <img
              src={logo}
              alt="My Balance Logo"
              className="cursor-pointer w-[100px] h-[50px] "
            />
            {/* <p className="text-primary-light">rent2own</p> */}
          </Link>
        </div>
        <div>
          {sidebar == false ? (
            <NavLink to="#">
              <img
                src={handbuger}
                alt="menu"
                onClick={showSidebar}
                className="w-7 h-7"
              />
            </NavLink>
          ) : (
            <NavLink to="#">
              <img
                src={close}
                alt="menu"
                onClick={showSidebar}
                className="w-7 h-7"
              />
            </NavLink>
          )}
        </div>
      </div>
      {sidebar == true && <hr className=" lg:hidden block " />}
      <div
        className={`lg:hidden block font-light ${
          sidebar
            ? "navMenu right-0 duration-300"
            : "navMenu -right-full duration-700"
        }`}
      >
        <nav>
          <ul className="lg:flex block p-4">
            <li className="mb-7">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#1C6CDB] mb-6"
                    : "text-[#FFFFFF] hover:text-[#1C6CDB] transition-all mb-6"
                }
                onClick={closeSidebar}
              >
                Home
              </NavLink>
            </li>
            <li className="mb-7">
              <a
                href="#howitworks"
                className="text-[#FFFFFF] hover:text-[#1C6CDB] transition-all mb-6"
                onClick={closeSidebar}
              >
                How it works
              </a>
            </li>
            <li className="mb-7">
              <a
                href="#contact"
                className="text-[#FFFFFF] hover:text-[#1C6CDB] transition-all mb-6"
                onClick={closeSidebar}
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="/#faq"
                id="contact-link"
                className="text-[#FFFFFF] hover:text-[#1C6CDB] transition-all mb-6"
                onClick={closeSidebar}
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>

        <hr className=" lg:hidden block my-2 " />

        <div className="flex flex-col items-center justify-center gap-6 p-5">
          <button
            className="bg-primary-light py-2 px-[4rem] w-full rounded-[10px] mt-5"
            onClick={closeSidebar}
          >
            <Link to="/sign-up">Register</Link>
          </button>
          <p
            className="cursor-pointer text-primary-light"
            onClick={closeSidebar}
          >
            <Link to="/sign-in">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
