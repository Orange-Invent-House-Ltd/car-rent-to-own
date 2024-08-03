import cost from "../assets/icons/cost.svg";
import contract from "../assets/icons/contract.svg";
import mentainance from "../assets/icons/mentainance.svg";
import banner_img from "../assets/images/banner_img.png";
const Banner = () => {
  return (
    <section className="bg-gray-50 w-full  md:pl-[21%] md:pr-[9%]  md:pt-[1rem] md:pb-3 py-10 md:flex justify-between block gap-11">
      <div className="px-3 md:mt-[5rem]">
        <h1 className="md:text-[36px] text-[24px] md:leading-[43.2px] leading-[28.8px] text-[#2B2928]">
          What You Need to Consider Before Choosing Rent-To-Own
        </h1>
        <div className="">
          <img src={cost} alt="" className="mt-6" />
          <p className="text-[18px] text-[#433F3E] leading-[21.6px] my-3">
            Cost
          </p>
          <p className="text-[14px] text-[#5A5555] leading-[16.8px] pr-[25px]">
            Rent-to-own agreements can be more expensive over time compared to
            outright purchase due to higher overall interest rates.
          </p>
        </div>
        <div className="">
          <img src={contract} alt="" className="mt-6" />
          <p className="text-[18px] text-[#433F3E] leading-[21.6px] my-3">
            Contract Terms
          </p>
          <p className="text-[14px] text-[#5A5555] leading-[16.8px] pr-[25px]">
            It's important to fully understand the terms of the agreement,
            including any penalties for early termination or failure to make
            payments.
          </p>
        </div>
        <div className="">
          <img src={mentainance} alt="" className="mt-6" />
          <p className="text-[18px] text-[#433F3E] leading-[21.6px] my-3">
            Maintenance
          </p>
          <p className="text-[14px] text-[#5A5555] leading-[16.8px] pr-[25px]">
            The lessee is typically responsible for maintaining the vehicle in
            good condition during the lease period.
          </p>
        </div>
      </div>
      <div className=" md:mt-[15rem] mt-9 w-full  ">
        <img src={banner_img} alt="" className="scale-x-[-1] " />
      </div>
    </section>
  );
};

export default Banner;
