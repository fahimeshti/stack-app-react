import SearchIcon from "../assets/svgs/SearchIcon";
import BellIcon from "../assets/svgs/BellIcon";
import userImage from "../assets/images/userImage.png";

const AuthHeader = () => {
  return (
    <div className="flex items-center justify-between pr-[35px]">
      <div className="relative w-fit">
        <input
          type="search"
          id="default-search"
          className="bg-[#F0F5FA] rounded-[14px] py-[18px] px-[24px] lg:min-w-[540px] outline-none"
          placeholder="Search"
        />
        <span className="absolute bottom-1/2 translate-y-1/2 right-[19px] z-10">
          <SearchIcon />
        </span>
      </div>

      <div className="flex items-center gap-4 lg:gap-[43px]">
        <button type="button">
          <BellIcon />
        </button>
        <button
          type="button"
          className="w-[47px] h-[47px] rounded-full overflow-hidden"
        >
          <img src={userImage} alt="user" />
        </button>
      </div>
    </div>
  );
};

export default AuthHeader;
