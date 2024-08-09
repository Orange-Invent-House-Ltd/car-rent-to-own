import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

const DesktopNavbar = () => {
  return (
    <div>
      <div className="lg:flex hidden justify-between items-center lg:pl-[15%] pl-4 lg:pr-[10%] pr-2 py-[1.5rem] font-light bg-secondary-dark mx-6 text-[#FFFFFF]  rounded-tr-[23px] rounded-tl-[23px] ">
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
          <ul className="lg:flex block  gap-8">
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
                href="/#howitworks"
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

        <div className="lg:flex block  items-center justify-between gap-10">
          <p className="cursor-pointer">
            <Link to="/sign-in">Sign in</Link>
          </p>
          <button className="bg-primary-light py-3 px-[4rem] rounded-[16px] ">
            <Link to="/sign-up">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
