import logo from "../../assets/images/logo.png";
import LanguageDropdown from "../../components/atoms/LanguageDropdown";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between py-[14px] px-6 md:px-[81px]">
      <div>
        <img src={logo} alt="Logo" className="h-[44px] aspect-auto" />
      </div>
      <div>
        <LanguageDropdown />
      </div>
    </div>
  );
};

export default Header;
