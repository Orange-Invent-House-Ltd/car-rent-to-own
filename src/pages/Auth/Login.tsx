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
const RegisterSchema = z.object({
  email: z.string().email("Invalid email").min(1, "Email is required"),
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
});

// Type definition for the Login form input
export type RegisterInput = z.TypeOf<typeof RegisterSchema>;

const Login: React.FC = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  // Initialize useForm with Zod resolver
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });

  // Destructure methods from useForm
  const { handleSubmit } = methods;

  // Form submission handler
  const signUpUser = async (data: RegisterInput) => {
    console.log(data);
  };

  return (
    <div className=" grid md:grid-cols-2 items-center md:min-h-screen">
      <img src={authbg} alt="" className=" md:block h-[100%]" />
      {/* Form */}
      <div className=" w-full bg-[#FAFAFA]  rounded-[18px] p-10 md:px-[4rem]   ">
        <div className="">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="My Balance Logo" className="cursor-pointer" />
            <p className="text-primary-light ml-2 text-[18px]">rent2own</p>
          </Link>
        </div>
        <h1 className="md:text-[36px] text-[24px] text-[#0A0B0A] mt-3">
          Sign in
        </h1>
        <p className="text-[#0A0B0A] md:text-[16px] text-[12px]">
          Welcome back. Sign in below.
        </p>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(signUpUser)}>
            <div className="mt-4">
              <AuthTextFeild
                name="email"
                label="Email"
                placeholder="e.g@example.com"
                variant="long"
              />
            </div>
            <div className="mt-4 ">
              <div className="relative">
                <AuthTextFeild
                  name="password"
                  label="Password"
                  placeholder="************"
                  variant="long"
                  type={passwordShown ? "text" : "password"}
                />
                <img
                  src={passwordShown ? hide : eye}
                  alt="show password"
                  className="absolute top-9 right-3 hover:cursor-pointer w-[20px] h-5"
                  onClick={() => setPasswordShown(!passwordShown)}
                />
              </div>
            </div>
            <button className="w-full bg-primary-light py-2 px-[4rem] rounded-[11px] text-white mt-6  ">
              Sign in
            </button>
          </form>
        </FormProvider>
        <p className="text-[#0A0B0A] text-[14px] w-full  md:text-center mt-10">
          New user?{" "}
          <Link to="/sign-up" className="text-primary">
            Sign up
          </Link>
        </p>
        <p className="text-[#0A0B0A] text-[14px] w-full mt-5 md:text-center">
          <Link to="/forgot-password" className="font-medium underline">
            Forgot password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
