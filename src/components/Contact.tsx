import email from "../assets/icons/email.svg";
import phone from "../assets/icons/phone.svg";
import office_location from "../assets/icons/office_location.svg";
import { contactLink } from "./resueable/HomeDatas";
import { Link } from "react-router-dom";
import TextField from "./resueable/TextField";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Field is required"),
});

// type definition for login form
export type ContactInput = z.TypeOf<typeof contactSchema>;

const Contact = () => {
  const methods = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });
  // useForm() destructuring or methods destructuring. Here methods = useForm()
  const { handleSubmit, register } = methods;

  const contactMsg = async (data: any) => {
    console.log(data);
  };

  return (
    <section className="bg-secondary-dark w-full lg:pl-[21%] lg:pr-[16%] md:pb-3 py-10 md:flex block gap-11 contactpad" id="contact">
      <div className="px-3 md:w-[50%]">
        <h1 className="md:text-[36px] text-[24px] md:leading-[43.2px] leading-[28.8px] text-[#ffffff]">
          Reach Out To Us
        </h1>
        <div className="">
          <img src={email} alt="" className="mt-6" />
          <p className="text-[18px] text-[#ffffff] leading-[21.6px] my-3">
            Email
          </p>
          <p className="text-[14px] text-[#fff] font-light leading-[16.8px] pr-[25px]">
            Our friendly team is here to help.
          </p>
          <p className="text-[16px] text-[#1C6CDB] font-light leading-[16.8px] pr-[25px] mt-3">
            prorichauto@gmail.com
          </p>
        </div>
        <div className="">
          <img src={phone} alt="" className="mt-6" />
          <p className="text-[18px] text-[#ffffff] leading-[21.6px] my-3">
            Phone
          </p>
          <p className="text-[14px] text-[#fff] font-light leading-[16.8px] pr-[25px]">
            Mon-Fri from 8am to 5pm.
          </p>
          <p className="text-[16px] text-[#1C6CDB] font-light leading-[16.8px] pr-[25px] mt-3">
            +61 (046) 609-2198
            
          </p>
        </div>
        <div className="">
          <img src={office_location} alt="" className="mt-6" />
          <p className="text-[18px] text-[#ffffff] leading-[21.6px] my-3">
            Office
          </p>
          <p className="text-[14px] text-[#fff] font-light leading-[16.8px] pr-[25px]">
            Come say hello at our office HQ.
          </p>
          <p className="text-[16px] text-[#1C6CDB] font-light leading-[16.8px] pr-[15px] mt-3">
            1801 Ipswich Road, Rocklea, QLD 4106
          </p>
        </div>
        <ul className="flex gap-5 items-center my-8 ">
          {contactLink?.map((item) => (
            <li key={item.id} className="">
              <Link to={item.path} className="underline">
                <img src={item.icon} alt="" className="text-[#FFFFFF]" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" md:w-[45%] w-full bg-gray-50 md:rounded-[15px] rounded-none md:my-4 p-[20px]">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(contactMsg)}>
            <div className="w-full md:grid grid-cols-2 gap-3 mt-6 block">
              <TextField
                name="firstName"
                label="First Name"
                placeholder="e.g Emmanuel"
                variant="long"
              />
              <TextField
                name="lastName"
                label="Last Name"
                placeholder="e.g Jimmy"
              />
            </div>
            <div className="mt-6">
              <TextField
                name="email"
                label="Email"
                placeholder="e.g you@gmail.com"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="mt-6">
                Messages
              </label>
              <textarea
                rows={5}
                {...register("message")}
                id=""
                placeholder="Type your message"
                className={`w-full border border-[#B7B7B7] focus:border-[#B7B7B7] rounded-md p-3  resize-none focus:outline-none ${
                  methods.formState.errors.message ? "border-[#DA1E28]" : ""
                }`}
              ></textarea>
              {methods.formState.errors.message && (
                <p className="text-[#DA1E28] text-sm mt-[6px]">
                  {methods.formState.errors.message.message}
                </p>
              )}
            </div>
            <div className="mt-6 flex item-center ml-2">
              <TextField
                name="checkbox"
                label=""
                placeholder=""
                type="checkbox"
              />
              <p className="text-[14px] text-[#B7B7B7] ml-4 mt-1">
                You agree to our friendly privacy policy.
              </p>
            </div>
            <button className="w-full bg-primary-light py-4 px-[4rem] rounded-[16px] text-white mt-6">
              Send message
            </button>
          </form>
        </FormProvider>
      </div>
    </section>
  );
};

export default Contact;
