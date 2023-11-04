const LanguageDropdown = () => {
  return (
    <div className="relative">
      <select
        id="countries"
        className="bg-[#F0F5FA] text-[#B0B7C3] text-sm rounded-[16px] block w-full py-[14px] px-[18px] pr-[57px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white outline-none"
      >
        <option value="US">English (UK)</option>
        <option value="CA">English (US)</option>
      </select>
      <span className="absolute top-[21px] right-[19px]">
        <svg
          width={11}
          height={7}
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector"
            d="M1 1L5.5 6L10 1"
            stroke="#B0B7C3"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
};

export default LanguageDropdown;
