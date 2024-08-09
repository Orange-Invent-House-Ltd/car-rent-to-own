import NavBar from "../components/resueable/NavBar";
import modelicon from "../assets/icons/model.svg";
import engine from "../assets/icons/engine.svg";
import passangers from "../assets/icons/passangers.svg";
import max_power from "../assets/icons/max_power.svg";
import Slider from "../components/resueable/Slider";
import locationIcon from "../assets/icons/location.svg";
import coloricon from "../assets/icons/coloricon.svg";
import yearicon from "../assets/icons/yearicon.svg";
import conditionicon from "../assets/icons/conditionicon.svg";
import transmission from "../assets/icons/transmission.svg";
import CarPaymentCalculator from "../components/CarPaymentCalculator";
import MobileSquareDetails from "../components/MobileSquareDetails";
import { useEffect, useState } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import DesktopNavbar from "@/components/resueable/DesktopNavbar";
import useCarStore from "@/store/ProductStore";
import FindSimilarCars from "@/components/FindSimilarCars";

const ProductDetails = () => {
  const { currentCar } = useCarStore();

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentCar) {
      setLoading(true);
    }
    setLoading(false);
  }, [currentCar]);
  useEffect(() => {}, []);

  const slides: any = [
    currentCar?.image,
    currentCar?.image,
    currentCar?.image,
    currentCar?.image,
    currentCar?.image,
  ];

  return (
    <div className="bg-gray-50 w-full ">
      <div>
        <NavBar />
        <DesktopNavbar />
      </div>
      <header>
        <div className="px-6 md:h-[730px] h-[343px]">
          <Slider slides={slides} />
        </div>
        <div
          className="md:flex  block w-full lg:pl-[16%] md:mr-[8%] px-3  py-[3%] "
          key={currentCar?.id}
        >
          <div className="flex-[45%] md:hidden ">
            <MobileSquareDetails currentCar={currentCar} Loading={Loading} />
          </div>
          <div className="flex-[45%]">
            <h1 className="md:text-[36px] text-[24px] text-[#2B2928] px-1 leading-[43.2px]">
              {currentCar?.name}
            </h1>
            <p className="flex items-center px-1 text-[#726C6C] text-[16px] leading-[19.2px]">
              <span>
                <img src={locationIcon} alt="" className="mr-2" />
              </span>
              Sydney, {currentCar?.location}
            </p>

            <div className="bg-white mt-[2rem] md:p-[2rem] p-[10px]rounded-md">
              <h1 className="text-[#2B2928] text-[24px] leading-[28.8px]">
                Genenral Information
              </h1>
              <p className="text-[#2B2928] text-[14px] leading-[16.8px] mt-5">
                Lorem ipsum dolor sit amet consectetur. A interdum vel nam
                pellentesque turpis mi lacus mus lorem. Ultrices vitae volutpat
                posuere facilisis eu nec. Odio posuere amet dignissim vitae quam
                ut enim sem amet. Fusce sit gravida pharetra venenatis sodales
                sit erat donec rhoncus.
              </p>
              <p className="text-[#2B2928] text-[14px] leading-[16.8px] mt-5">
                Lorem ipsum dolor sit amet consectetur. A interdum vel nam
                pellentesque turpis mi lacus mus lorem. Ultrices vitae volutpat
                posuere facilisis eu nec. Odio posuere amet dignissim vitae quam
                ut enim sem amet. Fusce sit gravida pharetra venenatis sodales
                sit erat donec rhoncus.
              </p>
            </div>
            {/*  */}
            <div className="bg-white md:mt-[2rem] mt-[3rem] md:p-[2rem]  rounded-md">
              <h1 className="text-[#2B2928] text-[24px] leading-[28.8px]">
                Car Information
              </h1>
              <div className=" w-full max-h[480px] bg-white rounded-[12px] overflow-hidden mt-10 mb-3">
                <div className="px-2">
                  <div className="w-full flex items-center justify-between mb-6">
                    {/*  */}
                    <div className="flex  items-center gap-2">
                      <img src={coloricon} alt="" />
                      <p className="text-[#433F3E]  text-[14px]">Color</p>
                    </div>
                    <p className="text-[#151413] text-[16px]">Black</p>
                  </div>
                  {/*  */}
                  <div className="w-full flex items-center justify-between mb-6">
                    {/*  */}
                    <div className="flex  items-center gap-2">
                      <img src={modelicon} alt="" />
                      <p className="text-[#433F3E]  text-[14px]">Model</p>
                    </div>
                    <p className="text-[#151413] text-[16px]">
                      {currentCar?.model}
                    </p>
                  </div>
                  {/*  */}
                  <div className="w-full flex items-center justify-between mb-6">
                    {/*  */}
                    <div className="flex  items-center gap-2">
                      <img src={engine} alt="" />
                      <p className="text-[#433F3E]  text-[14px]">Engine type</p>
                    </div>
                    <p className="text-[#151413] text-[16px]">
                      {currentCar?.engine}
                    </p>
                  </div>
                  {/*  */}
                  <div className="w-full flex items-center justify-between mb-6">
                    {/*  */}
                    <div className="flex  items-center gap-2">
                      <img src={passangers} alt="" />
                      <p className="text-[#433F3E]  text-[14px]">Passangers</p>
                    </div>
                    <p className="text-[#151413] text-[16px]">
                      {currentCar?.passangers}
                    </p>
                  </div>
                  {/*  */}
                  <div className="w-full flex items-center justify-between mb-6">
                    {/*  */}
                    <div className="flex  items-center gap-2">
                      <img src={max_power} alt="" />
                      <p className="text-[#433F3E]  text-[14px]">Max power</p>
                    </div>
                    <p className="text-[#151413] text-[16px]">
                      {currentCar?.max_power}HP
                    </p>
                  </div>
                  {/*  */}
                  <div className="w-full flex items-center justify-between mb-6">
                    {/*  */}
                    <div className="flex  items-center gap-2">
                      <img src={yearicon} alt="" />
                      <p className="text-[#433F3E]  text-[14px]">Year</p>
                    </div>
                    <p className="text-[#151413] text-[16px]">2023</p>
                  </div>
                  {/*  */}
                  <div className="w-full flex items-center justify-between mb-6">
                    {/*  */}
                    <div className="flex  items-center gap-2">
                      <img src={locationIcon} alt="" />
                      <p className="text-[#433F3E]  text-[14px]">Location</p>
                    </div>
                    <p className="text-[#151413] text-[16px]">Sydney</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="w-full flex items-center justify-between mb-6">
                    {/*  */}
                    <div className="flex  items-center gap-2">
                      <img src={conditionicon} alt="" />
                      <p className="text-[#433F3E]  text-[14px]">Condition</p>
                    </div>
                    <p className="text-[#151413] text-[16px]">New</p>
                  </div>
                  {/*  */}
                  {/*  */}
                  <div className="w-full flex items-center justify-between mb-2">
                    {/*  */}
                    <div className="flex  items-center gap-2">
                      <img src={transmission} alt="" />
                      <p className="text-[#433F3E]  text-[14px]">
                        Transmission
                      </p>
                    </div>
                    <p className="text-[#151413] text-[16px]">Automatic</p>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-[45%]  ">
            {<CarPaymentCalculator currentCar={currentCar} Loading={Loading} />}
          </div>
        </div>
      </header>
      <FindSimilarCars />
      <Contact />
      <Footer />
    </div>
  );
};

export default ProductDetails;
