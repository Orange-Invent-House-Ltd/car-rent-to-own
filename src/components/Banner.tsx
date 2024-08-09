// import cost from "../assets/icons/cost.svg";
// import contract from "../assets/icons/contract.svg";
// import mentainance from "../assets/icons/mentainance.svg";
import banner_img from "../assets/images/banner_img.png";
import FrequentlyAskedQ from "./resueable/Accodion";

const Banner = () => {
  return (
    <section
      className="relative bg-gray-50 w-full  lg:pl-[15%] lg:pr-[8%]  lg:pt-[1rem] lg:pb-3 py-10 md:flex justify-between block gap-11 mb-[5%]"
      id="faq"
    >
      <div className="px-3 lg:mt-[2rem] lg:basis-1/2 max-h-[500px] overflow-y-scroll">
        <h1 className="lg:text-[36px] text-[24px] lg:leading-[43.2px] leading-[28.8px] text-[#2B2928] mb-3">
          Frequently Asked Questions
        </h1>
        <FrequentlyAskedQ />
        {/* <h1 className="lg:text-[36px] text-[24px] lg:leading-[43.2px] leading-[28.8px] text-[#2B2928]">
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
          </p> */}
        {/* </div> */}
      </div>
      <div className=" lg:basis-1/2 w-full mb:absolute bottom-[-34%] right-0  lg:mt-[5rem]  translate-y-[39%] bannerimg ">
        <img src={banner_img} alt="" className="scale-x-[-1] " />
      </div>
    </section>
  );
};

export default Banner;
