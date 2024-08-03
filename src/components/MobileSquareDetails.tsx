import model from "../assets/icons/model.svg";
import engine from "../assets/icons/engine.svg";
import passangers from "../assets/icons/passangers.svg";
import max_power from "../assets/icons/max_power.svg";
import yearicon from "../assets/icons/yearicon.svg";
import CurrencyFormatter from "./resueable/currencyFormat";
import { Link } from "react-router-dom";

interface typeOfP {
  productData: any;
  Loading: boolean;
}

const MobileSquareDetails = ({ productData, Loading }: typeOfP) => {
  return (
    <div className="relative m-auto w-[265px] md:min-h-[350px] bg-white rounded-[10px] overflow-hidden  mt-[-5rem] z-40 mb-[3rem]">
      <div className="text-[30px] bg-secondary-light text-center text-white h-[71px]  p-5">
        {Loading ? (
          <p>Loading....</p>
        ) : (
          <CurrencyFormatter amount={productData?.price} />
        )}
      </div>

      <div className="px-2 mt-6">
        {/*  */}
        <div className="w-full flex items-center justify-between mb-6">
          {/*  */}
          <div className="flex  items-center gap-2">
            <img src={model} alt="" />
            <p className="text-[#433F3E]  text-[13px]">Model</p>
          </div>
          <p className="text-[#151413] text-[16px]">{productData?.model}</p>
        </div>
        {/*  */}
        <div className="w-full flex items-center justify-between mb-6">
          {/*  */}
          <div className="flex  items-center gap-2">
            <img src={engine} alt="" />
            <p className="text-[#433F3E]  text-[13px]">Engine type</p>
          </div>
          <p className="text-[#151413] text-[16px]">{productData?.engine}</p>
        </div>
        {/*  */}
        <div className="w-full flex items-center justify-between mb-6">
          {/*  */}
          <div className="flex  items-center gap-2">
            <img src={passangers} alt="" />
            <p className="text-[#433F3E]  text-[13px]">Passangers</p>
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
            <p className="text-[#433F3E]  text-[13px]">Max power</p>
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
            <p className="text-[#433F3E]  text-[13px]">Year</p>
          </div>
          <p className="text-[#151413] text-[16px]">2023</p>
        </div>
        {/*  */}
      </div>
      <div className="w-full text-center px-7">
        <button className="bg-[#86E900] text-[#fff] text-[16px] py-3 px-10  rounded-md transition-all duration-500 ease-out  hover:bg-primary w-full">
          Load more
        </button>
      </div>
      <p className="text-[#5A5555] text-[12px] w-full text-center mt-4  ">
        You need to
        <Link to="/sign-up" className="text-primary">
          {" "}
          create an account{" "}
        </Link>
        with us in order to rent this car.
      </p>
    </div>
  );
};

export default MobileSquareDetails;
