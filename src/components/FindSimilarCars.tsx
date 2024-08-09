import modelicon from "../assets/icons/model.svg";
import { Link } from "react-router-dom";
import CurrencyFormatter from "../components/resueable/currencyFormat";
import engine from "../assets/icons/engine.svg";
import passangers from "../assets/icons/passangers.svg";
import max_power from "../assets/icons/max_power.svg";
import locationIcon from "../assets/icons/location.svg";

import { carsData } from "./resueable/HomeDatas";
import useCarStore from "@/store/ProductStore";

const FindSimilarCars = () => {
  const { setCurrentCar } = useCarStore();

  const handleProductClick = (product: any) => {
    setCurrentCar(product);
  };

  return (
    <div>
      <section className="w-full bg-gray-50 md:px-[17%] px-3 md:py-[1rem] py-10 mb-[7rem]">
        <p className=" w-full md:text-[37px] text-[25px] text-[#2B2928] text-wrap leading-10 font-black mb-9">
          Find Similar Cars
        </p>
        <div className="w-full md:overflow-x-auto no-scrollbar">
          <div className="md:flex md:space-x-4 grid grid-cols-2 gap-1 items-center">
            {carsData?.map((item) => (
              <div
                className="lg:w-[35%] w-[100%] md:h-[550px] h-[370px] bg-white rounded-[12px] overflow-hidden md:flex-shrink-0 md:mb-10 md:mt-0 mt-5 similar-cars"
                key={item.id}
              >
                <div className="  w-full md:h-[245px] h-[108px] overflow-hidden flex justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className=" w-full md:h-[245px] h-[108px] object-cover cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.1]"
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
                      onClick={() => handleProductClick(item)}
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
          <button className="bg-[#86E900] text-[#fff] text-[12px] py-3 px-10 rounded-md transition-all duration-500 ease-out hover:bg-primary-light">
            Load more
          </button>
        </div>
      </section>
    </div>
  );
};

export default FindSimilarCars;
