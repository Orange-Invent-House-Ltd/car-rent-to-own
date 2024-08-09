import { Link } from "react-router-dom";
import authbg from "../../assets/images/authbg.png";
import logo from "../../assets/icons/logo.svg";
import eye from "../../assets/icons/eye.svg";
import hide from "../../assets/icons/hide.svg";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import AuthTextFeild from "../../components/resueable/AuthTextField";
import { useState } from "react";

// Define the Zod schema with additional validation
const RegisterSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(11, "Phone number is required"),
    gender: z.string().nonempty("Gender is required"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[@$!%*?&#]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"], // Indicates which field the error message is associated with
  });

// Type definition for the register form input
export type RegisterInput = z.TypeOf<typeof RegisterSchema>;

const Register: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  // Initialize useForm with Zod resolver
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });

  // Destructure methods from useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  // Form submission handler
  const signUpUser = async (data: RegisterInput) => {
    console.log(data);
  };

  return (
    <div className=" grid md:grid-cols-2 items-center md:min-h-screen">
      <img src={authbg} alt="" className="h-[100%] flex" />
      <div className=" bg-[#FAFAFA] bg-opacity-50 backdrop-blur-md rounded-[18px] md:px-[4rem] p-10 min-h-screen">
        <div className="">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="My Balance Logo" className="cursor-pointer" />
            <p className="text-primary-light ml-2 text-[18px]">rent2own</p>
          </Link>
        </div>
        <h1 className="md:text-[36px] text-[24px] text-[#0A0B0A] mt-3">
          Sign Up
        </h1>
        <p className="text-[#0A0B0A] md:text-[16px] text-[12px]">
          Join thousands of users on Car Rent-To-Join today!
        </p>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(signUpUser)}>
            <div className="mt-4 md:grid grid-cols-2 gap-3 block">
              <AuthTextFeild
                name="firstName"
                label="First Name"
                placeholder="e.g John"
                variant="long"
              />
              <AuthTextFeild
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                variant="long"
              />
            </div>
            <div className="mt-4">
              <AuthTextFeild
                name="email"
                label="Email"
                placeholder="e.g@example.com"
              />
            </div>
            <div className="mt-5">
              <AuthTextFeild
                name="phone"
                label="Phone Number"
                placeholder="(288)8367770"
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="gender"
                className="block text-sm mb-[6px] capitalize text-[#0A0B0A]"
              >
                Select Gender:
              </label>
              <select
                id="gender"
                {...register("gender")}
                className="block w-full border-2 border-[#CCCBCB] rounded-md p-2 outline-none focus:border-[#CCCBCB] bg-transparent text-[#0A0B0A] disabled:opacity-75 disabled:hover:cursor-not-allowed"
              >
                <option value="" disabled className="text-[#868686]">
                  Select a gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && <p>{errors.gender.message}</p>}
            </div>
            <div className="mt-4 md:grid grid-cols-2 gap-3 block">
              <div className="relative">
                <AuthTextFeild
                  name="password"
                  label="Password"
                  placeholder="************"
                  type={passwordShown ? "text" : "password"}
                />
                <img
                  src={passwordShown ? hide : eye}
                  alt="show password"
                  className="absolute top-9 right-3 hover:cursor-pointer w-[20px] h-5"
                  onClick={() => setPasswordShown(!passwordShown)}
                />
              </div>
              <div className="relative">
                <AuthTextFeild
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Re-enter password"
                  type={confirmPasswordShown ? "text" : "password"}
                />
                <img
                  src={confirmPasswordShown ? hide : eye}
                  alt="show password"
                  className="absolute top-9 right-3 hover:cursor-pointer w-[20px] h-5"
                  onClick={() => setConfirmPasswordShown(!confirmPasswordShown)}
                />
              </div>
            </div>
            <button className="w-full bg-primary-light py-2 px-[4rem] rounded-[6px] text-white mt-6">
              Sign up
            </button>
          </form>
        </FormProvider>
        <p className="text-[#0A0B0A] text-[14px] w-full mt-4 md:text-center">
          Existing user?{" "}
          <Link to="/sign-in" className="text-primary-light">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
