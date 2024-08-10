import { Link } from "react-router-dom";
import footerlogo from "../assets/images/logo.jpg";
import { appStores, socialLinks } from "./resueable/HomeDatas";

const Footer = () => {
  return (
    <footer className="lg:px-[6rem] px-2 py-9 w-full bg-[#FFF] footerpad">
      <div className="md:flex block justify-between items-center md:px-[2rem] p-0   ">
        <div className="">
          <div className="md:w-[50%] w-full">
            {" "}
            <Link to="/" className="flex items-center">
              <img
                src={footerlogo}
                alt="My Balance Logo"
                className="cursor-pointer w-[20%] "
              />
              <p className="text-primary">Rent2OwnAuto</p>
            </Link>
            <p className="text-wrap md:text-[15px] text-[16px] mt-2 font-light">
              Rent-to-own (RTO) is a flexible option that allows individuals to
              lease a vehicle with the option to purchase it after a certain
              period.
            </p>
          </div>
          {/* desktop */}
          <ul className="md:flex hidden gap-5 items-center mt-8">
            <li className="mb-7">
              <Link className="underline" to="/sign-up">
                Register
              </Link>
            </li>
            <li className="mb-7">
              <Link className="underline" to="/sign-in">
                Sign in
              </Link>
            </li>
            <li className="mb-7">
              <Link className="underline" to="/">
                Home
              </Link>
            </li>
            <li className="mb-7">
              <a href="#howitworks" className=" transition-all mb-6 underline">
                How it works
              </a>
            </li>
            <li className="mb-7">
              <a href="/#contact" className=" transition-all mb-6 underline">
                Contact us
              </a>
            </li>
            <li className="mb-7">
              <a href="/#faq" className=" transition-all mb-6 underline">
                FAQ
              </a>
            </li>
          </ul>
          {/* mobile */}
          <ul className="md:hidden flex items-start gap-5  mt-8">
            <div className="flex-1">
              <li className="mb-4">
                <Link to="/" className="underline">
                  Sign up
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="underline">
                  Sign in
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="underline">
                  Home
                </Link>
              </li>
            </div>
            <div className="flex-1">
              <li className="mb-4">
                <a href="/#howitworks" className="underline">
                  How it works
                </a>
              </li>
              <li className="mb-4">
                <a href="contact" className="underline">
                  Contact us
                </a>
              </li>
              <li className="mb-7">
                <a href="/#faq" className=" transition-all mb-6 underline">
                  FAQ
                </a>
              </li>
            </div>
          </ul>
        </div>
        <div className="lg:w-[25%] w-full md:block flex items-center md:mt-0 mt-10">
          {appStores?.map((item, index) => (
            <div className="w-[60%] flex items-start" key={item.id}>
              <Link to={item.path}>
                <img
                  src={item.icon}
                  alt=""
                  className={`rounded-[9px] ${
                    index === 1 ? "w-[100%] " : "w-[100%] p-2"
                  }`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Desktop */}
      <div className="  mt-[4rem] px-[2rem] pb-6 md:flex hidden justify-between items-end border-t border-t-gray-300 ">
        <p className=" text-[16px]  ">
          &copy; 2024 Rent2OwnAuto. All rights reserved.
        </p>
        <ul className="flex gap-5 items-center mt-8">
          {socialLinks?.map((item) => (
            <li key={item.id} className="">
              <Link to={item.path} className="underline">
                <img src={item.icon} alt="" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile */}
      <div className="  mt-[4rem] pb-6 block md:hidden  border-t border-t-gray-300 ">
        <ul className="flex gap-5 items-center mt-8 w-full">
          {socialLinks?.map((item) => (
            <li key={item.id} className="">
              <Link to={item.path} className="underline">
                <img src={item.icon} alt="" />
              </Link>
            </li>
          ))}
        </ul>
        <p className=" text-[16px] mt-7">
          &copy; 2024 Rent2OwnAuto. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
