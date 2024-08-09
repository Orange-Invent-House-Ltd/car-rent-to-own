import Header from "../../components/Header";
import Footer from "../../components/Footer";
import icon1 from "../../assets/images/flexible.png";
import icon2 from "../../assets/images/lowre.png";
import icon3 from "../../assets/images/inno.png";
import Products from "../../components/Products";
import How_it_works from "../../components/How_it_works";
import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import { BorderBeam } from "@/components/magicui/border-beam";
import { MultiSlides } from "@/components/resueable/MultiSlides";

const Landing = () => {
  return (
    <>
      <main className="bg-gray-50 overflow-hidden">
        <Header />
        <div>
          <div className="w-full md:px-[5%] px-3 py-[5%] firstpara ">
            <div>
              <MultiSlides />
            </div>
            {/* <h1 className="text-secondary-light text-[16px] mb-3">
              WHAT IS RENT-TO-OWN?
            </h1> */}
            {/* <p className="text-[#726C6C] md:text-[48px] text-[25px] text-wrap font-bold">
              Rent-to-own (RTO) is a flexible option that allows individuals to
              lease a vehicle with the option to purchase it after a certain
              period. This method is beneficial for those who may not qualify
              for traditional financing or who prefer not to commit to a
              long-term purchase immediately.
            </p> */}
          </div>
          {/*  */}
          <div className="flex  flex-col justify-center items-center bg-[#fff] w-full py-[4rem] ">
            <div className="lg:w-[26%] w-full text-center firstpara-ad ">
              <h1 className="text-secondary-light text-[16px] mb-3">
                ADVANTAGES
              </h1>
              <p className=" w-full md:text-[37px] text-[25px] text-[#2B2928] text-wrap leading-10 font-black px-8">
                Why You Should Choose Car Rent-To-Own
              </p>
            </div>
            <div className="mt-5 md:flex block gap-7 md:px-0 px-6 ">
              <div className="relative md:w-[252px] w-[100%] border-2 border-t-gray-300 text-center flex flex-col  items-center py-6 px-2 rounded-[7px] md:mb-0 mb-6   shadow-md">
                <img src={icon1} alt="" className="w-[75px]" />
                <h1 className="mt-4 font-semibold text-[#433F3E]">
                  Flexible Approval
                </h1>
                <p className="text-[14px] font-light mt-4">
                  Easier approval for individuals with poor credit or no credit
                  history.
                </p>
                <BorderBeam size={50} duration={8} delay={4} />
              </div>
              {/*  */}
              <div className=" relative md:w-[252px] w-[100%] border-2 border-t-gray-300 text-center flex flex-col  items-center py-6 px-2 rounded-[7px] md:mb-0 mb-6  shadow-md">
                <img src={icon2} alt="" className="w-[75px]" />
                <h1 className="mt-4 font-semibold text-[#433F3E]">
                  Lower Initial Cost
                </h1>
                <p className="text-[14px] font-light mt-4">
                  Lower upfront costs compared to traditional car loans.
                </p>
                <BorderBeam size={50} duration={6} delay={4} />
              </div>
              {/*  */}
              <div className=" relative md:w-[252px] w-[100%] border-2 border-t-gray-300 text-center flex flex-col  items-center py-6 px-2 rounded-[7px] md:mb-0 mb-6 shadow-md">
                <img src={icon3} alt="" className="w-[75px]" />
                <h1 className="mt-4 font-semibold text-[#433F3E]">
                  Ownership Path
                </h1>
                <p className="text-[14px] font-light mt-4">
                  A clear path to ownership without needing immediate large
                  financing.
                </p>
                <BorderBeam size={50} duration={4} delay={4} />
              </div>
            </div>
          </div>
          {/* <BlurFadeDemo /> */}
          {/*  */}
          <Products />
          <How_it_works />
          <Banner />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Landing;
