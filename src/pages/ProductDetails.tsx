import NavBar from "../components/resueable/NavBar";
import modelicon from "../assets/icons/model.svg";
import engine from "../assets/icons/engine.svg";
import passangers from "../assets/icons/passangers.svg";
import max_power from "../assets/icons/max_power.svg";
import Slider from "../components/resueable/Slider";
import { Link, useLocation } from "react-router-dom";
import locationIcon from "../assets/icons/location.svg";
import coloricon from "../assets/icons/coloricon.svg";
import yearicon from "../assets/icons/yearicon.svg";
import conditionicon from "../assets/icons/conditionicon.svg";
import transmission from "../assets/icons/transmission.svg";
import CarPaymentCalculator from "../components/CarPaymentCalculator";
import MobileSquareDetails from "../components/MobileSquareDetails";
import { useEffect, useState } from "react";
import { carsData } from "../components/resueable/HomeDatas";
import CurrencyFormatter from "../components/resueable/currencyFormat";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ProductDetails = () => {
  const location = useLocation();
  const [Loading, setLoading] = useState(true);

  const [productData, setProductData] = useState(
    location.state?.productData || null
  );

  useEffect(() => {
    if (!productData) {
      setLoading(true);
      const storedProductData = sessionStorage.getItem("productData");
      if (storedProductData) {
        setProductData(JSON.parse(storedProductData));
      }
    }
    setLoading(false);
  }, [productData]);
  useEffect(() => {}, []);
  //
  const slides: string[] = [
    productData?.image,
    productData?.image,
    productData?.image,
    productData?.image,
    productData?.image,
  ];
  //

  return (
    <div className="bg-gray-50 w-full">
      <div>
        <NavBar />
      </div>
      <header>
        <div className="px-6">
          <Slider slides={slides} />
        </div>
        <div
          className="md:flex  block w-full md:pl-[16%] md:mr-[8%] px-3  py-[3%] "
          key={productData?.id}
        >
          <div className="flex-[45%] md:hidden ">
            <MobileSquareDetails productData={productData} Loading={Loading} />
          </div>
          <div className="flex-[45%]">
            <h1 className="md:text-[36px] text-[24px] text-[#2B2928] px-1 leading-[43.2px]">
              {productData?.name}
            </h1>
            <p className="flex items-center px-1 text-[#726C6C] text-[16px] leading-[19.2px]">
              <span>
                <img src={locationIcon} alt="" className="mr-2" />
              </span>
              Sydney, {productData?.location}
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
                      {productData?.model}
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
                      {productData?.engine}
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
                      {productData?.passangers}
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
                      {productData?.max_power}HP
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
            {
              <CarPaymentCalculator
                productData={productData}
                Loading={Loading}
              />
            }
          </div>
        </div>
      </header>
      <section className="w-full bg-gray-50 md:pl-[13%] px-3 md:py-[1rem] py-10 mb-[7rem]">
        <p className=" w-full md:text-[37px] text-[25px] text-[#2B2928] text-wrap leading-10 font-black mb-9">
          Find Similar Cars
        </p>
        <div className="w-full md:overflow-x-auto no-scrollbar">
          <div className="md:flex md:space-x-4 grid grid-cols-2 gap-1 items-center">
            {carsData?.map((item) => (
              <div
                className="md:w-[335px] w-[165px] md:h-[550px] h-[370px] bg-white rounded-[12px] overflow-hidden md:flex-shrink-0 md:mb-10 md:mt-0 mt-5"
                key={item.id}
              >
                <div className=" md:w-full w-[165px] md:h-[245px] h-[108px] overflow-hidden flex justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className="md:w-full w-[165px] md:h-[245px] h-[108px] object-cover cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.1]"
                  />
                </div>
                <h1 className="my-4 px-2 text-[#151413] md:text-[18px] text-[11px]">
                  {item.name}
                </h1>
                <div className="px-2">
                  <div className="w-full flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img src={modelicon} alt="" />
                      <p className="text-[#898483] font-light text-[10px]">
                        Model
                      </p>
                    </div>
                    <p className="text-[#151413] md:text-[12px] text-[10px]">
                      {item.model}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img src={engine} alt="" />
                      <p className="text-[#898483] font-light text-[10px]">
                        Engine type
                      </p>
                    </div>
                    <p className="text-[#151413] md:text-[12px] text-[10px]">
                      {item.engine}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img src={passangers} alt="" />
                      <p className="text-[#898483] font-light text-[10px]">
                        Passangers
                      </p>
                    </div>
                    <p className="text-[#151413] md:text-[12px] text-[10px]">
                      {item.passangers}
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img src={max_power} alt="" />
                      <p className="text-[#898483] font-light text-[10px]">
                        Max power
                      </p>
                    </div>
                    <p className="text-[#151413] md:text-[12px] text-[10px]">
                      {item.max_power}HP
                    </p>
                  </div>
                  <div className="w-full flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img src={locationIcon} alt="" />
                      <p className="text-[#898483] font-light text-[10px]">
                        Location
                      </p>
                    </div>
                    <p className="text-[#151413] text-[12px]">
                      {item.location}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center px-2 pb-4 text-center">
                  <p className="text-secondary-light md:text-[18px] text-[10px] font-semibold">
                    <CurrencyFormatter amount={item.price} />
                  </p>
                  <button className="border border-[#D8E6FA] md:text-[14px] text-[10px] text-secondary-light px-3 py-1 rounded-[10px] transition-all duration-500 ease-out hover:opacity-70">
                    <Link
                      to={`/products/${item.name}&:${item.id}`}
                      onClick={() => {
                        sessionStorage.setItem(
                          "productData",
                          JSON.stringify(item)
                        );
                        setProductData(item);
                      }}
                    >
                      More details
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full text-center mt-7">
          <button className="bg-[#86E900] text-[#fff] text-[12px] py-3 px-10 rounded-md transition-all duration-500 ease-out hover:bg-primary">
            Load more
          </button>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default ProductDetails;
