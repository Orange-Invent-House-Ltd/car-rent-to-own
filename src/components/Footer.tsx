import { Link } from "react-router-dom";
import footerlogo from "../assets/icons/footerlogo.svg";
import { appStores, footerData, socialLinks } from "./resueable/HomeDatas";

const Footer = () => {
  return (
    <footer className="md:px-[7rem] px-2 py-9 w-full bg-[#FFF]">
      <div className="md:flex block justify-between items-center md:px-[2rem] p-0   ">
        <div className="">
          <div className="md:w-[50%] w-full">
            {" "}
            <Link to="/" className="flex items-center">
              <img
                src={footerlogo}
                alt="My Balance Logo"
                className="cursor-pointer"
              />
              <p className="text-primary">rent2own</p>
            </Link>
            <p className="text-wrap md:text-[15px] text-[16px] mt-2 font-light">
              Rent-to-own (RTO) is a flexible option that allows individuals to
              lease a vehicle with the option to purchase it after a certain
              period.
            </p>
          </div>
          {/* desktop */}
          <ul className="md:flex hidden gap-5 items-center mt-8">
            {footerData?.map((item) => (
              <li key={item.id} className="">
                <Link to={item.path} className="underline">
                  {item.name}
                </Link>
              </li>
            ))}
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
                <Link to="/" className="underline">
                  How it works
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="underline">
                  Contact us
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className="md:w-[10%] w-full md:block flex gap-2 items-center md:mt-0 mt-10">
          {appStores?.map((item) => (
            <div
              className="bg-black text-[#fff] flex mb-4 rounded-[9px] md:px-2 px-3 py-1 "
              key={item.id}
            >
              <img src={item.icon} alt="" />
              <div className="ml-3 ">
                <p className="font-light text-[12px] leading-3">{item.title}</p>
                <p className=" text-[18px]">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Desktop */}
      <div className="  mt-[4rem] px-[2rem] pb-6 md:flex hidden justify-between items-end border-t border-t-gray-300 ">
        <p className=" text-[16px]  ">
          &copy; 2024 CarRentToOwn. All rights reserved.
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
          &copy; 2024 CarRentToOwn. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
