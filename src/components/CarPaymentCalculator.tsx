import model from "../assets/icons/model.svg";
import engine from "../assets/icons/engine.svg";
import passangers from "../assets/icons/passangers.svg";
import max_power from "../assets/icons/max_power.svg";
import TextFeildCalculate from "../components/resueable/TextFieldCalculate";
import yearicon from "../assets/icons/yearicon.svg";
import CurrencyFormatter from "./resueable/currencyFormat";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import RangeSlider from "./resueable/RangeSlider";

const calculateSchema = z.object({
  amount: z.string().min(1, "Car amount is required"),
  initialpayment: z.string().min(1, "Initial payment cannot be negative"),
  weeklypayment: z.string().min(1, "Weekly payment is required"),
  range: z.string().optional(),
});

interface typeOfP {
  currentCar: any;
  Loading: boolean;
}

// type definition for login form
export type claculatePaymet = z.TypeOf<typeof calculateSchema>;
const CarPaymentCalculator: React.FC<typeOfP> = ({ currentCar, Loading }) => {
  const methods = useForm<claculatePaymet>({
    resolver: zodResolver(calculateSchema),
  });
  // useForm() destructuring or methods destructuring. Here methods = useForm()
  const { handleSubmit, setValue, reset } = methods;

  const Calculate = (data: claculatePaymet) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="relative m-auto md:w-[365px] md:min-h-[350px] bg-white rounded-[10px] overflow-hidden  calcbox  mt-[-5rem] z-40 md:block hidden">
        <div className="text-[30px] bg-secondary-light text-center text-white h-[71px]  p-5">
          {Loading ? (
            <p>Loading....</p>
          ) : (
            <CurrencyFormatter amount={currentCar?.price} />
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
            <p className="text-[#151413] text-[16px]">{currentCar?.model}</p>
          </div>
          {/*  */}
          <div className="w-full flex items-center justify-between mb-6">
            {/*  */}
            <div className="flex  items-center gap-2">
              <img src={engine} alt="" />
              <p className="text-[#433F3E]  text-[13px]">Engine type</p>
            </div>
            <p className="text-[#151413] text-[16px]">{currentCar?.engine}</p>
          </div>
          {/*  */}
          <div className="w-full flex items-center justify-between mb-6">
            {/*  */}
            <div className="flex  items-center gap-2">
              <img src={passangers} alt="" />
              <p className="text-[#433F3E]  text-[13px]">Passangers</p>
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
              <p className="text-[#433F3E]  text-[13px]">Max power</p>
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
              <p className="text-[#433F3E]  text-[13px]">Year</p>
            </div>
            <p className="text-[#151413] text-[16px]">2023</p>
          </div>
          {/*  */}
        </div>
        <div className="w-full text-center px-7">
          <button className="bg-[#86E900] text-[#fff] text-[16px] py-3 px-10  rounded-md transition-all duration-500 ease-out  hover:bg-primary-light w-full">
            <a href ="tel: +610466092198">Contact Us</a>
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
      {/* Calculator */}
      <div className="relative m-auto md:w-[365px] md:min-h-[522px] bg-secondary-dark rounded-[10px] mt-[5rem] p-5">
        <h1 className="text-[#fff] text-[24px] leading-[28.8px]">
          Car Payment Calculator
        </h1>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(Calculate)}>
            <div className=" mt-4 ">
              <p className="text-[14px] leading-[16.8px] text-[#ffffff] font-[300]">
                Months
              </p>
              <RangeSlider
                name="range"
                onChange={(value) => setValue("range", value.toString())}
              />
            </div>
            <div className="mt-4">
              <TextFeildCalculate
                name="amount"
                label="Car amount"
                placeholder="$4050"
              />
            </div>
            <div className="mt-4">
              <TextFeildCalculate
                name="initialpayment"
                label="Initial payment"
                placeholder="$500"
              />
            </div>
            <div className="mt-4">
              <TextFeildCalculate
                name="weeklypayment"
                label="Weekly payment"
                placeholder=" $400"
              />
            </div>

            <button className="w-full bg-primary-light py-2 px-[4rem] rounded-[6px] text-white mt-6">
              Calculate
            </button>
            <p className="text-[#E3E3E3] text-[12px] w-full  mt-4 font-[300] ">
              This repayment calculator only gives you an estimate of what your
              weekly repayments could be. This is to be used as a guide only and
              does not constitute a quote, pre-qualification, or approval.
            </p>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default CarPaymentCalculator;
