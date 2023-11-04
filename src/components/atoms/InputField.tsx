import React from "react";
import { Field, useField } from "formik";
import isEmpty from "../../utils/isEmpty";

type Props = {
  icon?: any;
  showicon?: boolean;
  placeholder: string;
  name: string;
  type: string;
  setShowPassword?: any;
  showPassword?: boolean;
};

const InputField = ({
  icon = {},
  showicon = false,
  placeholder = "",
  name = "",
  type = "",
  setShowPassword = null,
  showPassword = false,
}: Props) => {
  const [field, meta, helpers] = useField({ name });

  return (
    <div>
      <div className="text-base font-medium relative">
        {!isEmpty(icon) && (
          <div className="absolute top-1/2 -translate-y-1/2 left-[18px]">
            {icon}
          </div>
        )}
        <Field
          className={`w-full rounded-ct placeholder:text-[#B0B7C3] py-5 px-[50px] outline-none border ${
            meta.touched && meta.error
              ? "border-[#FF5630] shadow-custom"
              : "border-[#F3F3F3]"
          }`}
          name={name}
          placeholder={`${placeholder}`}
          type={type}
        />

        <div className="absolute right-[21px] bottom-1/2 translate-y-[58%]">
          {showicon &&
            (showPassword ? (
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#DCDFE5"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_16_154)">
                    <path
                      d="M10 4.03906C6.17879 4.03906 2.71351 6.12968 0.15649 9.52541C-0.0521632 9.80361 -0.0521632 10.1923 0.15649 10.4705C2.71351 13.8703 6.17879 15.9609 10 15.9609C13.8212 15.9609 17.2865 13.8703 19.8435 10.4746C20.0522 10.1964 20.0522 9.8077 19.8435 9.5295C17.2865 6.12968 13.8212 4.03906 10 4.03906ZM10.2741 14.1976C7.73755 14.3572 5.64284 12.2665 5.80239 9.72588C5.93331 7.63117 7.63118 5.9333 9.72589 5.80238C12.2625 5.64283 14.3572 7.73345 14.1976 10.2741C14.0626 12.3647 12.3647 14.0626 10.2741 14.1976ZM10.1473 12.2584C8.78081 12.3443 7.65163 11.2192 7.74164 9.85271C7.81119 8.72353 8.72763 7.81118 9.85681 7.73754C11.2233 7.65162 12.3525 8.77671 12.2625 10.1432C12.1888 11.2765 11.2724 12.1888 10.1473 12.2584Z"
                      fill="#DCDFE5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_16_154">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            ))}
        </div>
      </div>

      {meta.touched && meta.error ? (
        <div className="text-[#FF5630] font-medium text-sm text-left mt-4">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default InputField;
