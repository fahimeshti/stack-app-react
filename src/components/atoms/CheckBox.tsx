import { Field, useField } from "formik";

type Props = { name: string; label: string; className?: string };

const Checkbox = ({ name, label, className }: Props) => {
  const [meta, field] = useField(name);

  return (
    <div>
      <div
        className={`flex gap-[17px] items-center mt-[5px] mb-[21px] ${className}`}
      >
        <Field
          type="checkbox"
          id="checkbox_id"
          name={name}
          className="
relative peer shrink-0
appearance-none w-[28px] h-[28px] border-0 border-blue-500 rounded-[8px] bg-[#EDEFF1]
mt-1
checked:bg-blue-600 checked:border-0
focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100
disabled:border-steel-400 disabled:bg-steel-400
"
        />
        <label
          htmlFor="checkbox_id"
          className="text-[#B0B7C3] font-medium mt-1"
        >
          {label}
        </label>
        <svg
          className="
absolute 
w-4 h-4 mt-1.5 ml-1.5
hidden peer-checked:block
pointer-events-none text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      {field.touched && field.error ? (
        <div className="text-[#FF5630] font-medium text-sm text-left -mt-2">
          {field.error}
        </div>
      ) : null}
    </div>
  );
};

export default Checkbox;
