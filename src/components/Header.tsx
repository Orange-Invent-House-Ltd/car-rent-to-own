import { Link, NavLink } from "react-router-dom";
import carR from "../assets/images/carR.png";
import logo from "../assets/images/logo.jpg";
import NavBar from "./resueable/NavBar";

const Header = () => {
  return (
    <>
      <div className="">
        <NavBar />
      </div>
      {/*  */}
      <header className=" bg-secondary-dark bg-[url('assets/images/net.png')]   l md:min-h-full w-full min-h-[333px] lg:pb-0 pb-[1rem] mb-[3rem]">
        <div className="lg:flex hidden justify-between items-center lg:pl-[15%] pl-4 lg:pr-[10%] pr-2 py-[1.5rem] font-light text-[#FFFFFF]  ">
          <div className="">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="My Balance Logo"
                className="cursor-pointer w-[100px] h-[50px] "
              />
              {/* <p className="text-primary-light">rent2own</p> */}
            </Link>
          </div>

          <nav>
            <ul className="flex gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#1C6CDB]"
                      : "text-[#FFFFFF] hover:text-[#1C6CDB] transition-all"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <a
                  href="#howitworks"
                  id=""
                  className="text-[#FFFFFF] hover:text-[#1C6CDB] transition-all"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  id="contact-link"
                  className="text-[#FFFFFF] hover:text-[#1C6CDB] transition-all"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  id="contact-link"
                  className="text-[#FFFFFF] hover:text-[#1C6CDB] transition-all"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex  items-center justify-between gap-10">
            <p className="cursor-pointer">
              <Link to="/sign-in">Sign in</Link>
            </p>
            <button className="bg-primary-light py-3 px-[4rem] rounded-[16px] ">
              <Link to="/sign-up">Register</Link>
            </button>
          </div>
        </div>
        <div className="lg:flex block items-center  md:pl-[12%] md:pr-[2%] w-full">
          <div className=" min-h-full pt-3 flex-1 mb-[2rem] headertxt">
            <div className=" md:text-start text-center">
              <h1 className="md:text-[72px] text-[30px] text-[#FFFFFF] mb-0 md:mb-[-16px] font-bold">
                If You Can
                <span className="text-[#1C6CDB]"> Rent It</span>,
              </h1>
              <h1 className="md:text-[72px] text-[30px] text-[#FFFFFF] font-bold">
                You Can
                <span className="text-[#1C6CDB]"> Own It</span>!
              </h1>
              <div className="md:w-[60%] font-[300] md:px-0 px-[4rem]">
                <p className="text-wrap text-[#FFFFFF] md:text-[14px] text-[12px] mt-2">
                  Rent-to-own (RTO) is a flexible option that allows individuals
                  to lease a vehicle with the option to purchase it after a
                  certain period.
                </p>
              </div>
              <button className="bg-[#FAFAFA] p-2 rounded-md mt-4 text-[13px] w-[120px]">
                Read more
              </button>
            </div>
          </div>
          <div className="flex-1 ">
            <img src={carR} alt="" className=" lg:w-full w-[70%] mx-auto" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
