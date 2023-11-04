import { Link, useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";
import toast from "react-hot-toast";

import InputField from "../../components/atoms/InputField";
import { validationSchema } from "./validation/validationSchema";
import EmailIcon from "../../assets/svgs/EmailIcon";
import SmileIcon from "../../assets/svgs/SmileIcon";
import LockIcon from "../../assets/svgs/LockIcon";
import Checkbox from "../../components/atoms/CheckBox";
import { useRegisterMutation } from "../../features/auth/authApiSlice";

type SignupInfo = {
  email: string;
  name: string;
  password: string;
  termsOfService: boolean;
};

const SignupPage = () => {
  const [register, result] = useRegisterMutation();
  const navigateTo = useNavigate();

  const handleSubmit = async (data: SignupInfo) => {
    const { email, password } = data;

    const result: any = await register({
      email,
      password,
    });

    if (result?.data?.token?.length) {
      toast.success("Registration successful!");
      navigateTo("/signin");
    } else {
      toast.error(result?.error?.data?.error);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center text-center py-16 px-6">
      <div className="w-full max-w-[540px]">
        <h1 className="text-[26px] text-[#323B4B] font-bold">
          Getting Started
        </h1>
        <p className="text-[#8A94A6] text-[18px] font-medium mt-[19px] mb-[30px]">
          Create an account to continue!
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-[30px] w-full">
          <button className="w-full h-[58px] min-w-[255px] flex items-center justify-center gap-3 bg-[#F0F5FA] text-[#8A94A6] text-base font-medium rounded-ct">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={25}
              height={25}
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M22.7141 10.4599H21.875V10.4167H12.5V14.5833H18.387C17.5281 17.0089 15.2203 18.75 12.5 18.75C9.04845 18.75 6.25001 15.9516 6.25001 12.5C6.25001 9.04843 9.04845 6.25 12.5 6.25C14.0932 6.25 15.5427 6.85104 16.6464 7.83281L19.5927 4.88645C17.7323 3.1526 15.2438 2.08333 12.5 2.08333C6.74741 2.08333 2.08334 6.74739 2.08334 12.5C2.08334 18.2526 6.74741 22.9167 12.5 22.9167C18.2526 22.9167 22.9167 18.2526 22.9167 12.5C22.9167 11.8016 22.8448 11.1198 22.7141 10.4599Z"
                fill="#FFC107"
              />
              <path
                d="M3.28436 7.65156L6.70676 10.1615C7.6328 7.86874 9.87551 6.24999 12.5 6.24999C14.0932 6.24999 15.5427 6.85104 16.6463 7.83281L19.5927 4.88645C17.7323 3.1526 15.2437 2.08333 12.5 2.08333C8.49895 2.08333 5.02915 4.34218 3.28436 7.65156Z"
                fill="#FF3D00"
              />
              <path
                d="M12.5 22.9167C15.1906 22.9167 17.6354 21.887 19.4839 20.2125L16.2599 17.4844C15.2141 18.2766 13.9141 18.75 12.5 18.75C9.79062 18.75 7.4901 17.0224 6.62344 14.6115L3.22656 17.2287C4.95052 20.6021 8.45156 22.9167 12.5 22.9167Z"
                fill="#4CAF50"
              />
              <path
                d="M22.7141 10.4599H21.875V10.4167H12.5V14.5833H18.387C17.9745 15.7484 17.225 16.7531 16.2583 17.4849L16.2599 17.4839L19.4839 20.212C19.2557 20.4193 22.9167 17.7083 22.9167 12.5C22.9167 11.8016 22.8448 11.1198 22.7141 10.4599Z"
                fill="#1976D2"
              />
            </svg>
            <span>Sign Up with Google</span>
          </button>

          <button className="w-full h-[58px] min-w-[255px] flex items-center justify-center gap-3 bg-[#F0F5FA] text-[#8A94A6] text-base font-medium rounded-ct">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={24}
              viewBox="0 0 20 24"
              fill="none"
            >
              <g clipPath="url(#clip0_6_21)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.256 3.89624C14.0196 2.88584 14.5985 1.45774 14.3891 0C13.141 0.088904 11.6822 0.907396 10.831 1.97424C10.055 2.9409 9.41729 4.37889 9.66636 5.77454C11.0308 5.81828 12.439 4.98002 13.256 3.89624ZM20 17.6086C19.454 18.8561 19.1912 19.4135 18.4878 20.5185C17.5066 22.0609 16.123 23.9815 14.4069 23.9956C12.8837 24.0125 12.491 22.9725 10.4231 22.9852C8.35532 22.9965 7.92424 24.0153 6.39835 23.9998C4.6836 23.9843 3.37257 22.2514 2.39135 20.709C-0.353892 16.3992 -0.642649 11.3402 1.0502 8.64908C2.25449 6.73835 4.15399 5.6207 5.93853 5.6207C7.75455 5.6207 8.89726 6.64804 10.4013 6.64804C11.8601 6.64804 12.7483 5.61789 14.8489 5.61789C16.4391 5.61789 18.1238 6.51115 19.3226 8.05215C15.3922 10.2733 16.0286 16.0606 20 17.6086Z"
                  fill="#C1C7D0"
                />
              </g>
              <defs>
                <clipPath id="clip0_6_21">
                  <rect width={20} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span>Sign Up with Apple ID</span>
          </button>
        </div>

        <div className="flex items-center gap-[23px] my-[30px]">
          <span className="h-[2px] w-full bg-[#F0F5FA]" />
          <span className="text-[#B0B7C3] text-[20px] font-medium">OR</span>
          <span className="h-[2px] w-full bg-[#F0F5FA]" />
        </div>

        {/* Form */}
        <div>
          <Formik
            initialValues={{
              email: "eve.holt@reqres.in",
              name: "",
              password: "pistol",
              termsOfService: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-5 md:space-y-[30px] w-full">
              <InputField
                icon={<EmailIcon />}
                placeholder="Your Email"
                name="email"
                type="email"
              />
              <InputField
                icon={<SmileIcon />}
                placeholder="Your Name"
                name="name"
                type="text"
              />
              <InputField
                icon={<LockIcon />}
                placeholder="Create Password"
                name="password"
                type="password"
              />

              <div className="flex gap-[19px] px-[18px] my-[25px]">
                <span className="w-full h-1 rounded-sm bg-[#38CB89]" />
                <span className="w-full h-1 rounded-sm bg-[#38CB89]" />
                <span className="w-full h-1 rounded-sm bg-[#38CB89]" />
                <span className="w-full h-1 rounded-sm bg-[#38CB89]" />
                <span className="w-full h-1 rounded-sm bg-[#38CB89]" />
                <span className="w-full h-1 rounded-sm bg-[#F3F3F3]" />
              </div>

              <Checkbox
                name="termsOfService"
                label="I agree to the Terms & Conditions"
              />

              <button
                type="submit"
                disabled={result?.isLoading}
                className="w-full border border-[#377DFF] bg-[#377DFF] py-5 rounded-ct text-base font-medium text-white hover:bg-[#467ee5] transition-colors duration-100 disabled:bg-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed"
              >
                Sign Up
              </button>
            </Form>
          </Formik>

          <div className="text-[#B0B7C3] font-medium text-base mt-[35px]">
            Already have an account?{" "}
            <Link to={`/signin`} className="text-[#377DFF]">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
