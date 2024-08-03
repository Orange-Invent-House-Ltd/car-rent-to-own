import carR from "../assets/images/carR.png";
import NavBar from "./resueable/NavBar";

const Header = () => {
  return (
    <>
      <div className="w-full ">
        <NavBar />
      </div>
      <header className="px-6">
        <div className="relative bg-secondary-dark md:w-full md:h-[730px] w-full min-h-[333px]  rounded-br-[23px] rounded-bl-[23px] rounded-tl-none rounded-tr-none overflow-hidden">
          <div className="flex items-center md:justify-center justify-start min-h-full pt-3 md:mt-[-7rem]">
            <div className="w-[713px] text-center">
              <h1 className="md:text-[72px] text-[30px] text-[#FFFFFF] mb-0 md:mb-[-16px] font-normal">
                If You Can
                <span className="text-[#1C6CDB]"> Rent It</span>,
              </h1>
              <h1 className="md:text-[72px] text-[30px] text-[#FFFFFF] font-normal">
                You Can
                <span className="text-[#1C6CDB]"> Own It</span>!
              </h1>
              <div className="md:px-[120px] px-5">
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
          <div className="w-full">
            <div className="absolute top-0 w-full ">
              <img
                src={carR}
                alt="Car facing left"
                className="scale-x-[-1] absolute   lg:left-[calc(-23%-5vw)] lg:top-0 left-[calc(-55%-5vw)] top-[calc(8rem-2vw)]"
              />{" "}
              {/* Flipped horizontally to face left */}
              <img
                src={carR}
                alt="Car facing right"
                className=" absolute md:right-[calc(-23%-5vw)]   md:top-0 right-[calc(-55%-5vw)] top-[calc(8rem-2vw)]"
              />{" "}
              {/* Not flipped, facing right */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
