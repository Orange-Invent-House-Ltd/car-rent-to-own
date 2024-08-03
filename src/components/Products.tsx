import model from "../assets/icons/model.svg";
import engine from "../assets/icons/engine.svg";
import passangers from "../assets/icons/passangers.svg";
import max_power from "../assets/icons/max_power.svg";
import location from "../assets/icons/location.svg";
import { Link } from "react-router-dom";
import { carsData } from "./resueable/HomeDatas";
import CurrencyFormatter from "./resueable/currencyFormat";

const Products = () => {
  const handleProductClick = (product: any) => {
    sessionStorage.setItem("productData", JSON.stringify(product));
  };

  return (
    <section className="w-full bg-gray-50 md:px-[21%] px-3 md:py-[6rem] py-10 ">
      <p className=" w-full md:text-[37px] text-[25px] text-[#2B2928] text-wrap leading-10 font-black mb-9">
        The Best Car-to-Rent Platform
      </p>
      <div className=" w-full md:grid grid-cols-3 block">
        {carsData?.map((item) => (
          <div
            className="md:w-[335px] w-full max-h[480px] bg-white rounded-[12px] overflow-hidden mb-10"
            key={item.id}
          >
            <div className="w-full h-[245px] overflow-hidden flex justify-center">
              <img
                src={item.image}
                alt=""
                className="w-full h-[245px] object-cover cursor-pointer transition-all duration-500 ease-in-out hover:scale-[1.1]"
              />
            </div>
            <h1 className="my-4 px-2 text-[#151413] text-[18px]">
              {item.name}
            </h1>
            <div className="px-2">
              {/*  */}
              <div className="w-full flex items-center justify-between mb-4">
                {/*  */}
                <div className="flex  items-center gap-2">
                  <img src={model} alt="" />
                  <p className="text-[#898483] font-light text-[10px]">Model</p>
                </div>
                <p className="text-[#151413] text-[12px]">{item.model}</p>
              </div>
              {/*  */}
              <div className="w-full flex items-center justify-between mb-4">
                {/*  */}
                <div className="flex  items-center gap-2">
                  <img src={engine} alt="" />
                  <p className="text-[#898483] font-light text-[10px]">
                    Engine type
                  </p>
                </div>
                <p className="text-[#151413] text-[12px]">{item.engine}</p>
              </div>
              {/*  */}
              <div className="w-full flex items-center justify-between mb-4">
                {/*  */}
                <div className="flex  items-center gap-2">
                  <img src={passangers} alt="" />
                  <p className="text-[#898483] font-light text-[10px]">
                    Passangers
                  </p>
                </div>
                <p className="text-[#151413] text-[12px]">{item.passangers}</p>
              </div>
              {/*  */}
              <div className="w-full flex items-center justify-between mb-4">
                {/*  */}
                <div className="flex  items-center gap-2">
                  <img src={max_power} alt="" />
                  <p className="text-[#898483] font-light text-[10px]">
                    Max power
                  </p>
                </div>
                <p className="text-[#151413] text-[12px]">{item.max_power}HP</p>
              </div>
              {/*  */}
              <div className="w-full flex items-center justify-between mb-4">
                {/*  */}
                <div className="flex  items-center gap-2">
                  <img src={location} alt="" />
                  <p className="text-[#898483] font-light text-[10px]">
                    Location
                  </p>
                </div>
                <p className="text-[#151413] text-[12px]">{item.location}</p>
              </div>
              {/*  */}
            </div>
            <div className="flex justify-between items-center px-2 pb-4">
              <p className="text-secondary-light text-[18px] font-semibold">
                <CurrencyFormatter amount={item.price} />
              </p>
              <button
                className="border border-[#D8E6FA] text-[14px] text-secondary-light px-3 py-1 rounded-[10px] transition-all duration-500 ease-out hover:opacity-70"
                onClick={() => handleProductClick(item)}
              >
                <Link
                  to={`/products/:${item.name}&:${item.id}`}
                  state={{ productData: item }}
                >
                  More details
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full text-center">
        <button className="bg-[#86E900] text-[#fff] text-[12px] py-3 px-10  rounded-md transition-all duration-500 ease-out  hover:bg-primary">
          Load more
        </button>
      </div>
    </section>
  );
};

export default Products;
